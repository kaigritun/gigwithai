import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products, getProduct } from '@/lib/products'
import ProductClient from './ProductClient'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return { title: 'Product Not Found' }
  
  return {
    title: product.seo.title,
    description: product.seo.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProduct(slug)
  
  if (!product) {
    notFound()
  }

  return <ProductClient product={product} />
}
