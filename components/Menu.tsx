'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Home, ShoppingCart, BookOpen, FileText, Info, Phone, Search, User, MenuIcon, ShoppingBag, GraduationCap, X, ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [mobileNumber, setMobileNumber] = useState('')
  const [isOtpStep, setIsOtpStep] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', ''])
  const [timer, setTimer] = useState(120)
  const otpRefs = useRef<(HTMLInputElement | null)[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const cartItemCount = 2 // This would come from your cart state management
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileModalOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isOtpStep && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isOtpStep, timer])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Move to next input
      if (value && index < 4) {
        otpRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const handleContinue = () => {
    if (!isOtpStep) {
      setIsOtpStep(true)
    } else {
      router.push('/profile')
      setIsProfileModalOpen(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const menuItems = [
    { name: 'صفحه اصلی', href: '/', icon: Home },
    { name: 'فروشگاه', href: '/shop', icon: ShoppingCart },
    { name: 'دوره', href: '/courses', icon: BookOpen },
    { name: 'وبلاگ', href: '/articles', icon: FileText },
    { name: 'درباره ما', href: '/about', icon: Info },
    { name: 'تماس با ما', href: '/contact', icon: Phone },
  ]

  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden lg:block bg-white/5 backdrop-blur-md shadow-lg sticky top-0 z-10 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              مستردیاگ
            </Link>
            <div className="hidden md:flex items-center space-x-6 space-x-reverse">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="flex items-center space-x-2 space-x-reverse text-gray-100 hover:text-primary-light transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="relative flex items-center" ref={searchRef}>
                <div className={`
                  overflow-hidden transition-all duration-300 ease-out absolute left-full top-1/2 -translate-y-1/2
                  ${isSearchExpanded ? 'w-64 -translate-x-2' : 'w-0 -translate-x-full'}
                `}>
                  <input
                    type="text"
                    placeholder="جستجو..."
                    className={`
                      bg-white/10 border border-white/20 rounded-lg pr-4 pl-4 py-2 text-white w-full
                      placeholder:text-white/60 focus:outline-none focus:border-primary
                      transition-all duration-300 ease-out
                      ${isSearchExpanded ? 'opacity-100' : 'opacity-0'}
                    `}
                  />
                </div>
                <button
                  onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                  className={`
                    text-white/80 hover:text-primary transition-all duration-300
                    ${isSearchExpanded ? 'opacity-0 invisible' : 'opacity-100 visible'}
                  `}
                >
                  <Search className="w-6 h-6" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/cart"
                  className="text-white/80 hover:text-primary transition-colors relative"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                </Link>
                <button
                  onClick={() => setIsProfileModalOpen(true)}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  <User className="w-6 h-6" />
                </button>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-100 hover:text-primary-light transition-colors"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 space-x-reverse text-gray-100 hover:text-primary-light transition-colors block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setIsProfileModalOpen(false)}
          style={{
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-96 relative"
            onClick={e => e.stopPropagation()}
            style={{
              animation: 'slideIn 0.3s ease-out'
            }}
          >
            <button 
              onClick={() => setIsProfileModalOpen(false)}
              className="absolute left-2 top-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl text-white font-bold mb-6 text-center">ورود به حساب کاربری</h2>
            <div className="space-y-4">
              {!isOtpStep ? (
                <div className="space-y-4">
                  <input
                    type="tel"
                    placeholder="شماره موبایل"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-primary"
                    maxLength={11}
                  />
                  <button
                    onClick={handleContinue}
                    className="w-full bg-primary text-white rounded-lg py-2 hover:bg-primary/90 transition-colors"
                  >
                    ادامه
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-white text-center text-sm">کد یک بار مصرف به شماره شما ارسال شد</p>
                  <div className="flex flex-row justify-between gap-2">
                    {[...otp].reverse().map((digit, index) => (
                      <input
                        key={index}
                        ref={el => otpRefs.current[4 - index] = el}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(4 - index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(4 - index, e)}
                        className="w-12 h-12 text-center bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary"
                      />
                    ))}
                  </div>
                  {timer > 0 ? (
                    <p className="text-white/80 text-center text-sm">
                      ارسال مجدد کد تا {formatTime(timer)}
                    </p>
                  ) : (
                    <button
                      onClick={() => setTimer(120)}
                      className="w-full text-primary text-sm hover:text-primary/80 transition-colors"
                    >
                      ارسال مجدد کد
                    </button>
                  )}
                  <button
                    onClick={handleContinue}
                    className="w-full bg-primary text-white rounded-lg py-2 hover:bg-primary/90 transition-colors"
                  >
                    تایید کد
                  </button>
                </div>
              )}
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

      {/* Mobile Top Search Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md p-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="جستجو در مستردیاگ..."
              className="w-full bg-white/20 text-white placeholder-white/60 rounded-lg py-2 px-4 pr-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
          </div>
          <Link href="/cart" className="text-white relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
        <div className="grid grid-cols-4 gap-1 p-2">
          <Link href="/" className="flex flex-col items-center justify-center p-2 text-white hover:text-primary-light">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">خانه</span>
          </Link>
          <Link href="/shop" className="flex flex-col items-center justify-center p-2 text-white hover:text-primary-light">
            <ShoppingBag className="w-6 h-6" />
            <span className="text-xs mt-1">فروشگاه</span>
          </Link>
          <Link href="/courses" className="flex flex-col items-center justify-center p-2 text-white hover:text-primary-light">
            <GraduationCap className="w-6 h-6" />
            <span className="text-xs mt-1">دوره</span>
          </Link>
          <button 
            onClick={() => setIsProfileModalOpen(true)}
            className="flex flex-col items-center justify-center p-2 text-white hover:text-primary-light"
          >
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">پروفایل</span>
          </button>
        </div>
      </nav>

      {/* Add padding to main content to account for fixed navigation */}
      <div className="md:hidden h-10"></div> {/* Reduced top padding for mobile */}
      <div className="md:hidden h-16"></div> {/* Bottom padding for mobile */}
    </>
  )
}
