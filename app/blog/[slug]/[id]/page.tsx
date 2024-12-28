'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Clock, Calendar, User, ChevronRight } from 'lucide-react'

// Sample blog post data
const blogPost = {
  id: 1,
  title: 'راهنمای جامع تعمیر ECU خودرو',
  author: {
    name: 'دکتر محمدی',
    role: 'متخصص تعمیرات',
    avatar: '/avatar.png'
  },
  category: { name: 'معرفی ابزار', slug: 'tools' },
  date: '۲۳ آذر ۱۴۰۲',
  readTime: '۵ دقیقه مطالعه',
  content: `در این مقاله به بررسی روش‌های عیب‌یابی و تعمیر ECU خودرو می‌پردازیم. ECU یا همان واحد کنترل الکترونیکی موتور، مغز متفکر خودرو است که وظیفه کنترل و نظارت بر عملکرد موتور را بر عهده دارد.

  مهمترین نکات در تعمیر ECU:
  - بررسی اتصالات و سوکت‌ها
  - تست سنسورها و عملگرها
  - بررسی تغذیه و ولتاژ ورودی
  - برنامه‌ریزی مجدد در صورت نیاز`,
  tableOfContents: [
    { id: 1, title: 'مقدمه و آشنایی با ECU' },
    { id: 2, title: 'روش‌های عیب‌یابی' },
    { id: 3, title: 'مراحل تعمیر' },
    { id: 4, title: 'نکات مهم' }
  ],
  relatedPosts: [
    {
      id: 2,
      title: 'معرفی دستگاه دیاگ پیشرفته',
      author: 'مهندس رضایی',
      date: '۲۲ آذر ۱۴۰۲',
      readTime: '۳ دقیقه'
    },
    {
      id: 3,
      title: 'ابزار تخصصی تعمیر گیربکس',
      author: 'دکتر علوی',
      date: '۲۱ آذر ۱۴۰۲',
      readTime: '۴ دقیقه'
    }
  ]
}

const reactions = [
  { emoji: '👍', label: 'لایک', count: 124 },
  { emoji: '👎', label: 'دیس لایک', count: 4 },
  { emoji: '❤️', label: 'عالی', count: 56 },
  { emoji: '🔥', label: 'داغ', count: 45 },
  { emoji: '🎉', label: 'تبریک', count: 23 },
  { emoji: '😄', label: 'خنده', count: 12 }
]

export default function BlogDetail() {
  const [selectedPoll, setSelectedPoll] = useState<number | null>(null)
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null)

  const polls = [
    { id: 1, text: 'بسیار مفید بود', votes: 60 },
    { id: 2, text: 'نسبتاً مفید بود', votes: 30 },
    { id: 3, text: 'مفید نبود', votes: 10 }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Blog Title and Details Card */}
          <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-xl p-8 border border-white/20">
            <h1 className="text-3xl font-bold text-white mb-6">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blogPost.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blogPost.readTime}</span>
              </div>
              <Link 
                href={`/blog/${blogPost.category.slug}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {blogPost.category.name}
              </Link>
            </div>
          </div>

          {/* Blog Content Card */}
          <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-xl overflow-hidden border border-white/20">
            <div className="relative h-96">
              <Image
                src="/course.webp"
                alt={blogPost.title}
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="p-8 space-y-6">
              <div className="max-w-3xl mx-auto mb-20 md:mb-0">
                <div className="prose prose-invert max-w-none pb-20 md:pb-0 whitespace-pre-line">
                  {blogPost.content}
                </div>
              </div>
              
              {/* Reactions Bar */}
              <div className="fixed md:relative bottom-0 left-0 right-0 md:bottom-auto border-t md:border-t border-white/10">
                <div className="container mx-auto px-4 py-4 md:py-6">
                  <div className="flex items-center justify-center gap-4">
                    {reactions.map((reaction) => (
                      <button 
                        key={reaction.emoji}
                        onClick={() => setSelectedReaction(reaction.emoji)}
                        className={`group flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                          selectedReaction === reaction.emoji 
                            ? 'bg-primary/20 text-primary' 
                            : 'text-white/60 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                          {reaction.emoji}
                        </span>
                        <span className="text-xs">{reaction.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Polls Card */}
          <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-xl p-8 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-6">نظر شما درباره این مقاله چیست؟</h2>
            <div className="space-y-4">
              {polls.map((poll) => (
                <button 
                  key={poll.id}
                  onClick={() => setSelectedPoll(poll.id)}
                  className="w-full"
                >
                  <div 
                    className={`relative overflow-hidden rounded-lg border transition-all ${
                      selectedPoll === poll.id 
                        ? 'border-primary bg-primary/20' 
                        : 'border-white/20 hover:bg-white/10'
                    }`}
                  >
                    <div 
                      className="absolute inset-0 bg-primary/20"
                      style={{ width: `${poll.votes}%` }}
                    />
                    <div className="relative p-4 flex justify-between items-center text-white">
                      <span>{poll.text}</span>
                      <span>{poll.votes}%</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 space-y-8">
          {/* Table of Contents Card - Sticky */}
          <div className="sticky top-24">
            <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-xl p-6 border border-white/20 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1 bg-primary rounded-full" />
                <h2 className="text-xl font-bold text-white">فهرست مطالب</h2>
              </div>
              <div className="space-y-3">
                {blogPost.tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors w-full text-right group relative pr-4"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
                    <span className="text-sm">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Related Posts Card */}
            <div className="mt-8 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-xl p-6 border border-white/20 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-1 bg-primary rounded-full" />
                <h2 className="text-xl font-bold text-white">مطالب مرتبط</h2>
              </div>
              <div className="space-y-5">
                {blogPost.relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${blogPost.category.slug}/${post.id}`}
                    className="block group hover:bg-white/5 p-3 -mx-3 rounded-lg transition-all"
                  >
                    <h3 className="text-white group-hover:text-primary transition-colors font-medium mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                      <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">
                        {post.author}
                      </span>
                      <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">
                        {post.date}
                      </span>
                      <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
