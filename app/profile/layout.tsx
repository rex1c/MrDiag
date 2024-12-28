'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import * as Icons from 'lucide-react'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const [user] = useState({
    name: 'کاربر نمونه',
    phone: '09123456789',
    wallet: 1500000
  })

  const menuItems = [
    {
      title: 'ویرایش حساب کاربری',
      icon: <Icons.Edit className="w-5 h-5" />,
      href: '/profile/edit'
    },
    {
      title: 'تاریخچه سفارش',
      icon: <Icons.History className="w-5 h-5" />,
      href: '/profile/order-history'
    },
    {
      title: 'دوره های من',
      icon: <Icons.BookOpen className="w-5 h-5" />,
      href: '/profile/courses'
    },
    {
      title: 'مدرک های من',
      icon: <Icons.Award className="w-5 h-5" />,
      href: '/profile/certificate'
    },
    {
      title: 'پشتیبانی',
      icon: <Icons.MessageSquare className="w-5 h-5" />,
      href: '/profile/support'
    }
  ]

  const isProfileIndex = pathname === '/profile'
  const shouldShowLayout = !isMobile || isProfileIndex

  if (!shouldShowLayout) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => router.push('/profile')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 mb-6"
          >
            <Icons.ArrowRight className="w-5 h-5" />
            <span>بازگشت به پروفایل</span>
          </button>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Quick Access Sidebar */}
        <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
          {/* User Info Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Icons.User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-bold">{user.name}</h3>
                <p className="text-white/60 text-sm">{user.phone}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/80 text-sm">کیف پول</p>
              <p className="text-primary font-bold">{user.wallet.toLocaleString('fa-IR')} تومان</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-primary text-white'
                    : 'text-white/60 hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}

            {/* Logout Button */}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-white/5 transition-all duration-300">
              <Icons.LogOut className="w-5 h-5" />
              <span>خروج</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 order-1 lg:order-2">
          {children}
        </div>
      </div>
    </div>
  )
}
