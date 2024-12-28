import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, ShoppingCart, FileText, ArrowLeft, Youtube, Menu, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              به متسردیاگ خوش آمدید
            </h1>
            <p className="text-xl text-text-light dark:text-text-dark">
              خدمات حرفه‌ای برای اتومبیل شما با بیش از ۱۵ سال تجربه
            </p>
            <Link href="/about" className="btn-primary text-lg font-semibold flex items-center gap-2 w-fit">
              درباره ما
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/logo.jpg"
              alt="تعمیرگاه لوگو"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold">
              دوره‌های آموزشی
            </h2>
            <p className="text-lg text-text-light dark:text-text-dark">
              دوره‌های تخصصی ما برای ارتقای مهارت‌های فنی شما در زمینه خودرو:
            </p>
            <ul className="space-y-4">
              {['اصول اولیه مکانیک خودرو', 'تشخیص و رفع عیب الکترونیکی', 'تعمیر و نگهداری سیستم تعلیق', 'بهینه‌سازی عملکرد موتور'].map((course, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </span>
                  <span>{course}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/courses"
              className="btn inline-flex items-center gap-2"
            >
              مشاهده همه دوره‌ها
              <BookOpen className="w-5 h-5" />
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/course.webp"
              alt="دوره‌های آموزشی"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold">
              محصولات
            </h2>
            <p className="text-lg">
              فروش انواع قطعات یدکی اصلی و با کیفیت:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['روغن موتور', 'فیلتر روغن', 'لنت ترمز', 'شمع'].map((product, index) => (
                <Link 
                  key={index} 
                  href="/shop" 
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-md flex items-center gap-3 hover:bg-white/20 transition-colors"
                >
                  <span className="text-primary-light">
                    <ShoppingCart className="w-6 h-6" />
                  </span>
                  <span className="text-white">{product}</span>
                </Link>
              ))}
            </div>
            <Link 
              href="/shop"
              className="btn inline-flex items-center gap-2"
            >
              مشاهده فروشگاه
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/product.webp"
              alt="محصولات"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">مقالات</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <Link 
              key={index} 
              href={`/blog/tools/${index}`} 
              className="rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl block"
            >
              <Image
                src="/article.webp"
                alt={`عنوان مقاله ${index}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="bg-white/10 backdrop-blur-md p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">عنوان مقاله {index}</h3>
                <p className="text-white/80">خلاصه مقاله و توضیحات مختصر در مورد محتوای آن...</p>
                <div className="text-primary-light hover:text-primary flex items-center gap-2">
                  ادامه مطلب
                  <ArrowLeft className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
