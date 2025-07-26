"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { Star, Filter, Grid, List } from "lucide-react";

const mockProducts = [
  {
    id: 1,
    name: "Robe Élégante",
    price: 299.99,
    originalPrice: 399.99,
    image: "/hero2.png",
    category: "Femme",
    rating: 4.8,
    reviews: 24,
    isNew: true,
  },
  {
    id: 2,
    name: "Costume Classique",
    price: 599.99,
    originalPrice: 699.99,
    image: "/hero3.png",
    category: "Homme",
    rating: 4.5,
    reviews: 18,
    isSale: true,
  },
  {
    id: 3,
    name: "Accessoires de Luxe",
    price: 199.99,
    originalPrice: 249.99,
    image: "/Elegant Perfume Bottles.png",
    category: "Accessoires",
    rating: 4.9,
    reviews: 30,
    isSale: true,
  },
  {
    id: 4,
    name: "Collection Spéciale",
    price: 899.99,
    originalPrice: 999.99,
    image: "/Charming.png",
    category: "Femme",
    rating: 4.7,
    reviews: 20,
    isNew: true,
  },
  {
    id: 5,
    name: "Style Moderne",
    price: 449.99,
    image: "/hero.png",
    category: "Homme",
    rating: 4.6,
    reviews: 15,
  },
  {
    id: 6,
    name: "Élégance Parfumée",
    price: 349.99,
    originalPrice: 399.99,
    image: "/Elegant Perfume Bottles.png",
    category: "Accessoires",
    rating: 4.8,
    reviews: 28,
    isSale: true,
  },
  {
    id: 7,
    name: "Charme Unique",
    price: 799.99,
    image: "/Charming.png",
    category: "Femme",
    rating: 4.9,
    reviews: 35,
  },
  {
    id: 8,
    name: "Classique Intemporel",
    price: 649.99,
    originalPrice: 749.99,
    image: "/hero3.png",
    category: "Homme",
    rating: 4.4,
    reviews: 22,
    isSale: true,
  },
];

export default function CollectionPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const filteredProducts = useMemo(() => {
    let filtered = [...mockProducts];

    // Apply price filter
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (a.isNew ? -1 : 1));
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [sortBy, priceRange]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Collection Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-playfair mb-4">
          Collection Complète
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez notre collection complète de vêtements et accessoires
          élégants, inspirés par la richesse culturelle de l'Algérie.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5" />
                <h3 className="font-semibold">Filtrer par</h3>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Catégorie</h4>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les catégories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    <SelectItem value="women">Femme</SelectItem>
                    <SelectItem value="men">Homme</SelectItem>
                    <SelectItem value="accessories">Accessoires</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Prix</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>{priceRange[0]} DA</span>
                  <span>{priceRange[1]} DA</span>
                </div>
              </div>

              {/* Apply Filters */}
              <Button className="w-full mb-4">Appliquer les filtres</Button>
              <Button variant="outline" className="w-full">
                Effacer les filtres
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Products */}
        <div className="lg:w-3/4">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <p className="text-gray-600">
                {filteredProducts.length} produits trouvés
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Pertinence</SelectItem>
                  <SelectItem value="price-asc">Prix croissant</SelectItem>
                  <SelectItem value="price-desc">Prix décroissant</SelectItem>
                  <SelectItem value="rating">Note</SelectItem>
                  <SelectItem value="newest">Plus récent</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-r-none"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-l-none"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden">
                <div
                  className={`relative overflow-hidden ${
                    viewMode === "grid" ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
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
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">
                      {product.price.toFixed(2)} DA
                    </span>
                    {product.originalPrice &&
                      product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice.toFixed(2)} DA
                        </span>
                      )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
