'use client' // <-- This is the fix

import dynamic from 'next/dynamic'

// Dynamically import the client-only component
const ShopPageClient = dynamic(() => import('./ShopPageClient'), { ssr: false })

export default function ShopPage() {
  return <ShopPageClient />
}
