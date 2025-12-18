
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Hello! I am Louis, your virtual educational consultant. How can I help you transform learning today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `
            You are "Louis", a virtual consultant for Louis Eduplus Ltd. 
            Louis Eduplus Ltd is a Christ-centred education consultancy.
            Key info:
            - Mission: Revolutionize education by marrying innovation with Christian values.
            - Founder: Louis Odubanjo.
            - Services: Teacher Training, Curriculum Design, Student Enrichment, School Consultancy, Digital Solutions.
            - Book: "Ripples in Teacher Education" and "ConforMix".
            - Tone: Professional, inspiring, helpful, and Christ-centred.
            Always encourage visitors to book a consultation via the contact page if they need deep help.
          `,
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || 'I apologize, I could not process that. Please try again or contact us directly.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: 'I am currently having trouble connecting. Please feel free to reach out via our contact page!' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] shadow-2xl rounded-2xl flex flex-col border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-300">
          {/* Header */}
          <div className="bg-eduBlue p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-eduGold rounded-full flex items-center justify-center text-xs font-bold text-eduBlue">LE</div>
              <div className="text-white">
                <p className="font-bold text-sm leading-none">Virtual Consultant</p>
                <p className="text-[10px] text-eduGold">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-eduGold">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-eduBlue text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our services..."
                className="flex-grow px-4 py-2 bg-gray-50 border rounded-full text-sm outline-none focus:ring-1 focus:ring-eduGold"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="p-2 bg-eduBlue text-white rounded-full hover:bg-blue-900 disabled:opacity-50"
              >
                <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-eduGold text-eduBlue rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
        >
          <span className="sr-only">Open Chat</span>
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
