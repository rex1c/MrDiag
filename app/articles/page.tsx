'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Wrench, GraduationCap, FileText, Lightbulb, ChevronLeft } from 'lucide-react'

// Sample blog data
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
  {
    id: 3,
    title: 'ابزار تخصصی تعمیر گیربکس',
    excerpt: 'معرفی مجموعه ابزار تخصصی مورد نیاز برای تعمیر انواع گیربکس‌های اتوماتیک...',
    image: '/course.webp',
    category: 'tools',
    date: '۲۱ آذر ۱۴۰۲'
  },
  {
    id: 4,
    title: 'معرفی دوره جدید تعمیرات',
    excerpt: 'در دوره جدید تعمیرات خودرو، با جدیدترین تکنیک‌ها آشنا خواهید شد...',
    image: '/article.webp',
    category: 'courses',
    date: '۲۰ آذر ۱۴۰۲'
  },
  {
    id: 5,
    title: 'دوره تخصصی برق خودرو',
    excerpt: 'آموزش جامع سیستم‌های برقی خودرو از مبتدی تا پیشرفته با تمرین‌های عملی...',
    image: '/article.webp',
    category: 'courses',
    date: '۱۹ آذر ۱۴۰۲'
  },
  {
    id: 6,
    title: 'دوره عیب‌یابی موتور',
    excerpt: 'در این دوره با روش‌های نوین عیب‌یابی موتور و رفع مشکلات رایج آشنا می‌شوید...',
    image: '/article.webp',
    category: 'courses',
    date: '۱۸ آذر ۱۴۰۲'
  },
  {
    id: 7,
    title: 'مستندات فنی سیستم برق خودرو',
    excerpt: 'در این مستند به بررسی کامل سیستم برق خودرو و نحوه عیب‌یابی آن می‌پردازیم...',
    image: '/banner.jpg',
    category: 'docs',
    date: '۱۷ آذر ۱۴۰۲'
  },
  {
    id: 8,
    title: 'مستندات فنی سیستم سوخت‌رسانی',
    excerpt: 'بررسی جامع سیستم سوخت‌رسانی و روش‌های تشخیص و رفع عیب...',
    image: '/banner.jpg',
    category: 'docs',
    date: '۱۶ آذر ۱۴۰۲'
  },
  {
    id: 9,
    title: 'مستندات فنی سیستم تعلیق',
    excerpt: 'راهنمای کامل سیستم تعلیق خودرو و روش‌های تعمیر و نگهداری...',
    image: '/banner.jpg',
    category: 'docs',
    date: '۱۵ آذر ۱۴۰۲'
  },
  {
    id: 10,
    title: 'ترفند عیب‌یابی سریع سنسورها',
    excerpt: 'با این روش می‌توانید در کمترین زمان سنسورهای معیوب را شناسایی کنید...',
    image: '/oil.webp',
    category: 'tips',
    date: '۱۴ آذر ۱۴۰۲'
  },
  {
    id: 11,
    title: 'ترفندهای افزایش عمر باتری',
    excerpt: 'با این روش‌ها می‌توانید عمر باتری خودرو را تا دو برابر افزایش دهید...',
    image: '/oil.webp',
    category: 'tips',
    date: '۱۳ آذر ۱۴۰۲'
  },
  {
    id: 12,
    title: 'ترفندهای صرفه‌جویی در سوخت',
    excerpt: 'راهکارهای عملی برای کاهش مصرف سوخت و بهینه‌سازی عملکرد موتور...',
    image: '/oil.webp',
    category: 'tips',
    date: '۱۲ آذر ۱۴۰۲'
  }
]

export default function Articles() {
  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-4 md:gap-4 flex overflow-x-auto categories-scroll pb-4 md:pb-0 -mx-4 px-4 md:mx-0 space-x-4 space-x-reverse">
          {categories.map((category) => (
            <Link
              href={`/blog/${category.slug}`}
              key={category.id}
            >
              <div
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all flex-shrink-0 w-[160px] md:w-auto"
              >
                <div className="flex flex-col items-center gap-4">
                  <category.icon className="w-12 h-12 text-primary-light" />
                  <span className="text-lg font-bold text-white whitespace-nowrap">{category.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Featured Posts Carousel */}
          <div className="md:col-span-3 space-y-6">
            {/* Main Carousel */}
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/banner.webp"
                alt="Featured Post"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-2xl font-bold text-white mb-2">عنوان مقاله ویژه</h2>
                <p className="text-white/80">توضیحات مقاله ویژه در این قسمت قرار می‌گیرد...</p>
              </div>
            </div>

            {/* Small Posts Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden">
                  <div className="relative h-32">
                    <Image
                      src="/product.webp"
                      alt={`Post ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-primary-light text-sm mb-1">معرفی ابزار</div>
                    <h3 className="text-white font-bold line-clamp-2">عنوان مقاله کوتاه</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advertisement Space */}
          <div className="hidden md:block bg-white/10 backdrop-blur-md rounded-xl p-4">
            <div className="h-full flex items-center justify-center text-white/50">
              فضای تبلیغات
            </div>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category) => (
        <section key={category.id} className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <category.icon className="w-5 h-5 text-white/90" />
              </div>
              <h2 className="text-2xl font-bold text-white">{category.name}</h2>
            </div>
            <Link 
              href={`/blog/${category.slug}`}
              className="flex items-center text-primary-light hover:text-primary transition-colors"
            >
              <span>بیشتر</span>
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.filter(blog => blog.category === category.slug).map((blog) => (
              <Link 
                key={blog.id} 
                href={`/blog/${blog.category.toLowerCase()}/${blog.id}`}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:scale-[1.02] transition-transform block"
              >
                <div className="relative h-48">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {category.name}
                  </div>
                </div>
                <div className="p-6 flex flex-col h-[200px]">
                  <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                  <p className="text-white/80 line-clamp-2 mb-4">{blog.excerpt}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-primary-light">{blog.date}</span>
                    <span className="text-primary hover:text-primary-light transition-colors">
                      ادامه مطلب
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
