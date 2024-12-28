'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { Trash2, Plus, Minus, ShoppingBag, Search } from 'lucide-react'

// Sample cart data
const cartItems = [
  {
    id: 1,
    name: 'دستگاه دیاگ مدل X-100',
    image: '/course.webp',
    price: 12000000,
    quantity: 1,
  },
  {
    id: 2,
    name: 'دستگاه پروگرامر BSL',
    image: '/course.webp',
    price: 8500000,
    quantity: 1,
  }
]

export default function Cart() {
  const [items, setItems] = useState(cartItems)
  const [coupon, setCoupon] = useState('')

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalCost = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Shopping Cart Image Section */}
      <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-xl overflow-hidden border border-white/20 mb-8">
        <div className="relative h-48 md:h-64">
          <Image
            src="/course.webp"
            alt="سبد خرید"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">سبد خرید</h1>
          </div>
        </div>
      </div>

      {/* Cart Items Section */}
      <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-xl border border-white/20 p-6">
        {items.length > 0 ? (
          <>
            {/* Cart Items */}
            <div className="space-y-6 mb-8">
              {items.map((item) => (
                <div 
                  key={item.id}
                  data-cart-item
                  className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg bg-white/10 border border-white/10 transition-all duration-300"
                  style={{ opacity: 1, transform: 'translateX(0)' }}
                >
                  {/* Product Image */}
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 text-center md:text-right">
                    <h3 className="text-white font-medium mb-2">{item.name}</h3>
                    <p className="text-primary">{item.price.toLocaleString('fa-IR')} تومان</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-2">
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <span className="text-white min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Total Price */}
                  <div className="text-white">
                    {(item.price * item.quantity).toLocaleString('fa-IR')} تومان
                  </div>

                  {/* Delete Action */}
                  <button 
                    onClick={(e) => {
                      const parent = (e.currentTarget.closest('[data-cart-item]') as HTMLElement)
                      if (parent) {
                        parent.style.opacity = '0'
                        parent.style.transform = 'translateX(100%)'
                        setTimeout(() => removeItem(item.id), 300)
                      }
                    }}
                    className="text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Actions */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                {/* Coupon Input */}
                <div className="w-full md:w-auto flex gap-2">
                  <input
                    type="text"
                    placeholder="کد تخفیف"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="w-full md:w-64 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:border-primary"
                  />
                  <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors flex items-center gap-2 md:min-w-[120px]">
                    <Search className="w-5 h-5" />
                    <span className="whitespace-nowrap">بررسی کد</span>
                  </button>
                </div>

                {/* Cart Total and Actions */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <span className="text-white">
                    مجموع: {totalCost.toLocaleString('fa-IR')} تومان
                  </span>
                  <div className="flex gap-3">
                    <button 
                      onClick={clearCart}
                      className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                    >
                      پاک کردن سبد
                    </button>
                    <Link
                      href="/shipping"
                      className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors flex items-center gap-2"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      ادامه خرید
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-white text-lg">سبد خرید شما خالی است</p>
            <Link
              href="/shop"
              className="inline-block mt-4 px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              مشاهده محصولات
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
