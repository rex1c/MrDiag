import Image from 'next/image'

export default function About() {
  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Main Content Card */}
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
          {/* Header */}
          <div className="text-primary">درباره ما</div>
          
          {/* Content Section */}
          <div className="flex flex-col-reverse md:flex-row gap-12 mt-6">
            {/* Image - Left Side */}
            <div className="md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image 
                  src="/logo.jpg"
                  alt="تعمیرگاه تخصصی"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                تعمیرگاه تخصصی
                <br />
                خودرو
              </h1>
              <p className="text-white/80 leading-relaxed">
                تعمیرگاه ما با بیش از 3 سال تجربه در زمینه تعمیرات تخصصی خودرو، با بهره‌گیری از مجرب‌ترین متخصصان و پیشرفته‌ترین تجهیزات، خدمات برتر را به مشتریان ارائه می‌دهد. هدف ما جلب رضایت مشتریان از طریق ارائه خدمات با کیفیت و قیمت مناسب است.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Card */}
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">3.5</div>
              <div className="text-white/80 mt-2">سال تجربه</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">23</div>
              <div className="text-white/80 mt-2">محصولات فروخته شده</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">830+</div>
              <div className="text-white/80 mt-2">نظرات مثبت</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">100K</div>
              <div className="text-white/80 mt-2">تعداد دانشجویان</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
