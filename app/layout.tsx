import { Montserrat, Raleway, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio',
  description: 'My professional portfolio',
  openGraph: {
    title: 'Portfolio',
    description: 'My professional portfolio',
    url: 'https://example.com',
    siteName: 'Portfolio',
    images: [{ url: '/favicon.svg' }],
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${raleway.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-black">
        <div className="relative w-full min-h-screen">
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/90 via-black/95 to-black -z-50" />
          <div className="relative z-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
