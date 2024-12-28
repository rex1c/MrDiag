'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Users } from 'lucide-react'

// Sample course data
const courses = [
  {
    id: 1,
    title: 'دوره جامع تعمیرات خودرو',
    description: 'در این دوره شما با اصول اولیه تعمیرات خودرو آشنا خواهید شد...',
    image: '/course.webp',
    price: '2,500,000',
    participants: 45,
    type: 'VIP'
  },
  {
    id: 2,
    title: 'آموزش عیب یابی ECU',
    description: 'آموزش کامل عیب یابی و تعمیر ECU خودروهای داخلی و خارجی...',
    image: '/course.webp',
    price: '0',
    participants: 120,
    type: 'رایگان'
  },
  // Add more courses as needed
]

export default function Course() {
  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Teacher Section */}
      <section className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center md:items-start">
            {/* Teacher Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0">
              <Image
                src="/logo.jpg"
                alt="استاد"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            {/* Teacher Info */}
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">مهندس میثم مرادی</h1>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
              مهندس میثم مرادی با بیش از 10 سال سابقه در زمینه تعمیرات خودرو، دارای مدرک مهندسی مکانیک از دانشگاه صنعتی قوچان و گواهینامه‌های متعدد بین‌المللی در زمینه تعمیرات خودرو هستند. تاکنون بیش از 250 هنرجو را در این زمینه آموزش داده‌اند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 text-center md:text-right">دوره‌های آموزشی</h2>
        
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row">
                {/* Course Image */}
                <div className="w-full md:w-64 h-48 relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                  {/* Course Type Badge */}
                  <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-sm font-bold ${
                    course.type === 'VIP' ? 'bg-primary text-white' : 'bg-green-500 text-white'
                  }`}>
                    {course.type}
                  </div>
                </div>

                {/* Course Info */}
                <div className="flex-1 p-6 flex flex-col md:flex-row justify-between gap-4">
                  <div className="space-y-2">
                    <Link href={`/course-detail?id=${course.id}`} className="block hover:text-primary transition-colors">
                      <h3 className="text-xl font-bold text-white">{course.title}</h3>
                      <p className="text-white/80 text-sm">{course.description}</p>
                    </Link>
                  </div>

                  {/* Right Side Info */}
                  <div className="flex flex-col md:items-end justify-between gap-4">
                    {/* Participants */}
                    <div className="flex items-center gap-2 text-white/80">
                      <span>{course.participants} نفر</span>
                      <Users className="w-5 h-5" />
                    </div>

                    {/* Price */}
                    <div className="text-white text-lg font-bold text-left">
                      {course.price === '0' ? 'رایگان' : `${course.price} تومان`}
                    </div>

                    {/* Button */}
                    <Link href={`/course-detail?id=${course.id}`} className="w-full md:w-auto">
                      <button className="btn-primary w-full">
                        <span className="text-sm md:text-base">جزییات دوره</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
