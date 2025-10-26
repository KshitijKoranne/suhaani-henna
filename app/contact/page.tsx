'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()

  const faqs = [
    {
      id: 1,
      question: t.contact.faq1Question,
      answer: t.contact.faq1Answer,
    },
    {
      id: 2,
      question: t.contact.faq2Question,
      answer: t.contact.faq2Answer,
    },
    {
      id: 3,
      question: t.contact.faq3Question,
      answer: t.contact.faq3Answer,
    },
    {
      id: 4,
      question: t.contact.faq4Question,
      answer: t.contact.faq4Answer,
    },
  ]

  return (
    <div className="min-h-screen w-full bg-[#f5f2e8]">
      <Header />
      <main className="flex flex-1 justify-center py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h1 className="text-[#1f1f1f] text-4xl sm:text-5xl font-black tracking-tighter">
              {t.contact.title}
            </h1>
            <p className="text-[#6b6b6b] text-lg mt-4 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Contact Form and Info */}
            <div className="lg:col-span-3 space-y-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-[#1f1f1f] text-2xl font-bold tracking-tight">
                  {t.contact.formTitle}
                </h2>
                <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1f1f1f]" htmlFor="name">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      className="mt-1 block w-full rounded-lg border-[#d4c5b9] bg-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 px-4 py-2"
                      id="name"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1f1f1f]" htmlFor="email">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      className="mt-1 block w-full rounded-lg border-[#d4c5b9] bg-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 px-4 py-2"
                      id="email"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#1f1f1f]" htmlFor="subject">
                      {t.contact.subjectLabel}
                    </label>
                    <input
                      className="mt-1 block w-full rounded-lg border-[#d4c5b9] bg-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 px-4 py-2"
                      id="subject"
                      name="subject"
                      type="text"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#1f1f1f]" htmlFor="message">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      className="mt-1 block w-full rounded-lg border-[#d4c5b9] bg-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 px-4 py-2"
                      id="message"
                      name="message"
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      className="w-full sm:w-auto flex items-center justify-center rounded-full h-12 px-8 bg-[#2a402b] text-white text-base font-bold leading-normal hover:bg-[#2a402b]/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                      type="submit"
                    >
                      {t.contact.sendMessage}
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information - Placeholder for future */}
              <div>
                <h2 className="text-[#1f1f1f] text-2xl font-bold tracking-tight">
                  {t.contact.contactInfoTitle}
                </h2>
                <div className="mt-6 space-y-4">
                  <p className="text-[#6b6b6b] text-base">
                    {t.contact.contactInfoPlaceholder}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - FAQ */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-[#1f1f1f] text-2xl font-bold tracking-tight">
                  {t.contact.faqTitle}
                </h2>
                <div className="mt-6 space-y-4">
                  {faqs.map((faq) => (
                    <details
                      key={faq.id}
                      className="group rounded-lg bg-white p-4 border border-[#d4c5b9] transition-all duration-300 hover:shadow-lg hover:border-primary/30 cursor-pointer"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-[#1f1f1f] transition-colors duration-300 hover:text-primary">
                        {faq.question}
                        <span className="transition-transform duration-300 group-open:rotate-180">
                          <span className="material-symbols-outlined">expand_more</span>
                        </span>
                      </summary>
                      <p className="mt-3 text-[#6b6b6b] leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
