'use client'

import { useEffect, useState } from 'react'

export default function ProfilePage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return null // Return nothing on mobile to show only layout
  }

  return (
    <div className="flex items-center justify-center min-h-[50vh] text-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-white">پروفایل کاربری</h1>
        <p className="text-white/60">
          از منوی سمت راست یکی از گزینه‌ها را انتخاب کنید
        </p>
      </div>
    </div>
  )
}
