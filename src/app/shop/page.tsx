// app/shop/page.tsx
import dynamic from 'next/dynamic'

// Dynamically import the client-only component to avoid SSR issues
const ShopPageClient = dynamic(() => import('./ShopPageClient'), { ssr: false })

export default function ShopPage() {
  return <ShopPageClient />
}
