import ProductDetail from '../../components/Product/ProductDetail'
import { Products } from '../../components/Data/Products'
import { generateMetadata as generateProductMetadata } from '../../utils/metadata'

export async function generateMetadata({ params }) {
  const product = Products.find((p) => p.url === params.productUrl)
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    }
  }

  return {
    title: `${product.name} - Elastomech`,
    description: product.description,
    keywords: product.keywords,
  }
}

export default function ProductPage({ params }) {
  return <ProductDetail productUrl={params.productUrl} />
} 