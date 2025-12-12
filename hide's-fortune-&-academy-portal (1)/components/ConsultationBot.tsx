import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { initChat, sendMessage } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ConsultationBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleInit();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInit = async () => {
    setIsLoading(true);
    const text = await initChat();
    setMessages([{ id: 'init', role: 'model', text }]);
    setIsLoading(false);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const reply = await sendMessage(input);
    const botMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: reply };
    
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[320px] md:w-[380px] h-[500px] flex flex-col border border-beige-200 mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300 overflow-hidden">
          {/* Header */}
          <div className="bg-beige-100 p-4 border-b border-beige-200 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-beige-300 p-1.5 rounded-full">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-700 text-sm">ひでのAIコンシェルジュ</p>
                <p className="text-[10px] text-gray-500">あなたにぴったりのメニューをご案内</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-beige-50/30">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`
                    max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm
                    ${msg.role === 'user' 
                      ? 'bg-beige-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-700 border border-beige-100 rounded-bl-none'}
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-beige-100">
                   <div className="flex space-x-1">
                     <div className="w-2 h-2 bg-beige-300 rounded-full animate-bounce" style={{ animationDelay: '0s'}}></div>
                     <div className="w-2 h-2 bg-beige-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s'}}></div>
                     <div className="w-2 h-2 bg-beige-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s'}}></div>
                   </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-beige-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="質問や悩みを入力..."
              className="flex-1 bg-beige-50 border border-beige-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-beige-300"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-beige-600 text-white p-2 rounded-full hover:bg-beige-700 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group flex items-center gap-2 bg-gradient-to-r from-beige-500 to-beige-600 text-white py-3 px-5 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1
          ${isOpen ? 'bg-gray-800' : ''}
        `}
      >
        {!isOpen && (
           <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium">
             迷ったら相談チャットへ
           </span>
        )}
        <div className="relative">
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          {!isOpen && (
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
             </span>
          )}
        </div>
      </button>
    </div>
  );
};