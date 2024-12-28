"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('مشخصات محصول')
  const [qualityVote, setQualityVote] = useState<string | null>(null)
  const [valueVote, setValueVote] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState('/product1.webp')

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Main Product Card */}
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Product Image - Left Side */}
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image 
                  src={selectedImage}
                  alt="محصول"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Thumbnail Images */}
              <div className="flex gap-4 mt-4">
                {[1, 2, 3, 4].map((num) => (
                  <div 
                    key={num} 
                    onClick={() => setSelectedImage(`/product${num}.webp`)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity ${
                      selectedImage === `/product${num}.webp` ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <Image
                      src={`/product${num}.webp`}
                      alt={`تصویر ${num}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info - Right Side */}
            <div className="md:w-1/2 space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">نام محصول</h1>
                <div className="text-white/60">برند: هایکو</div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 text-white/80">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span>4.2</span>
                </div>
                <span className="text-sm">امتیاز 300 خریدار</span>
              </div>

              {/* Price */}
              <div className="space-y-1">
                <div className="text-white/60">قیمت محصول:</div>
                <div className="text-2xl text-primary">۲,۵۰۰,۰۰۰ تومان</div>
              </div>
              
              {/* Availability */}
              <div className="text-white/80">
                <span className="text-primary">وضعیت: </span>
                موجود در انبار
              </div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed">
                لنت ترمز یکی از قطعات حیاتی سیستم ترمز خودرو است که وظیفه کاهش سرعت و توقف خودرو را بر عهده دارد. این قطعه با ایجاد اصطکاک بین دیسک یا درام ترمز و سطح لنت، انرژی حرکتی را به حرارت تبدیل می‌کند. جنس لنت ترمز معمولاً از ترکیبات مقاوم در برابر حرارت و ساییدگی ساخته می‌شود تا دوام و عملکرد بهینه را در شرایط مختلف فراهم کند.
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-white">تعداد:</span>
                <div className="flex items-center gap-2 bg-white/20 rounded-lg p-2">
                  <button 
                    onClick={() => handleQuantityChange('decrease')}
                    className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/20 rounded-lg transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-white">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange('increase')}
                    className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/20 rounded-lg transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-primary text-white py-3 rounded-xl hover:bg-primary/90 transition-colors">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-8">
          {/* Tabs Header */}
          <div className="flex flex-wrap gap-4 md:gap-8 border-b border-white/20 mb-6 overflow-x-auto pb-2">
            {['مشخصات محصول', 'نظرات کاربران'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 md:px-4 py-2 text-sm md:text-base text-white hover:text-primary transition-colors relative whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-transform ${
                  activeTab === tab 
                    ? 'text-primary after:scale-x-100' 
                    : 'after:scale-x-0'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-4 text-white/80 text-sm md:text-base">
            {/* مشخصات محصول Content */}
            {activeTab === 'مشخصات محصول' && (
              <div className="space-y-4">
                <h3 className="text-white font-semibold">مشخصات فنی:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>برند: اصلی</li>
                  <li>کشور سازنده: آلمان</li>
                  <li>گارانتی: ۱۸ ماه</li>
                  <li>مدل: ۲۰۲۳</li>
                </ul>
              </div>
            )}

            {/* نظرات کاربران Content */}
            {activeTab === 'نظرات کاربران' && (
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-4">نظرسنجی درباره محصول</h3>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white">کیفیت محصول</span>
                        <span className="text-primary text-sm">۸۵٪</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white">ارزش خرید</span>
                        <span className="text-primary text-sm">۷۵٪</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white">رضایت کلی</span>
                        <span className="text-primary text-sm">۹۰٪</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Voting Sections */}
                  <div className="mt-6 space-y-6">
                    {/* Quality Vote */}
                    <div className={`transform transition-all duration-500 ease-out ${
                      qualityVote 
                        ? 'opacity-0 scale-95 h-0 -translate-y-4 overflow-hidden' 
                        : 'opacity-100 scale-100'
                    }`}>
                      <h4 className="text-white font-semibold mb-4">نظر شما درباره کیفیت محصول</h4>
                      <div className="flex gap-4">
                        <button 
                          onClick={() => setQualityVote('مرغوب')}
                          className="flex-1 bg-white/10 text-white py-2 text-sm rounded-xl hover:bg-white/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                        >
                          <span>✨ مرغوب</span>
                        </button>
                        <button 
                          onClick={() => setQualityVote('نامرغوب')}
                          className="flex-1 bg-white/10 text-white py-2 text-sm rounded-xl hover:bg-white/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                        >
                          <span>⚠️ نامرغوب</span>
                        </button>
                      </div>
                    </div>

                    {/* Value Vote */}
                    <div className={`transform transition-all duration-500 ease-out ${
                      valueVote 
                        ? 'opacity-0 scale-95 h-0 -translate-y-4 overflow-hidden' 
                        : 'opacity-100 scale-100'
                    }`}>
                      <h4 className="text-white font-semibold mb-4">نظر شما درباره ارزش خرید</h4>
                      <div className="flex gap-4">
                        <button 
                          onClick={() => setValueVote('دارد')}
                          className="flex-1 bg-white/10 text-white py-2 text-sm rounded-xl hover:bg-white/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                        >
                          <span>💎 دارد</span>
                        </button>
                        <button 
                          onClick={() => setValueVote('ندارد')}
                          className="flex-1 bg-white/10 text-white py-2 text-sm rounded-xl hover:bg-white/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                        >
                          <span>💫 ندارد</span>
                        </button>
                      </div>
                    </div>

                    {/* Thank You Message */}
                    <div className={`transition-all duration-500 ease-out transform ${
                      qualityVote && valueVote 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 -translate-y-4 h-0 overflow-hidden'
                    }`}>
                      <div className="bg-primary/20 backdrop-blur-md rounded-xl p-4 border border-primary/30 flex items-center justify-center gap-3">
                        <span className="text-2xl">🎉</span>
                        <p className="text-primary font-medium">با تشکر از شرکت در نظرسنجی</p>
                        <span className="text-2xl">✨</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold text-white mb-6">محصولات مرتبط</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[1, 2, 3].map((num) => (
            <Link href="/product-details" key={num} className="block">
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image
                  src={`/product${num}.webp`}
                  alt={`محصول ${num}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">نام محصول {num}</h3>
                  <p className="text-primary-light mb-2">برند محصول</p>
                  <div className="flex justify-between items-center">
                    <span className="text-white">۲,۵۰۰,۰۰۰ تومان</span>
                    <span className="text-sm text-green-400">
                      موجود
                    </span>
                  </div>
                  <button className="w-full mt-4 btn-primary">افزودن به سبد</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
