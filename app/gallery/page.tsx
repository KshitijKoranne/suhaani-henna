'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const galleryItems = [
  {
    id: 1,
    src: '/images/gallery-bridal-mehendi.jpg',
    alt: 'Close up of a hand with intricate bridal mehendi design',
    title: 'Intricate Bridal Mehendi',
  },
  {
    id: 2,
    src: '/images/gallery-candle-decoration.jpg',
    alt: 'A person decorating a white candle with henna patterns',
    title: 'Creative Candle Decoration',
  },
  {
    id: 3,
    src: '/images/gallery-festival-pattern.jpg',
    alt: 'Detailed festival henna pattern on the back of a hand',
    title: 'Festival Henna Pattern',
  },
  {
    id: 4,
    src: '/images/gallery-floral-palm.jpg',
    alt: 'Customer submission showing a floral henna design on a palm',
    title: 'Customer Submission: Floral Hand',
  },
  {
    id: 5,
    src: '/images/gallery-finger-designs.jpg',
    alt: 'Minimalist henna designs on fingers',
    title: 'Minimalist Finger Designs',
  },
  {
    id: 6,
    src: '/images/gallery-henna-freckles.jpg',
    alt: "A woman's face with henna freckles applied across her nose and cheeks",
    title: 'Henna Freckles Effect',
  },
  {
    id: 7,
    src: '/images/gallery-hair-treatment.jpg',
    alt: 'Woman with henna hair treatment showing rich auburn color',
    title: 'Natural Hair Henna Treatment',
  },
  {
    id: 8,
    src: '/images/gallery-foot-design.jpg',
    alt: 'Beautiful henna design on feet',
    title: 'Traditional Foot Design',
  },
  {
    id: 9,
    src: '/images/gallery-leg-design.jpg',
    alt: 'Elegant henna pattern on leg',
    title: 'Elegant Leg Pattern',
  },
  {
    id: 10,
    src: '/images/gallery-arm-design.jpg',
    alt: 'Intricate arm henna design',
    title: 'Intricate Arm Design',
  },
  {
    id: 11,
    src: '/images/gallery-mandala.jpg',
    alt: 'Mandala henna design on hand',
    title: 'Mandala Design',
  },
  {
    id: 12,
    src: '/images/gallery-full-hand.jpg',
    alt: 'Full hand henna design with intricate patterns',
    title: 'Full Hand Coverage',
  },
]

export default function GalleryPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen w-full bg-[#f5f2e8]">
      <Header />
      <main className="w-full">
        {/* Header Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-16">
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-6 mb-10">
            <div className="flex max-w-2xl flex-col gap-3">
              <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] text-[#1f1f1f]">
                {t.gallery.title}
              </h1>
              <p className="text-base font-normal leading-normal text-[#6b6b6b]">
                {t.gallery.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#2a402b] text-white gap-2 text-base font-bold leading-normal hover:bg-[#2a402b]/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                <span className="material-symbols-outlined">add_a_photo</span>
                <span>{t.gallery.shareCreation}</span>
              </button>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex w-full gap-3">
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 bg-primary/20 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-md">
                <p className="text-sm font-bold leading-normal">{t.gallery.filterAll}</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 bg-[#d4c5b9] hover:bg-primary/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <p className="text-sm font-medium leading-normal">{t.gallery.filterCustomer}</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 bg-[#d4c5b9] hover:bg-primary/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <p className="text-sm font-medium leading-normal">{t.gallery.filterBodyArt}</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 bg-[#d4c5b9] hover:bg-primary/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <p className="text-sm font-medium leading-normal">{t.gallery.filterHairCare}</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 bg-[#d4c5b9] hover:bg-primary/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <p className="text-sm font-medium leading-normal">{t.gallery.filterTattoos}</p>
              </button>
              <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 bg-[#d4c5b9] hover:bg-primary/20 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <p className="text-sm font-medium leading-normal">{t.gallery.filterProfessional}</p>
              </button>
            </div>
          </div>

          {/* Masonry Gallery Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative break-inside-avoid overflow-hidden rounded-xl group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-base font-bold leading-tight">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
