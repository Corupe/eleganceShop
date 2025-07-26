"use client"

import { useEffect } from "react"

interface Product {
  id: number
  name: string
  description: string
  price: number
  currency: string
  availability: "in_stock" | "out_of_stock"
  brand: string
  category: string
  sku: string
  image: string
  rating?: number
  reviewCount?: number
  offers?: {
    price: number
    currency: string
    availability: string
    validFrom?: string
    validThrough?: string
  }[]
}

interface Organization {
  name: string
  url: string
  logo: string
  contactPoint: {
    telephone: string
    contactType: string
    areaServed: string
    availableLanguage: string[]
  }
  address: {
    streetAddress: string
    addressLocality: string
    addressCountry: string
    postalCode: string
  }
  sameAs: string[]
}

interface StructuredDataProps {
  type: "product" | "organization" | "breadcrumb" | "website"
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const generateStructuredData = () => {
      switch (type) {
        case "product":
          return generateProductSchema(data as Product)
        case "organization":
          return generateOrganizationSchema(data as Organization)
        case "breadcrumb":
          return generateBreadcrumbSchema(data)
        case "website":
          return generateWebsiteSchema(data)
        default:
          return null
      }
    }

    const schema = generateStructuredData()
    if (schema) {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [type, data])

  return null
}

const generateProductSchema = (product: Product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  brand: {
    "@type": "Brand",
    name: product.brand,
  },
  category: product.category,
  sku: product.sku,
  offers: {
    "@type": "Offer",
    price: product.price.toString(),
    priceCurrency: product.currency,
    availability: product.availability === "in_stock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    seller: {
      "@type": "Organization",
      name: product.brand,
    },
    priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  },
  ...(product.rating &&
    product.reviewCount && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
})

const generateOrganizationSchema = (org: Organization) => ({
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: org.name,
  url: org.url,
  logo: org.logo,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: org.contactPoint.telephone,
    contactType: org.contactPoint.contactType,
    areaServed: org.contactPoint.areaServed,
    availableLanguage: org.contactPoint.availableLanguage,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: org.address.streetAddress,
    addressLocality: org.address.addressLocality,
    addressCountry: org.address.addressCountry,
    postalCode: org.address.postalCode,
  },
  sameAs: org.sameAs,
})

const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
})

const generateWebsiteSchema = (website: { name: string; url: string; description: string }) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: website.name,
  url: website.url,
  description: website.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${website.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
})
