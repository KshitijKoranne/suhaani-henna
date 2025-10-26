'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative flex items-center justify-center h-[calc(100vh-80px)] min-h-[600px] text-center text-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%), url("/images/hero-henna-leaves.jpg")`
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-6 p-4 max-w-3xl">
              <h1 className="text-5xl font-black leading-tight tracking-tight font-serif md:text-7xl">{t.home.heroTitle}</h1>
              <p className="text-lg font-normal leading-normal md:text-xl">{t.home.heroSubtitle}</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full h-14 px-8 bg-[#2a402b] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#2a402b]/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  {t.home.exploreProducts}
                </Link>
                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center rounded-full h-14 px-8 bg-transparent border-2 border-white text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  {t.home.aboutSuhaani}
                </Link>
              </div>
            </div>
          </section>

          {/* Pure Natural Section */}
          <section className="px-4 py-16 sm:px-10 sm:py-24">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              <div className="flex flex-col gap-4 text-center items-center">
                <h2 className="text-[#1f1f1f] text-4xl font-bold font-serif leading-tight tracking-tight max-w-2xl">{t.home.pureNaturalTitle}</h2>
                <p className="text-[#6b6b6b] text-base font-normal leading-normal max-w-3xl">{t.home.pureNaturalSubtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col flex-1 gap-4 rounded-xl border border-secondary/20 bg-white p-6 text-center items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer">
                  <div className="text-primary transition-transform duration-300 group-hover:scale-110"><span className="material-symbols-outlined text-4xl">eco</span></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[#1f1f1f] text-lg font-bold leading-tight">{t.home.feature1Title}</h3>
                    <p className="text-[#6b6b6b] text-sm font-normal leading-normal">{t.home.feature1Description}</p>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-4 rounded-xl border border-secondary/20 bg-white p-6 text-center items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer">
                  <div className="text-primary transition-transform duration-300 group-hover:scale-110"><span className="material-symbols-outlined text-4xl">palette</span></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[#1f1f1f] text-lg font-bold leading-tight">{t.home.feature2Title}</h3>
                    <p className="text-[#6b6b6b] text-sm font-normal leading-normal">{t.home.feature2Description}</p>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-4 rounded-xl border border-secondary/20 bg-white p-6 text-center items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 cursor-pointer">
                  <div className="text-primary transition-transform duration-300 group-hover:scale-110"><span className="material-symbols-outlined text-4xl">health_and_safety</span></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[#1f1f1f] text-lg font-bold leading-tight">{t.home.feature3Title}</h3>
                    <p className="text-[#6b6b6b] text-sm font-normal leading-normal">{t.home.feature3Description}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="px-4 py-16 sm:px-10 sm:py-24 bg-primary/5">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
              <h2 className="text-[#1f1f1f] text-3xl font-bold font-serif leading-tight tracking-tight text-center">{t.home.featuredProducts}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <ProductCard
                    title={t.home.product1Title}
                    description={t.home.product1Description}
                    imageUrl="/images/product-henna-cones.jpg"
                    imageAlt="Three freshly made henna cones with dark green paste, arranged artfully on a wooden surface."
                    href="/products/henna-cones"
                  />
                  <ProductCard
                    title={t.home.product2Title}
                    description={t.home.product2Description}
                    imageUrl="/images/product-hair-color-kit.jpg"
                    imageAlt="A beautiful ceramic bowl filled with rich, dark henna powder next to a small whisk."
                    href="/products/hair-color-kit"
                  />
                  <ProductCard
                    title={t.home.product3Title}
                    description={t.home.product3Description}
                    imageUrl="/images/product-aftercare-balm.jpg"
                    imageAlt="An elegant glass jar containing a golden-hued, natural aftercare balm, surrounded by dried flowers."
                    href="/products/aftercare-balm"
                  />
                  <ProductCard
                    title={t.home.product4Title}
                    description={t.home.product4Description}
                    imageUrl="/images/product-essential-oil.jpg"
                    imageAlt="A collection of small essential oil bottles arranged neatly, with labels indicating their contents."
                    href="/products/essential-oil-blend"
                  />
              </div>
            </div>
          </section>

          {/* From Plant to Paste */}
          <section className="px-4 py-16 sm:px-10 sm:py-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-6 text-left">
                <h2 className="text-4xl font-bold font-serif leading-tight tracking-tight">{t.home.plantToPasteTitle}</h2>
                <p className="text-[#6b6b6b] leading-relaxed">
                  {t.home.plantToPasteDescription}
                </p>
                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center rounded-full h-14 px-8 bg-[#2a402b] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#2a402b]/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  {t.home.discoverOurStory}
                </Link>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
                <div
                  className="col-span-1 row-span-2 rounded-xl bg-cover bg-center overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{backgroundImage: "url('/images/story-henna-hands.jpg')"}}
                />
                <div
                  className="col-span-1 row-span-1 rounded-xl bg-cover bg-center overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{backgroundImage: "url('/images/story-henna-leaves.jpg')"}}
                />
                <div
                  className="col-span-1 row-span-1 rounded-xl bg-cover bg-center overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{backgroundImage: "url('/images/story-henna-hair.jpg')"}}
                />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
