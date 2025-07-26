import { NextResponse } from "next/server"

// This would typically fetch from your database
const staticPages = [
  "/",
  "/collections/all",
  "/collections/women",
  "/collections/men",
  "/collections/accessories",
  "/collections/sale",
  "/about",
  "/contact",
  "/shipping",
  "/returns",
  "/size-guide",
  "/privacy",
  "/terms",
  "/cart",
  "/account",
  "/search",
  // Add other static pages
]

const productPages = [
  { id: 1, lastModified: "2024-07-15" },
  { id: 2, lastModified: "2024-07-14" },
  { id: 3, lastModified: "2024-07-13" },
]

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elegancealgerienne.dz"

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  // Add static pages
  staticPages.forEach((path) => {
    sitemap += `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
  })

  // Add dynamic product pages
  productPages.forEach((product) => {
    sitemap += `
    <url>
      <loc>${baseUrl}/products/${product.id}</loc>
      <lastmod>${product.lastModified}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
  })

  sitemap += `
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
