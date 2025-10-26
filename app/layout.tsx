import type { Metadata } from 'next'
import { Epilogue, Lora } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-epilogue',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Suhaani Henna - Pure Natural Henna Products',
    template: '%s | Suhaani Henna',
  },
  description: 'Premium natural henna products for body art, hair care, and beauty. 100% pure, chemical-free henna cones, powder, and aftercare oils.',
  keywords: ['henna', 'natural henna', 'mehendi', 'body art', 'hair care', 'organic henna', 'chemical-free henna'],
  authors: [{ name: 'Suhaani Henna' }],
  creator: 'Suhaani Henna',
  publisher: 'Suhaani Henna',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://suhaanihenna.com',
    siteName: 'Suhaani Henna',
    title: 'Suhaani Henna - Pure Natural Henna Products',
    description: 'Premium natural henna products for body art, hair care, and beauty. 100% pure, chemical-free.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suhaani Henna - Pure Natural Henna Products',
    description: 'Premium natural henna products for body art, hair care, and beauty.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${epilogue.variable} ${lora.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
