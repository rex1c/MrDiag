'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Search, MapPin, Plus, CreditCard, Wallet } from 'lucide-react'

export default function ShippingPage() {
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('bank')
  const [walletAmount] = useState(50000)
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 35.6892,
    lng: 51.3890
  })
  const addressModalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (addressModalRef.current && !addressModalRef.current.contains(event.target as Node)) {
        setIsAddressModalOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Sample order data
  const orders = [
    {
      id: 1,
      name: 'محصول شماره یک',
      price: 120000,
      quantity: 2,
      image: '/images/product1.jpg'
    },
    {
      id: 2,
      name: 'محصول شماره دو',
      price: 85000,
      quantity: 1,
      image: '/images/product2.jpg'
    }
  ]

  const totalPrice = orders.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const finalPrice = selectedPaymentMethod === 'wallet' ? Math.max(0, totalPrice - walletAmount) : totalPrice

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Shipping Details Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
          <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" />
            انتخاب آدرس
          </h2>
          
          {/* Search Bar */}
          <div className="relative mb-6 group">
            <input
              type="text"
              placeholder="جستجوی آدرس..."
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-primary pr-10 group-hover:border-primary transition-colors"
            />
            <Search className="absolute top-1/2 right-3 -translate-y-1/2 text-white/60 group-hover:text-primary transition-colors w-5 h-5" />
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-80 bg-white/5 border border-white/20 rounded-lg mb-6 flex items-center justify-center">
            <div className="text-white/60 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              نقشه
            </div>
          </div>

          {/* Address Details */}
          <div className="space-y-4">
            <p className="text-white/80">آدرس انتخاب شده:</p>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-white/60 text-sm">
                {selectedLocation.lat.toFixed(6)}, {selectedLocation.lng.toFixed(6)}
              </p>
            </div>
            <button
              onClick={() => setIsAddressModalOpen(true)}
              className="w-full px-4 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              <Plus className="w-5 h-5" />
              تکمیل آدرس
            </button>
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
          <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-primary" />
            سفارشات شما
          </h2>
          
          {/* Order Items */}
          <div className="space-y-4 mb-6">
            {orders.map(item => (
              <div 
                key={item.id} 
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-white/60">تعداد: {item.quantity}</p>
                  <p className="text-primary font-bold">{item.price.toLocaleString('fa-IR')} تومان</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Details */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <h3 className="text-xl text-white font-bold flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              اطلاعات پرداخت
            </h3>
            
            {/* Payment Method */}
            <div className="space-y-3">
              <p className="text-white/80">روش پرداخت:</p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedPaymentMethod('bank')}
                  className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center justify-center gap-2 ${
                    selectedPaymentMethod === 'bank'
                      ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                      : 'border-white/20 text-white/60 hover:border-primary hover:text-primary'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  پرداخت بانکی
                </button>
                <button
                  onClick={() => setSelectedPaymentMethod('wallet')}
                  className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center justify-center gap-2 ${
                    selectedPaymentMethod === 'wallet'
                      ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                      : 'border-white/20 text-white/60 hover:border-primary hover:text-primary'
                  }`}
                >
                  <Wallet className="w-5 h-5" />
                  کیف پول
                </button>
              </div>
              {selectedPaymentMethod === 'wallet' && (
                <div className="text-center text-primary text-sm">
                  موجودی: {walletAmount.toLocaleString('fa-IR')} تومان
                </div>
              )}
            </div>

            {/* Price Summary */}
            <div className="bg-white/5 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center text-white">
                <span className="text-white/60">مبلغ کل:</span>
                <span className="text-lg font-bold">{totalPrice.toLocaleString('fa-IR')} تومان</span>
              </div>

              {selectedPaymentMethod === 'wallet' && (
                <>
                  <div className="flex justify-between items-center text-white/60">
                    <span>کسر از کیف پول:</span>
                    <span> {Math.min(walletAmount, totalPrice).toLocaleString('fa-IR')}- تومان</span>
                  </div>
                  <div className="flex justify-between items-center text-white pt-2 border-t border-white/10">
                    <span>مبلغ قابل پرداخت:</span>
                    <span className="text-lg font-bold text-primary">{finalPrice.toLocaleString('fa-IR')} تومان</span>
                  </div>
                </>
              )}
            </div>

            <button className="w-full px-4 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              پرداخت و ثبت سفارش
            </button>
          </div>
        </div>
      </div>

      {/* Address Modal */}
      {isAddressModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          style={{
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            ref={addressModalRef} 
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-96 relative"
            style={{
              animation: 'slideIn 0.3s ease-out'
            }}
          >
            <button 
              onClick={() => setIsAddressModalOpen(false)}
              className="absolute left-2 top-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl text-white font-bold mb-6">تکمیل آدرس</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-white/80 text-sm">نام و نام خانوادگی</label>
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 text-sm">شماره تماس</label>
                <input
                  type="tel"
                  placeholder="09xxxxxxxxx"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:border-primary"
                  dir="ltr"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 text-sm">آدرس دقیق</label>
                <textarea
                  placeholder="آدرس دقیق خود را وارد کنید"
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <button 
                onClick={() => setIsAddressModalOpen(false)}
                className="w-full px-4 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                ثبت آدرس
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  )
}