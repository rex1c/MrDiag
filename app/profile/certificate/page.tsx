'use client'

import Image from 'next/image'
import { AlertCircle, FileText, Lock } from 'lucide-react'

export default function CertificatePage() {
  const courses = [
    {
      id: 1,
      title: 'دوره آموزشی شماره یک',
      description: 'توضیحات مختصر دوره آموزشی شماره یک که شامل سرفصل‌های مختلف می‌باشد',
      image: '/images/course1.jpg',
      hasTest: true
    },
    {
      id: 2,
      title: 'دوره آموزشی شماره دو',
      description: 'توضیحات مختصر دوره آموزشی شماره دو که شامل سرفصل‌های مختلف می‌باشد',
      image: '/images/course2.jpg',
      hasTest: false
    }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl text-white font-bold">مدرک های من</h2>
      
      {/* Info Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">نحوه دریافت مدرک</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              برای دریافت مدرک هر دوره، ابتدا باید در آزمون پایانی آن دوره شرکت کنید. پس از قبولی در آزمون، مدرک شما صادر خواهد شد و می‌توانید آن را دانلود کنید.
            </p>
          </div>
        </div>
      </div>
      
      {/* Courses List */}
      <div className="space-y-4">
        {courses.map((course) => (
          <div 
            key={course.id}
            className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 transition-all duration-300 relative ${
              course.hasTest ? 'hover:bg-white/15' : 'opacity-60'
            }`}
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
                  <p className="text-white/60 text-sm">{course.description}</p>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                {course.hasTest ? (
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap">
                    <FileText className="w-5 h-5" />
                    <span>مشاهده مدرک</span>
                  </button>
                ) : (
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 absolute inset-0 opacity-0 hover:opacity-100 backdrop-blur-sm">
                    <Lock className="w-5 h-5" />
                    <span>شرکت در آزمون</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
