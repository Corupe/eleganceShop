import ProductDetail from "@/components/products/product-detail"
import SEOHead from "@/components/seo/seo-head"
import StructuredData from "@/components/seo/structured-data"
import SocialSharing from "@/components/social/social-sharing"
import UserGeneratedContent from "@/components/social/user-generated-content"

const mockProduct = {
  id: 1,
  name: "Robe Midi Élégante",
  price: 12500,
  originalPrice: 15000,
  description:
    "Une robe midi élégante parfaite pour toutes les occasions. Confectionnée dans un tissu de haute qualité avec une coupe flatteuse qui met en valeur votre silhouette.",
  image: "/placeholder.svg?height=600&width=600",
  rating: 4.8,
  reviewCount: 24,
  inStock: true,
  category: "Robes",
  sku: "RME-001",
  brand: "Élégance Algérienne",
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <SEOHead
        title={`${mockProduct.name} - Élégance Algérienne`}
        description={mockProduct.description}
        type="product"
        price={mockProduct.price}
        currency="DZD"
        availability={mockProduct.inStock ? "in_stock" : "out_of_stock"}
        brand={mockProduct.brand}
        category={mockProduct.category}
        sku={mockProduct.sku}
        rating={mockProduct.rating}
        reviewCount={mockProduct.reviewCount}
        image={mockProduct.image}
      />

      <StructuredData type="product" data={mockProduct} />

      <div className="min-h-screen bg-white">
        <ProductDetail productId={params.id} />

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <UserGeneratedContent productId={Number(params.id)} />
            </div>
            <div>
              <SocialSharing
                title={mockProduct.name}
                description={mockProduct.description}
                price={mockProduct.price}
                hashtags={["fashion", "style", "algeria", "elegance"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
