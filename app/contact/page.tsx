import Image from 'next/image'

export default function Contact() {
  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Main Content Card */}
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <div className="text-primary">تماس با ما</div>
          
          {/* Content Section */}
          <div className="flex flex-col-reverse md:flex-row gap-12 mt-6">
            {/* Contact Info Box - Left Side */}
            <div className="md:w-1/2">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-white font-semibold">شماره تماس</h3>
                  <p className="text-white/80 dir-ltr text-left">+98 912 345 6789</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-semibold">آدرس مغازه</h3>
                  <p className="text-white/80">
                    تهران، خیابان ولیعصر، نرسیده به میدان ونک، پلاک ۲۳۴
                  </p>
                </div>
                
                {/* Social Media Links */}
                <div className="pt-4 border-t border-white/10">
                  <h3 className="font-semibold text-white mb-4">ما را در شبکه‌های اجتماعی دنبال کنید</h3>
                  <div className="flex gap-4">
                    {['instagram', 'telegram', 'youtube'].map((social, index) => (
                      <a key={index} href="#" className="text-white/80 hover:text-white transition-colors text-2xl hover:scale-110 transition-transform">
                        <Image
                          src={`/${social}.png`}
                          alt={social}
                          width={32}
                          height={32}
                          className="object-contain hover:rotate-6 transition-transform duration-300 ease-in-out"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image 
                  src="/banner.jpg"
                  alt="تماس با ما"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.2824767357493!2d51.41758151524149!3d35.75990098017661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ1JzM1LjYiTiA1McKwMjUnMTAuMiJF!5e0!3m2!1sen!2s!4v1629788869124!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
