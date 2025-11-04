import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '100% Pure Natural Henna - Suhaani Henna',
  description: 'Achieve rich, vibrant color and deep conditioning with our premium quality, triple-sifted henna powder, sourced from the finest leaves.',
  openGraph: {
    title: '100% Pure Natural Henna - Suhaani Henna',
    description: 'Premium quality, 100% natural henna powder for hair and body art.',
    type: 'website',
  },
}

export default function ProductDetailPage() {
  const productImages = [
    {
      src: '/images/product-detail-main.jpg',
      alt: 'A beautifully designed package of 100% Pure Natural Henna powder',
    },
    {
      src: '/images/product-detail-closeup.jpg',
      alt: 'Close-up of the fine, green henna powder',
    },
    {
      src: '/images/product-detail-before-after.jpg',
      alt: 'Before and after photo of hair colored with natural henna',
    },
    {
      src: '/images/product-detail-woman-hair.jpg',
      alt: 'A woman with beautiful, henna-dyed hair in a natural setting',
    },
    {
      src: '/images/product-detail-mixing-paste.jpg',
      alt: 'The henna paste being mixed in a bowl',
    },
  ]

  return (
    <div className="min-h-screen w-full bg-[#f5f2e8]">
      <Header />
      <main className="flex-1 w-full">
        {/* Breadcrumb */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4">
          <div className="flex flex-wrap gap-2">
            <Link className="text-[#6b6b6b] text-sm font-medium leading-normal hover:text-primary" href="/">
              Home
            </Link>
            <span className="text-[#6b6b6b] text-sm font-medium leading-normal">/</span>
                          <Link className="text-[#6b6b6b] text-sm font-medium leading-normal hover:text-primary" href="/products">
                            Products
                          </Link>            <span className="text-[#6b6b6b] text-sm font-medium leading-normal">/</span>
            <span className="text-[#1f1f1f] text-sm font-medium leading-normal">100% Pure Natural Henna</span>
          </div>
        </div>

        {/* Product Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white">
                <Image
                  src={productImages[0].src}
                  alt={productImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer ${
                      index === 0 ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#1f1f1f]">
                100% Pure Natural Henna
              </h1>
              <p className="text-[#6b6b6b] text-base">
                Achieve rich, vibrant color and deep conditioning with our premium quality, triple-sifted henna powder, sourced from the finest leaves.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-primary">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                  <span className="material-symbols-outlined text-xl">star</span>
                </div>
                <span className="text-sm font-medium text-[#6b6b6b]">(125 reviews)</span>
              </div>



              {/* Features */}
              <div className="flex justify-center items-center gap-6 pt-6 border-t border-[#d4c5b9] mt-4">
                <div className="flex items-center gap-2 text-sm text-[#6b6b6b]">
                  <span className="material-symbols-outlined text-primary">eco</span>
                  <span>100% Natural</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6b6b6b]">
                  <span className="material-symbols-outlined text-primary">pets</span>
                  <span>Cruelty-Free</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6b6b6b]">
                  <span className="material-symbols-outlined text-primary">science</span>
                  <span>Skin-Safe</span>
                </div>
              </div>
            </div>
          </section>

          {/* Magic of Henna Section */}
          <section className="mt-20 py-16 bg-white rounded-xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-[#1f1f1f]">
                The Magic of Natural Henna
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-primary">How Suhaani Henna Works</h3>
                  <p className="text-[#6b6b6b]">
                    Our henna contains a natural molecule called Lawsone. This molecule binds to the keratin proteins in your skin and hair, resulting in a beautiful, long-lasting stain without penetrating the hair shaft or skin layers. It's a safe, gentle process that enhances your natural beauty.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-primary">Versatile &amp; Time-Honored Uses</h3>
                  <ul className="space-y-2 text-[#6b6b6b] list-disc list-inside">
                    <li>
                      <span className="font-semibold text-[#1f1f1f]">Body Art:</span> Create intricate, temporary tattoos for celebrations.
                    </li>
                    <li>
                      <span className="font-semibold text-[#1f1f1f]">Hair Dye:</span> A natural way to color, condition, and add shine.
                    </li>
                    <li>
                      <span className="font-semibold text-[#1f1f1f]">Cultural Practices:</span> An integral part of weddings and festivals.
                    </li>
                    <li>
                      <span className="font-semibold text-[#1f1f1f]">Medicinal:</span> Traditionally used for its cooling and healing properties.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Tabs Section */}
          <section className="mt-20">
            <div className="border-b border-[#d4c5b9]">
              <nav className="-mb-px flex space-x-8">
                <button className="whitespace-nowrap border-b-2 border-primary px-1 pb-4 text-base font-semibold text-primary">
                  Ingredients
                </button>
                <button className="whitespace-nowrap border-b-2 border-transparent px-1 pb-4 text-base font-medium text-[#6b6b6b] hover:border-[#d4c5b9] hover:text-[#1f1f1f]">
                  Application
                </button>
                <button className="whitespace-nowrap border-b-2 border-transparent px-1 pb-4 text-base font-medium text-[#6b6b6b] hover:border-[#d4c5b9] hover:text-[#1f1f1f]">
                  Reviews
                </button>
              </nav>
            </div>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 leading-relaxed text-[#6b6b6b]">
              <div>
                <h3 className="text-lg font-bold text-[#1f1f1f] mb-4">Pure &amp; Simple Ingredients</h3>
                <p className="mb-4">
                  We believe in transparency and the power of nature. Our henna products are made with minimal, high-quality ingredients you can trust.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <strong className="text-[#1f1f1f]">100% Lawsonia Inermis (Henna) Leaf Powder:</strong> Sourced from Rajasthan, India, triple-sifted for a fine, smooth paste. The sole ingredient in our powder.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <strong className="text-[#1f1f1f]">No Chemicals:</strong> Free from PPD, ammonia, peroxide, and any harmful additives.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <strong className="text-[#1f1f1f]">Vegan & Cruelty-Free:</strong> Ethically sourced and never tested on animals.
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1f1f1f] mb-4">Why Choose Suhaani?</h3>
                <p className="mb-4">
                  Our commitment to purity and quality sets us apart from the rest.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>Premium quality sourced from the best henna-growing regions</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>Triple-sifted for the finest, smoothest texture</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>Lab-tested to ensure 100% purity and safety</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>Eco-friendly packaging that preserves freshness</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
