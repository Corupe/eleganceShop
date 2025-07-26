"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Robe Élégante",
    price: 299.99,
    originalPrice: 399.99,
    image: "/hero2.png",
    category: "Femme",
    isNew: true,
  },
  {
    id: 2,
    name: "Costume Classique",
    price: 599.99,
    originalPrice: 699.99,
    image: "/hero3.png",
    category: "Homme",
    isSale: true,
  },
  {
    id: 3,
    name: "Accessoires de Luxe",
    price: 199.99,
    originalPrice: 249.99,
    image: "/Elegant Perfume Bottles.png",
    category: "Accessoires",
    isSale: true,
  },
  {
    id: 4,
    name: "Collection Spéciale",
    price: 899.99,
    originalPrice: 999.99,
    image: "/Charming.png",
    category: "Femme",
    isNew: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-playfair">
          Nos Produits Phares
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  {product.isNew && (
                    <Badge className="bg-green-500 text-white">Nouveau</Badge>
                  )}
                  {product.isSale && (
                    <Badge className="bg-red-500 text-white">Solde</Badge>
                  )}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full" size="sm">
                    Ajouter au panier
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <span className="text-sm text-gray-500">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">
                    {product.price.toFixed(2)} DA
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice.toFixed(2)} DA
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/collections/all">
            <Button size="lg" variant="outline">
              Voir Tous les Produits
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
