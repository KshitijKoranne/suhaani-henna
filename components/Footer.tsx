'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 md:col-span-2">
            <h3 className="text-lg font-bold font-serif">{t.footer.stayConnected}</h3>
            <p className="text-sm text-[#6b6b6b]">{t.footer.newsletterText}</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                className="flex-grow rounded-lg border border-secondary/30 bg-[#f5f2e8] focus:ring-primary focus:border-primary px-4 py-2"
                placeholder={t.footer.emailPlaceholder}
                type="email"
                aria-label="Email address"
              />
              <button
                className="flex items-center justify-center rounded-lg h-11 px-5 bg-[#2a402b] text-white text-sm font-bold hover:bg-[#2a402b]/90 transition-all duration-300 hover:scale-105 hover:shadow-md"
                type="submit"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold">{t.footer.shopTitle}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=body-art" className="text-[#6b6b6b] hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">{t.footer.bodyArt}</Link></li>
              <li><Link href="/products?category=hair-care" className="text-[#6b6b6b] hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">{t.footer.hairCare}</Link></li>
              <li><Link href="/products?category=aftercare" className="text-[#6b6b6b] hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">{t.footer.aftercare}</Link></li>
              <li><Link href="/products?category=kits" className="text-[#6b6b6b] hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">{t.footer.kits}</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold">{t.footer.supportTitle}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-[#6b6b6b] hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">{t.footer.contactUs}</Link></li>
              <li><Link href="/contact#faq" className="text-[#6b6b6b] hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">{t.footer.faq}</Link></li>
              <li><Link href="/shipping" className="text-[#6b6b6b] hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">{t.footer.shipping}</Link></li>
              <li><Link href="/terms" className="text-[#6b6b6b] hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">{t.footer.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary/20 flex justify-center items-center gap-2">
          <p className="text-sm text-[#6b6b6b] flex items-center gap-2">
            {t.footer.madeBy}
            <span className="text-base">🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
