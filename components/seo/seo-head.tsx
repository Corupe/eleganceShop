import Head from "next/head"

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: "website" | "article" | "product" | "profile"
  noIndex?: boolean // To prevent indexing for certain pages (e.g., admin, checkout)

  // Product specific schema properties
  price?: number
  currency?: string
  availability?: "in_stock" | "out_of_stock"
  brand?: string
  category?: string
  sku?: string
  rating?: number
  reviewCount?: number
}

export default function SEOHead({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  noIndex = false,
  price,
  currency,
  availability,
  brand,
  category,
  sku,
  rating,
  reviewCount,
}: SEOHeadProps) {
  const fullUrl = url || process.env.NEXT_PUBLIC_SITE_URL || "https://www.elegancealgerienne.dz"
  const defaultImage = image || `${fullUrl}/og-image.jpg` // Default Open Graph image

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:locale" content="fr_FR" /> {/* Primary locale */}
      <meta property="og:site_name" content="Élégance Algérienne" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={defaultImage} />
      {/* Product specific meta tags for social sharing (e.g., Pinterest, Facebook Product Ads) */}
      {type === "product" && price && currency && (
        <>
          <meta property="product:price:amount" content={price.toString()} />
          <meta property="product:price:currency" content={currency} />
          <meta property="product:availability" content={availability === "in_stock" ? "in stock" : "out of stock"} />
          {brand && <meta property="product:brand" content={brand} />}
          {category && <meta property="product:category" content={category} />}
          {sku && <meta property="product:retailer_item_id" content={sku} />}
        </>
      )}
      {/* Favicon and Apple Touch Icon (already in layout.tsx, but good for completeness) */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/icon-192x192.png" />
    </Head>
  )
}
