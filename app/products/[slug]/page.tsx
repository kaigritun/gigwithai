import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products, getProduct } from '@/lib/products'
import ProductClient from './ProductClient'

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug)
  if (!product) return { title: 'Product Not Found' }
  
  return {
    title: product.seo.title,
    description: product.seo.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug)
  
  if (!product) {
    notFound()
  }

  return <ProductClient product={product} />
}
