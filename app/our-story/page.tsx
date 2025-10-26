'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function OurStoryPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen w-full bg-[#f5f2e8]">
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
          <div
            className="bg-cover bg-center flex flex-col justify-center items-center overflow-hidden rounded-xl min-h-[480px] p-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("/images/story-hero-hands.jpg")`
            }}
          >
            <div className="flex flex-col gap-4 text-center max-w-2xl">
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                {t.ourStory.heroTitle}
              </h1>
              <h2 className="text-white text-base md:text-lg font-normal leading-normal">
                {t.ourStory.heroSubtitle}
              </h2>
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/story-henna-fields.jpg"
                  alt="Lush green henna fields under a bright sun"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <h2 className="text-[#1f1f1f] text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                {t.ourStory.commitmentTitle}
              </h2>
              <p className="text-[#6b6b6b] text-base font-normal leading-relaxed">
                {t.ourStory.commitmentPara1}
              </p>
              <p className="text-[#6b6b6b] text-base font-normal leading-relaxed">
                {t.ourStory.commitmentPara2}
              </p>
            </div>
          </div>
        </div>

        {/* Promise Cards Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center text-center gap-4">
              <h2 className="text-[#1f1f1f] text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-[720px]">
                {t.ourStory.promiseTitle}
              </h2>
              <p className="text-[#6b6b6b] text-base font-normal leading-normal max-w-[720px]">
                {t.ourStory.promiseDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3 rounded-xl border border-[#d4c5b9] bg-white p-6 items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer group">
                <span className="material-symbols-outlined text-primary text-4xl transition-transform duration-300 group-hover:scale-110">eco</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#1f1f1f] text-lg font-bold leading-tight">{t.ourStory.naturalTitle}</h3>
                  <p className="text-[#6b6b6b] text-sm font-normal leading-normal">
                    {t.ourStory.naturalDescription}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-xl border border-[#d4c5b9] bg-white p-6 items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer group">
                <span className="material-symbols-outlined text-primary text-4xl transition-transform duration-300 group-hover:scale-110">public</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#1f1f1f] text-lg font-bold leading-tight">{t.ourStory.globalTitle}</h3>
                  <p className="text-[#6b6b6b] text-sm font-normal leading-normal">
                    {t.ourStory.globalDescription}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-xl border border-[#d4c5b9] bg-white p-6 items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer group">
                <span className="material-symbols-outlined text-primary text-4xl transition-transform duration-300 group-hover:scale-110">recycling</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#1f1f1f] text-lg font-bold leading-tight">{t.ourStory.ecoTitle}</h3>
                  <p className="text-[#6b6b6b] text-sm font-normal leading-normal">
                    {t.ourStory.ecoDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Process Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="flex flex-col gap-12 items-center">
            <div className="text-center max-w-3xl">
              <h2 className="text-[#1f1f1f] text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                {t.ourStory.qualityProcessTitle}
              </h2>
              <p className="text-[#6b6b6b] text-base font-normal leading-normal mt-4">
                {t.ourStory.qualityProcessDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-[#d4c5b9] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer group">
                <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">grass</span>
                </div>
                <h3 className="text-[#1f1f1f] text-xl font-bold">{t.ourStory.sourcingTitle}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {t.ourStory.sourcingDescription}
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-[#d4c5b9] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer group">
                <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">wb_sunny</span>
                </div>
                <h3 className="text-[#1f1f1f] text-xl font-bold">{t.ourStory.dryingTitle}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {t.ourStory.dryingDescription}
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-[#d4c5b9] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer group">
                <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">grain</span>
                </div>
                <h3 className="text-[#1f1f1f] text-xl font-bold">{t.ourStory.grindingTitle}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {t.ourStory.grindingDescription}
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-[#d4c5b9] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer group">
                <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">filter_alt</span>
                </div>
                <h3 className="text-[#1f1f1f] text-xl font-bold">{t.ourStory.siftingTitle}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {t.ourStory.siftingDescription}
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-[#d4c5b9] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer group">
                <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">science</span>
                </div>
                <h3 className="text-[#1f1f1f] text-xl font-bold">{t.ourStory.qualityControlTitle}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {t.ourStory.qualityControlDescription}
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-xl border border-[#d4c5b9] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer group">
                <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">inventory_2</span>
                </div>
                <h3 className="text-[#1f1f1f] text-xl font-bold">{t.ourStory.packagingTitle}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                  {t.ourStory.packagingDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* From Plant to Paste Gallery */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-[#1f1f1f] text-3xl font-bold leading-tight tracking-tight">
              {t.ourStory.plantToPasteTitle}
            </h2>
            <p className="text-[#6b6b6b] text-base font-normal leading-normal max-w-2xl text-center">
              {t.ourStory.plantToPasteDescription}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-4">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/story-henna-fields.jpg"
                  alt="Close up of fresh green henna leaves on a plant in a field"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mt-0 md:mt-8">
                <Image
                  src="/images/story-harvesting.jpg"
                  alt="A worker's hands carefully harvesting henna leaves"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/story-powder.jpg"
                  alt="A bowl of finely ground, bright green henna powder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mt-0 md:mt-8">
                <Image
                  src="/images/story-application.jpg"
                  alt="A beautiful, intricate henna design being applied to a hand with a cone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <div className="bg-primary/20 rounded-xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-4">
            <h2 className="text-[#1f1f1f] text-3xl font-bold leading-tight tracking-tight">
              {t.ourStory.ctaTitle}
            </h2>
            <p className="text-[#6b6b6b] text-lg max-w-2xl">
              {t.ourStory.ctaDescription}
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full h-12 px-8 mt-4 bg-[#2a402b] text-white text-base font-bold hover:bg-[#2a402b]/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              {t.ourStory.shopProducts}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
