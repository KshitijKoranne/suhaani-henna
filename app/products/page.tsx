'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProductsPage() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: t.products.product1Name,
      description: t.products.product1Desc,
      image: '/images/catalog-product-powder.jpg',
      alt: 'A bowl of finely sifted organic henna powder',
      categories: ['hair-henna', 'body-art-henna'],
    },
    {
      id: 2,
      name: t.products.product2Name,
      description: t.products.product2Desc,
      image: '/images/catalog-product-paste.jpg',
      alt: 'Henna paste that produces a deep, lasting color',
      categories: ['body-art-henna'],
    },
    {
      id: 3,
      name: t.products.product3Name,
      description: t.products.product3Desc,
      image: '/images/catalog-product-cones.jpg',
      alt: 'A collection of ready-to-use henna cones for body art',
      categories: ['henna-cones', 'body-art-henna'],
    },
    {
      id: 4,
      name: t.products.product4Name,
      description: t.products.product4Desc,
      image: '/images/catalog-product-oil.jpg',
      alt: 'A bottle of herbal hair care oil with herbs inside',
      categories: ['hair-henna', 'essential-oils'],
    },
    {
      id: 5,
      name: t.products.product5Name,
      description: t.products.product5Desc,
      image: '/images/catalog-product-bridal.jpg',
      alt: 'A complete bridal henna kit with various components',
      categories: ['henna-kits', 'body-art-henna'],
    },
    {
      id: 6,
      name: t.products.product6Name,
      description: t.products.product6Desc,
      image: '/images/catalog-product-hair.jpg',
      alt: 'A package of Natural Hair Henna powder in a brown bag',
      categories: ['hair-henna'],
    },
  ]

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.categories.includes(activeCategory))

  const categories = [
    { id: 'all', name: t.products.allProducts, image: '' }, // No image for 'All'
    { id: 'hair-henna', name: t.products.hairHenna, image: '/images/hair-henna-category.png' },
    { id: 'body-art-henna', name: t.products.bodyArtHenna, image: '/images/body-art-henna-category.png' },
    { id: 'henna-cones', name: t.products.hennaCones, image: '/images/catalog-product-cones.jpg' },
    { id: 'essential-oils', name: t.products.essentialOils, image: '/images/catalog-product-oil.jpg' },
    { id: 'henna-kits', name: t.products.hennaKits, image: '/images/catalog-product-bridal.jpg' },
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
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 40%), url("/images/catalog-hero.jpg")`,
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
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <h3 className="text-lg font-bold text-[#1f1f1f] mb-4">{t.products.categories}</h3>
                <nav className="flex flex-col gap-4">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                      activeCategory === 'all'
                        ? 'font-semibold text-white bg-primary'
                        : 'text-[#6b6b6b] bg-white hover:bg-primary/10'
                    }`}
                  >
                    {t.products.allProducts}
                  </button>
                  <div className="grid grid-cols-2 gap-4">
                    {categories.filter(c => c.id !== 'all').map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex flex-col items-center text-center gap-2 p-2 rounded-lg transition-all duration-200 group ${
                          activeCategory === category.id
                            ? 'ring-2 ring-primary bg-primary/10'
                            : 'bg-white hover:bg-primary/10'
                        }`}
                      >
                        <div className="relative w-full aspect-square rounded-md overflow-hidden">
                          <Image
                            src={category.image}
                            alt={`Image for ${category.name} category`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="100px"
                          />
                        </div>
                        <span className={`text-xs font-semibold transition-colors duration-200 ${
                          activeCategory === category.id ? 'text-primary' : 'text-[#6b6b6b]'
                        }`}>
                          {category.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </nav>
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
                {filteredProducts.map((product) => (
                  <Link
                    href={`/products/${product.id}`}
                    key={product.id}
                    className="flex flex-col gap-3 group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                  >
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
                    </div>
                    <div>
                      <p className="text-[#1f1f1f] text-base font-medium leading-normal group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </p>
                      <p className="text-[#6b6b6b] text-sm font-normal leading-normal">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
