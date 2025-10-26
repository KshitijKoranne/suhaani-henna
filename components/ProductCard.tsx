'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

interface ProductCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  href: string
}

export default function ProductCard({ title, description, imageUrl, imageAlt, href }: ProductCardProps) {
  const { t } = useLanguage()

  return (
    <div className="flex h-full flex-col gap-4 rounded-xl bg-white shadow-lg">
      <div className="relative w-full aspect-square rounded-t-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
        <div>
          <p className="text-[#1f1f1f] text-base font-medium leading-normal">{title}</p>
          <p className="text-[#6b6b6b] text-sm font-normal leading-normal">{description}</p>
        </div>
        <Link
          href={href}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-colors"
        >
          <span className="truncate">{t.home.viewProduct}</span>
        </Link>
      </div>
    </div>
  )
}
