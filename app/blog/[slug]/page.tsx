'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Wrench, GraduationCap, FileText, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react'
import { useParams } from 'next/navigation'

// Sample blog data (same as articles page)
const categories = [
  { id: 1, name: 'معرفی ابزار', icon: Wrench, slug: 'tools' },
  { id: 2, name: 'معرفی دوره', icon: GraduationCap, slug: 'courses' },
  { id: 3, name: 'مستندات فنی', icon: FileText, slug: 'docs' },
  { id: 4, name: 'ترفندها', icon: Lightbulb, slug: 'tips' }
]

const blogs = [
  {
    id: 1,
    title: 'راهنمای جامع تعمیر ECU خودرو',
    excerpt: 'در این مقاله به بررسی روش‌های عیب‌یابی و تعمیر ECU خودرو می‌پردازیم...',
    image: '/course.webp',
    category: 'tools',
    date: '۲۳ آذر ۱۴۰۲'
  },
  {
    id: 2,
    title: 'معرفی دستگاه دیاگ پیشرفته',
    excerpt: 'آشنایی با جدیدترین دستگاه دیاگ و قابلیت‌های منحصر به فرد آن در تشخیص ایرادات...',
    image: '/course.webp',
    category: 'tools',
    date: '۲۲ آذر ۱۴۰۲'
  },
  // Add more blog posts...
]

export default function BlogCategory() {
  const params = useParams()
  const currentCategory = categories.find(cat => cat.slug === params.slug)
  const categoryPosts = blogs.filter(blog => blog.category === params.slug)

  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Category Title Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-white">
            {currentCategory?.name}
          </h1>
          <div className="relative">
            <div className="absolute inset-0 bg-primary blur-sm opacity-20 rounded-full"></div>
            <div className="relative px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/20">
              <span className="text-xl font-bold text-primary">
                {categoryPosts.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPosts.map((post) => (
            <Link 
              href={`/blog/${params.slug}/${post.id}`} 
              key={post.id}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary text-sm">{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pagination Section */}
      <div className="mt-auto py-6 flex justify-center items-center gap-1 md:gap-2">
        <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 flex items-center justify-center text-white hover:bg-primary/20 transition-colors">
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <div className="flex gap-1 md:gap-2">
          <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg backdrop-blur-md bg-primary/20 border border-white/20 flex items-center justify-center text-white text-sm md:text-base">
            1
          </button>
          <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 flex items-center justify-center text-white hover:bg-primary/20 transition-colors text-sm md:text-base">
            2
          </button>
        </div>
        <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 flex items-center justify-center text-white hover:bg-primary/20 transition-colors">
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  )
}
