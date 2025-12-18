
import { GoogleGenAI } from "@google/genai";

// Initialization
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// 1. Navigation / Routing Logic
const navTriggers = document.querySelectorAll('.nav-trigger');
const sections = document.querySelectorAll('.view-section');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');

function switchView(viewId: string) {
    sections.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    // Update active state on nav links
    navTriggers.forEach(t => {
        const link = (t as HTMLElement).dataset.link;
        if (link === viewId) {
            t.classList.add('text-eduGold', 'border-b-2', 'border-eduGold');
        } else {
            t.classList.remove('text-eduGold', 'border-b-2', 'border-eduGold');
        }
    });

    // Close mobile menu if open
    mobileMenu?.classList.add('hidden');
}

navTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const view = (trigger as HTMLElement).dataset.link;
        if (view) switchView(view);
    });
});

mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
});

// 2. Contact Form Logic
const contactForm = document.getElementById('contact-form') as HTMLFormElement;
const formSuccess = document.getElementById('form-success');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.classList.add('hidden');
    formSuccess?.classList.remove('hidden');
    
    // Reset after 5s
    setTimeout(() => {
        contactForm.reset();
        contactForm.classList.remove('hidden');
        formSuccess?.classList.add('hidden');
    }, 5000);
});

// 3. AI Consultant (Gemini) Logic
const chatWindow = document.getElementById('ai-chat-window');
const openChatBtn = document.getElementById('open-chat');
const closeChatBtn = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input') as HTMLInputElement;
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');

function toggleChat() {
    chatWindow?.classList.toggle('chat-open');
    chatWindow?.classList.toggle('chat-closed');
    if (chatWindow?.classList.contains('chat-open')) {
        chatWindow.style.opacity = '1';
    } else {
        chatWindow.style.opacity = '0';
    }
}

openChatBtn?.addEventListener('click', toggleChat);
closeChatBtn?.addEventListener('click', toggleChat);

async function handleAIChat() {
    const text = chatInput.value.trim();
    if (!text) return;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'bg-eduBlue text-white p-3 rounded-xl border border-blue-900 rounded-tr-none ml-auto max-w-[85%]';
    userMsg.textContent = text;
    chatMessages?.appendChild(userMsg);
    
    chatInput.value = '';
    chatMessages!.scrollTop = chatMessages!.scrollHeight;

    // Add loading indicator
    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'bg-white p-3 rounded-xl border border-gray-100 rounded-tl-none mr-auto text-gray-400 italic';
    loadingMsg.textContent = 'Thinking...';
    chatMessages?.appendChild(loadingMsg);
    chatMessages!.scrollTop = chatMessages!.scrollHeight;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: text,
            config: {
                systemInstruction: `
                    You are "Louis", the AI virtual assistant for Louis Eduplus Ltd. 
                    Louis Eduplus Ltd is a Christ-centred education consultancy in Nigeria.
                    Mission: To transform education globally through innovative curricula and values-led teacher training.
                    Key offerings: Teacher workshops, Curriculum audit, Student enrichment, and books like "Ripples in Teacher Education".
                    Tone: Professional, academic, encouraging, and faith-rooted.
                    Guidelines: Be concise. If asked for a deep consultation, suggest using the Contact page.
                `,
            }
        });

        chatMessages?.removeChild(loadingMsg);
        
        const aiMsg = document.createElement('div');
        aiMsg.className = 'bg-white p-3 rounded-xl border border-gray-100 rounded-tl-none mr-auto max-w-[85%]';
        aiMsg.textContent = response.text || "I'm sorry, I'm having trouble processing that right now.";
        chatMessages?.appendChild(aiMsg);
    } catch (err) {
        console.error(err);
        chatMessages?.removeChild(loadingMsg);
        const errMsg = document.createElement('div');
        errMsg.className = 'text-red-500 text-xs text-center';
        errMsg.textContent = 'Connection error. Please try again.';
        chatMessages?.appendChild(errMsg);
    }
    
    chatMessages!.scrollTop = chatMessages!.scrollHeight;
}

sendBtn?.addEventListener('click', handleAIChat);
chatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleAIChat();
});
