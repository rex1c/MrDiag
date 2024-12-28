'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

type Message = {
  id: number
  text: string
  sender: 'user' | 'support'
  time: string
}

export default function SupportPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'سلام، چطور می‌تونم کمکتون کنم؟',
      sender: 'support',
      time: '12:30'
    }
  ])
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, message])
    setNewMessage('')

    // Simulate support response
    setTimeout(() => {
      const response: Message = {
        id: messages.length + 2,
        text: 'پیام شما دریافت شد. همکاران ما در اسرع وقت پاسخگو خواهند بود.',
        sender: 'support',
        time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, response])
    }, 1000)
  }

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl h-[calc(100vh-12rem)] flex flex-col">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-xl text-white font-bold">پشتیبانی</h2>
      </div>

      {/* Messages Container */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-2xl p-3 ${
              message.sender === 'user'
                ? 'bg-primary text-white ml-4'
                : 'bg-white/5 text-white mr-4'
            }`}>
              <p className="mb-1">{message.text}</p>
              <span className="text-xs opacity-60">{message.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={sendMessage} className="p-4 border-t border-white/10">
        <div className="relative">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="پیام خود را بنویسید..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 pr-12 text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
          />
        <button
          type="submit"
          className="absolute inset-y-0 left-0 flex items-center justify-center w-12 h-full bg-[#FF8A00] text-white rounded-l-lg hover:bg-[#FF8A00]/80 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
        </div>
      </form>
    </div>
  )
}