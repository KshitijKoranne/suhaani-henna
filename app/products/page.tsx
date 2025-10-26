'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProductsPage() {
  const { t } = useLanguage()

  const products = [
    {
      id: 1,
      name: t.products.product1Name,
      description: t.products.product1Desc,
      price: 12.99,
      image: '/images/catalog-product-powder.jpg',
      alt: 'A bowl of finely sifted organic henna powder',
    },
    {
      id: 2,
      name: t.products.product2Name,
      description: t.products.product2Desc,
      price: 14.99,
      image: '/images/catalog-product-paste.jpg',
      alt: 'Henna paste that produces a deep, lasting color',
    },
    {
      id: 3,
      name: t.products.product3Name,
      description: t.products.product3Desc,
      price: 15.99,
      image: '/images/catalog-product-cones.jpg',
      alt: 'A collection of ready-to-use henna cones for body art',
    },
    {
      id: 4,
      name: t.products.product4Name,
      description: t.products.product4Desc,
      price: 18.99,
      image: '/images/catalog-product-oil.jpg',
      alt: 'A bottle of herbal hair care oil with herbs inside',
    },
    {
      id: 5,
      name: t.products.product5Name,
      description: t.products.product5Desc,
      price: 29.99,
      image: '/images/catalog-product-bridal.jpg',
      alt: 'A complete bridal henna kit with various components',
    },
    {
      id: 6,
      name: t.products.product6Name,
      description: t.products.product6Desc,
      price: 10.99,
      image: '/images/catalog-product-hair.jpg',
      alt: 'A package of Natural Hair Henna powder in a brown bag',
    },
  ]

  return (
    <div className="min-h-screen w-full bg-[#f5f2e8]">
      <Header />
      <main className="w-full">
        {/* Hero Banner */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
          <div
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[320px]"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 40%), url("/images/catalog-hero.jpg")`
            }}
          >
            <div className="flex p-8">
              <p className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
                {t.products.heroTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <h3 className="text-lg font-bold text-[#1f1f1f] mb-4">{t.products.categories}</h3>
                <nav className="flex flex-col gap-3">
                  <a className="text-sm font-semibold text-primary" href="#">{t.products.allProducts}</a>
                  <a className="text-sm text-[#6b6b6b] hover:text-primary transition-colors" href="#">{t.products.hairHenna}</a>
                  <a className="text-sm text-[#6b6b6b] hover:text-primary transition-colors" href="#">{t.products.bodyArtHenna}</a>
                  <a className="text-sm text-[#6b6b6b] hover:text-primary transition-colors" href="#">{t.products.hennaCones}</a>
                  <a className="text-sm text-[#6b6b6b] hover:text-primary transition-colors" href="#">{t.products.essentialOils}</a>
                  <a className="text-sm text-[#6b6b6b] hover:text-primary transition-colors" href="#">{t.products.hennaKits}</a>
                </nav>
                <h3 className="text-lg font-bold text-[#1f1f1f] mt-8 mb-4">{t.products.filterByPrice}</h3>
                <div className="flex flex-col gap-2">
                  <input
                    className="w-full h-2 bg-[#d4c5b9] rounded-lg appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0"
                    max="50"
                    min="0"
                    type="range"
                    defaultValue="50"
                  />
                  <div className="flex justify-between text-sm text-[#6b6b6b]">
                    <span>$0</span>
                    <span>$50</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex flex-wrap justify-between items-baseline gap-4 mb-8">
                <div className="flex flex-col gap-2">
                  <p className="text-[#1f1f1f] text-4xl font-black leading-tight tracking-[-0.033em]">
                    {t.products.pageTitle}
                  </p>
                  <p className="text-[#6b6b6b] text-base font-normal leading-normal">
                    {t.products.pageDescription}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="flex flex-col gap-3 group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                    <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                      <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                      </div>
                      <button className="absolute bottom-4 right-4 flex items-center justify-center size-10 bg-[#2a402b] text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90 hover:bg-[#2a402b]/90">
                        <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                      </button>
                    </div>
                    <div>
                      <p className="text-[#1f1f1f] text-base font-medium leading-normal group-hover:text-primary transition-colors duration-300">{product.name}</p>
                      <p className="text-[#6b6b6b] text-sm font-normal leading-normal">{product.description}</p>
                      <p className="text-[#1f1f1f] text-sm font-semibold leading-normal mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center pt-12">
                <a className="flex size-10 items-center justify-center text-[#6b6b6b] hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined">chevron_left</span>
                </a>
                <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#1f1f1f] bg-[#c9a87c] rounded-full" href="#">1</a>
                <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1f1f1f] hover:bg-primary/20 rounded-full transition-colors" href="#">2</a>
                <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1f1f1f] hover:bg-primary/20 rounded-full transition-colors" href="#">3</a>
                <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1f1f1f] hover:bg-primary/20 rounded-full transition-colors" href="#">4</a>
                <a className="flex size-10 items-center justify-center text-[#6b6b6b] hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
