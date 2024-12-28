'use client'

import Image from 'next/image'
import { FileText, Check, X } from 'lucide-react'

export default function OrderHistoryPage() {
  const orders = [
    {
      id: 1,
      title: 'سفارش شماره ۱',
      description: 'توضیحات مختصر سفارش شماره یک که شامل محصولات مختلف می‌باشد',
      image: '/images/product1.jpg',
      status: 'success',
      date: '۱۴۰۲/۱۰/۰۵'
    },
    {
      id: 2,
      title: 'سفارش شماره ۲',
      description: 'توضیحات مختصر سفارش شماره دو که شامل محصولات مختلف می‌باشد',
      image: '/images/product2.jpg',
      status: 'failed',
      date: '۱۴۰۲/۱۰/۰۳'
    }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl text-white font-bold">تاریخچه سفارش</h2>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div 
            key={order.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <Image
                  src={order.image}
                  alt={order.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">{order.title}</h3>
                  <span className="text-white/60 text-sm">{order.date}</span>
                </div>
                
                
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-2 ${
                    order.status === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {order.status === 'success' ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>موفق</span>
                      </>
                    ) : (
                      <>
                        <X className="w-5 h-5" />
                        <span>ناموفق</span>
                      </>
                    )}
                  </div>
                  
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap">
                    <FileText className="w-5 h-5" />
                    <span className="whitespace-nowrap">فاکتور</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
