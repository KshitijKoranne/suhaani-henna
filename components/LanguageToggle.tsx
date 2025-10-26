'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#d4c5b9] hover:bg-[#c9a87c] transition-colors text-[#1f1f1f] text-sm font-medium"
      aria-label="Toggle language"
    >
      <span className="material-symbols-outlined text-base">language</span>
      <span>{language === 'en' ? 'हिं' : 'EN'}</span>
    </button>
  )
}
