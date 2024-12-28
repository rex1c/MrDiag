'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    name: 'کاربر تست',
    phone: '09123456789',
    address: ''
  })

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
      <h2 className="text-2xl text-white font-bold mb-6">ویرایش حساب کاربری</h2>
      
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-white/80 text-sm">نام و نام خانوادگی</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <label className="text-white/80 text-sm">شماره تماس</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:border-primary"
            dir="ltr"
          />
        </div>

        <div className="space-y-2">
          <label className="text-white/80 text-sm">آدرس</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            rows={3}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:border-primary resize-none"
          />
        </div>

        <button 
          type="submit"
          className="w-full px-4 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
        >
          ذخیره تغییرات
        </button>
      </form>
    </div>
  )
}
