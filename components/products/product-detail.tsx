"use client"

import { useState } from "react"
import { useCart } from "@/components/providers/cart-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Heart, Star, ShoppingCart, CheckCircle2, XCircle } from "lucide-react"
import Image from "next/image"

const mockProduct = {
  id: 1,
  name: "Robe Midi Élégante",
  price: 12500,
  originalPrice: 15000,
  description:
    "Une robe midi élégante parfaite pour toutes les occasions. Confectionnée dans un tissu de haute qualité avec une coupe flatteuse qui met en valeur votre silhouette.",
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  colors: [
    { name: "Noir", value: "#000000", image: "/placeholder.svg?height=600&width=600" },
    { name: "Marine", value: "#1a1a2e", image: "/placeholder.svg?height=600&width=600" },
    { name: "Bordeaux", value: "#722f37", image: "/placeholder.svg?height=600&width=600" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  rating: 4.8,
  reviews: 24,
  inStock: true,
  category: "Robes",
  material: "95% Polyester, 5% Élasthanne",
  care: "Lavage à la main recommandé",
  features: ["Coupe ajustée", "Longueur midi", "Fermeture éclair invisible", "Doublure intérieure"],
  sku: "RME-001",
  brand: "Élégance Algérienne",
}

interface ProductDetailProps {
  productId: string
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0])
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const { addItem } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-DZ", {
      style: "currency",
      currency: "DZD",
    }).format(price)
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Veuillez sélectionner une taille.")
      return
    }
    addItem({
      id: mockProduct.id,
      name: mockProduct.name,
      price: mockProduct.price,
      image: selectedColor.image || mockProduct.images[0],
      quantity,
      color: selectedColor.name,
      size: selectedSize,
    })
    alert(`${quantity} x ${mockProduct.name} (${selectedColor.name}, ${selectedSize}) ajouté au panier!`)
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={mockProduct.images[selectedImage] || "/placeholder.svg"}
              alt={`${mockProduct.name} - Image ${selectedImage + 1}`}
              fill
              style={{ objectFit: "contain" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-2">
              {mockProduct.images.map((image, index) => (
                <CarouselItem key={index} className="basis-1/4 pl-2">
                  <div
                    className={`aspect-square overflow-hidden rounded-lg border cursor-pointer ${
                      selectedImage === index ? "border-primary ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {mockProduct.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">{mockProduct.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(mockProduct.rating) ? "fill-current" : ""}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600">({mockProduct.reviews} avis)</span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gray-900">{formatPrice(mockProduct.price)}</span>
            {mockProduct.originalPrice && (
              <span className="text-lg text-gray-500 line-through">{formatPrice(mockProduct.originalPrice)}</span>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed">{mockProduct.description}</p>

          {/* Color Selection */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-2">Couleur: {selectedColor.name}</h3>
            <div className="flex gap-2">
              {mockProduct.colors.map((color) => (
                <TooltipProvider key={color.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor.name === color.name ? "border-primary ring-2 ring-primary" : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select color ${color.name}`}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{color.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-2">Taille:</h3>
            <Select onValueChange={setSelectedSize} value={selectedSize}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sélectionner une taille" />
              </SelectTrigger>
              <SelectContent>
                {mockProduct.sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
              >
                -
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="w-16 text-center border-none focus-visible:ring-0"
                min={1}
                aria-label="Product quantity"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                +
              </Button>
            </div>
            <Button
              className="flex-1 py-3 text-lg font-semibold"
              onClick={handleAddToCart}
              disabled={!mockProduct.inStock}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {mockProduct.inStock ? "Ajouter au panier" : "Hors stock"}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
              className={isFavorite ? "text-red-500 border-red-500" : ""}
              aria-label="Add to favorites"
            >
              <Heart className={isFavorite ? "fill-red-500" : ""} />
            </Button>
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2 text-sm">
            {mockProduct.inStock ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-green-700">En stock</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-red-500" />
                <span className="text-red-700">Hors stock</span>
              </>
            )}
          </div>

          {/* Product Information Tabs */}
          <Tabs defaultValue="description" className="w-full mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Détails</TabsTrigger>
              <TabsTrigger value="reviews">Avis ({mockProduct.reviews})</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4 text-gray-700 leading-relaxed">
              <p>{mockProduct.description}</p>
            </TabsContent>
            <TabsContent value="details" className="mt-4 text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Matière: {mockProduct.material}</li>
                <li>Entretien: {mockProduct.care}</li>
                <li>SKU: {mockProduct.sku}</li>
                <li>Marque: {mockProduct.brand}</li>
                {mockProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <h4 className="text-lg font-semibold mb-4">Avis des clients</h4>
              {/* Placeholder for reviews */}
              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <div className="flex items-center gap-1 text-yellow-500 mb-2">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4" />
                    <span className="text-sm text-gray-600 ml-2">Par Sarah D. - 12/07/2024</span>
                  </div>
                  <p className="text-gray-800">
                    "Absolument magnifique! La qualité est incroyable et la coupe est parfaite. Je recommande vivement!"
                  </p>
                </div>
                <div className="border p-4 rounded-lg">
                  <div className="flex items-center gap-1 text-yellow-500 mb-2">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-gray-600 ml-2">Par Karim B. - 01/07/2024</span>
                  </div>
                  <p className="text-gray-800">
                    "Très satisfaite de mon achat. La robe est fidèle à la description et la livraison a été rapide."
                  </p>
                </div>
              </div>
              <Button variant="outline" className="mt-6 bg-transparent">
                Voir tous les avis
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
