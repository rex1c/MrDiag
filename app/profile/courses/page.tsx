'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Copy } from 'lucide-react'
import Link from 'next/link'

export default function CoursesPage() {
  const [copiedKey, setCopiedKey] = useState<number | null>(null)

  const copyToClipboard = async (id: number, key: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(key)
        setCopiedKey(id)
        setTimeout(() => setCopiedKey(null), 2000)
      } else {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea')
        textArea.value = key
        document.body.appendChild(textArea)
        textArea.select()
        try {
          document.execCommand('copy')
          setCopiedKey(id)
          setTimeout(() => setCopiedKey(null), 2000)
        } catch (err) {
          console.error('Failed to copy:', err)
        }
        document.body.removeChild(textArea)
      }
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const courses = [
    {
      id: 1,
      title: 'دوره آموزشی شماره یک',
      description: 'توضیحات مختصر دوره آموزشی شماره یک که شامل سرفصل‌های مختلف می‌باشد',
      image: '/images/course1.jpg',
      licenseKey: 'COURSE-1234-ABCD'
    },
    {
      id: 2,
      title: 'دوره آموزشی شماره دو',
      description: 'توضیحات مختصر دوره آموزشی شماره دو که شامل سرفصل‌های مختلف می‌باشد',
      image: '/images/course2.jpg',
      licenseKey: 'COURSE-5678-EFGH'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-8">دوره‌های من</h1>
      
      <div className="space-y-4">
        {courses.map(course => (
          <div
            key={course.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4">
                <Image
                  src={course.image}
                  width={80}
                  height={80}
                  alt={course.title}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-white font-medium">{course.title}</h3>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-white/60 text-sm">لایسنس</span>
                <button
                  onClick={() => copyToClipboard(course.id, course.licenseKey)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-all duration-300 text-sm"
                >
                  <Copy className="w-4 h-4" />
                  {copiedKey === course.id ? 'کپی شد' : 'کپی لایسنس'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
