import { Vazirmatn } from 'next/font/google'
import './globals.css'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

const vazirmatn = Vazirmatn({ 
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazirmatn',
  display: 'swap',
})

export const metadata = {
  title: 'تعمیرگاه اتومبیل',
  description: 'تعمیرگاه اتومبیل با خدمات حرفه‌ای',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className={`${vazirmatn.className} bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark`}>
        <Menu />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
