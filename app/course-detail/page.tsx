'use client'
import Image from 'next/image'
import { Play, ChevronDown, Users, Clock, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function CourseDetail() {
  const [openSection, setOpenSection] = useState({
    summary: true,
    requirements: false,
    syllabus: false
  })

  const toggleSection = (section: keyof typeof openSection) => {
    setOpenSection(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        {/* Course Image Section */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20">
          <Image
            src="/course.webp"
            alt="Course Image"
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>

        {/* Enroll Card - Positioned absolutely */}
        <div className="absolute top-4 right-4 w-[90%] mx-auto left-4 md:left-auto md:mx-0 md:w-full max-w-sm">
          <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-lg shadow-lg p-6 border border-white/20">
            <div className="flex justify-center mb-6">
              <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </button>
            </div>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold mb-6">
              ثبت نام
            </button>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">مدرس:</span>
                <span className="font-semibold">مهندس میثم مرادی</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">
                  <Users className="inline-block w-5 h-5 ml-2" />
                  تعداد دانشجویان:
                </span>
                <span className="font-semibold">۱۵۰ نفر</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">
                  <Clock className="inline-block w-5 h-5 ml-2" />
                  مدت دوره:
                </span>
                <span className="font-semibold">۲۰ ساعت</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">
                  <Calendar className="inline-block w-5 h-5 ml-2" />
                  آخرین بروزرسانی:
                </span>
                <span className="font-semibold">۱۴۰۲/۱۰/۵</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview Section */}
      <div className="mt-12">
        <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-lg shadow-lg p-6 border border-white/20">
          <h2 className="text-2xl font-bold mb-8 text-primary">معرفی دوره</h2>
          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-all duration-300">
              <button 
                onClick={() => toggleSection('summary')} 
                className="w-full flex justify-between items-center group"
              >
                <span className="text-lg font-semibold group-hover:text-primary transition-colors">خلاصه دوره</span>
                <ChevronDown className={`w-5 h-5 group-hover:text-primary transition-all duration-300 ${openSection.summary ? 'rotate-180' : ''}`} />
              </button>
              {openSection.summary && (
                <div className="mt-4 pr-4 border-r-2 border-primary/30">
                  <p className="text-gray-600 dark:text-gray-300">
                    این دوره به شما کمک می‌کند تا با مفاهیم اصلی و پیشرفته آشنا شوید.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-all duration-300">
              <button 
                onClick={() => toggleSection('requirements')} 
                className="w-full flex justify-between items-center group"
              >
                <span className="text-lg font-semibold group-hover:text-primary transition-colors">پیش‌نیازها</span>
                <ChevronDown className={`w-5 h-5 group-hover:text-primary transition-all duration-300 ${openSection.requirements ? 'rotate-180' : ''}`} />
              </button>
              {openSection.requirements && (
                <div className="mt-4 pr-4 border-r-2 border-primary/30">
                  <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                      آشنایی با مفاهیم پایه
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                      داشتن لپ‌تاپ یا کامپیوتر شخصی
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                      دسترسی به اینترنت
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-all duration-300">
              <button 
                onClick={() => toggleSection('syllabus')} 
                className="w-full flex justify-between items-center group"
              >
                <span className="text-lg font-semibold group-hover:text-primary transition-colors">سرفصل‌ها</span>
                <ChevronDown className={`w-5 h-5 group-hover:text-primary transition-all duration-300 ${openSection.syllabus ? 'rotate-180' : ''}`} />
              </button>
              {openSection.syllabus && (
                <div className="mt-4 pr-4 border-r-2 border-primary/30">
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary">۱</span>
                      مقدمه و آشنایی با دوره
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary">۲</span>
                      مبانی و مفاهیم اولیه
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary">۳</span>
                      آموزش پیشرفته
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm text-primary">۴</span>
                      پروژه‌های عملی
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
