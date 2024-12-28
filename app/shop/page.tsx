'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Settings, Filter, ChevronDown, X } from 'lucide-react'
import Carousel from '@/components/Carousel'

// Sample product data
const products = [
  { id: 1, name: 'روغن موتور', price: '850,000', brand: 'توتال', inStock: true, image: '/oil.webp' },
  { id: 2, name: 'فیلتر روغن', price: '450,000', brand: 'بوش', inStock: true, image: '/oilfilter.webp' },
  { id: 3, name: 'لنت ترمز', price: '1,200,000', brand: 'آکو', inStock: false, image: '/lent.webp' },
  // Add more products as needed
]

export default function Shop() {
  const [selectedFilters, setSelectedFilters] = useState({
    price: [],
    brand: [],
    inStock: false,
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Carousel Section */}
      <section className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
            <div 
              className="flex flex-row-reverse w-[300%] h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentSlide * 33.333}%)` }}
            >
              <div className="relative w-1/3 h-full">
                <Image
                  src="/oil.webp"
                  alt="فروشگاه قطعات خودرو"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative w-1/3 h-full">
                <Image
                  src="/lent.webp"
                  alt="فروشگاه قطعات خودرو"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative w-1/3 h-full">
                <Image
                  src="/product.webp"
                  alt="فروشگاه قطعات خودرو"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Dot Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-3 md:flex md:flex-wrap md:justify-center md:gap-8">
          {[
            { name: 'قطعات ماشین', src: '/car-parts.png' },
            { name: 'ریمپ', src: '/remap.png' },
            { name: 'ابزار', src: '/tools.png' }
          ].map((category, index) => (
            <div key={index} className="flex flex-col items-center gap-2 md:gap-3">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer">
                <Image
                  src={category.src}
                  alt={category.name}
                  quality={100}
                  width={80}
                  height={80}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
              <span className="text-white text-sm sm:text-base md:text-lg font-medium text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="md:hidden w-full mb-4 btn flex items-center justify-center gap-2"
        >
          <Filter className="w-5 h-5" />
          فیلترها
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar - Mobile */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden">
              <div className="absolute left-0 top-0 h-full w-80 bg-background-dark p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">فیلترها</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-white hover:text-primary-light"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                {/* Filter Content */}
                <div className="space-y-6">
                  {/* Price Filter */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      قیمت
                    </h4>
                    <div className="space-y-2">
                      {['زیر ۵۰۰ هزار', '۵۰۰ تا ۱ میلیون', 'بالای ۱ میلیون'].map((range, index) => (
                        <label key={index} className="flex items-center gap-2 text-white/80">
                          <input type="checkbox" className="form-checkbox" />
                          {range}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      برند
                    </h4>
                    <div className="space-y-2">
                      {['توتال', 'بوش', 'آکو'].map((brand, index) => (
                        <label key={index} className="flex items-center gap-2 text-white/80">
                          <input type="checkbox" className="form-checkbox" />
                          {brand}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Stock Filter */}
                  <div>
                    <label className="flex items-center gap-2 text-white">
                      <input type="checkbox" className="form-checkbox" />
                      فقط کالاهای موجود
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filters Sidebar - Desktop */}
          <div className="hidden md:block w-64 space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">فیلترها</h3>
              
              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  قیمت
                </h4>
                <div className="space-y-2">
                  {['زیر ۵۰۰ هزار', '۵۰۰ تا ۱ میلیون', 'بالای ۱ میلیون'].map((range, index) => (
                    <label key={index} className="flex items-center gap-2 text-white/80">
                      <input type="checkbox" className="form-checkbox" />
                      {range}
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  برند
                </h4>
                <div className="space-y-2">
                  {['توتال', 'بوش', 'آکو'].map((brand, index) => (
                    <label key={index} className="flex items-center gap-2 text-white/80">
                      <input type="checkbox" className="form-checkbox" />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>

              {/* Stock Filter */}
              <div>
                <label className="flex items-center gap-2 text-white">
                  <input type="checkbox" className="form-checkbox" />
                  فقط کالاهای موجود
                </label>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {products.map((product) => (
                <Link href="/product-details" key={product.id} className="block">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-primary-light mb-2">{product.brand}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-white">{product.price} تومان</span>
                        <span className={`text-sm ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                          {product.inStock ? 'موجود' : 'ناموجود'}
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
      </section>
    </div>
  )
}
