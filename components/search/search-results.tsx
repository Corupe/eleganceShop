"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Star, Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  sizes: string[];
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Robe Élégante",
    price: 299.99,
    image: "/hero2.png",
    rating: 4.8,
    reviews: 24,
    category: "Femme",
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "Costume Classique",
    price: 599.99,
    image: "/hero3.png",
    rating: 4.5,
    reviews: 18,
    category: "Homme",
    sizes: ["M", "L", "XL"],
  },
  {
    id: 3,
    name: "Accessoires de Luxe",
    price: 199.99,
    image: "/Elegant Perfume Bottles.png",
    rating: 4.9,
    reviews: 30,
    category: "Accessoires",
    sizes: [],
  },
  {
    id: 4,
    name: "Collection Spéciale",
    price: 899.99,
    image: "/Charming.png",
    rating: 4.7,
    reviews: 20,
    category: "Femme",
    sizes: ["XS", "S", "M"],
  },
  {
    id: 5,
    name: "Style Moderne",
    price: 449.99,
    image: "/hero.png",
    rating: 4.2,
    reviews: 15,
    category: "Homme",
    sizes: ["L", "XL", "XXL"],
  },
  {
    id: 6,
    name: "Élégance Parfumée",
    price: 349.99,
    image: "/Elegant Perfume Bottles.png",
    rating: 4.6,
    reviews: 10,
    category: "Accessoires",
    sizes: [],
  },
];

interface SearchResultsProps {
  query: string;
}

export default function SearchResults({ query }: SearchResultsProps) {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [sortOption, setSortOption] = useState("relevance");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");

  const filteredAndSortedProducts = useMemo(() => {
    let results = products.filter((product) => {
      // Apply search filter
      const matchesQuery =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase());

      // Apply category filter
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      // Apply size filter
      const matchesSize =
        selectedSize === "all" || product.sizes.includes(selectedSize);

      // Apply price range filter
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesQuery && matchesCategory && matchesSize && matchesPrice;
    });

    // Apply sorting
    switch (sortOption) {
      case "price_asc":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        results.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        results.sort((a, b) => b.id - a.id);
        break;
      default:
        // Keep original order for relevance
        break;
    }
    return results;
  }, [products, query, sortOption, priceRange, selectedCategory, selectedSize]);

  const allCategories = useMemo(
    () => ["all", ...new Set(mockProducts.map((p) => p.category))],
    []
  );
  const allSizes = useMemo(
    () => ["all", ...new Set(mockProducts.flatMap((p) => p.sizes))],
    []
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-DZ", {
      style: "currency",
      currency: "DZD",
    }).format(price);
  };

  const handleClearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedCategory("all");
    setSelectedSize("all");
  };

  const FilterSidebar = () => (
    <div className="p-4 space-y-6">
      <h3 className="text-xl font-bold mb-4">Filtrer par</h3>
      <div>
        <Label htmlFor="category-filter" className="mb-2 block">
          Catégorie
        </Label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger id="category-filter">
            <SelectValue placeholder="Toutes les catégories" />
          </SelectTrigger>
          <SelectContent>
            {allCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat === "all" ? "Toutes" : cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="size-filter" className="mb-2 block">
          Taille
        </Label>
        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger id="size-filter">
            <SelectValue placeholder="Toutes les tailles" />
          </SelectTrigger>
          <SelectContent>
            {allSizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size === "all" ? "Toutes" : size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="mb-2 block">Prix</Label>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={(val: number[]) =>
            setPriceRange(val as [number, number])
          }
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-2">
          <span>{formatPrice(priceRange[0])}</span>
          <span>{formatPrice(priceRange[1])}</span>
        </div>
      </div>
      <Button
        onClick={handleClearFilters}
        variant="outline"
        className="w-full bg-transparent"
      >
        Effacer les filtres
      </Button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        {/* Mobile Filter Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden bg-transparent">
              <Filter className="h-4 w-4 mr-2" /> Filtrer par
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[320px]">
            <SheetHeader>
              <SheetTitle>Filtrer par</SheetTitle>
            </SheetHeader>
            <FilterSidebar />
          </SheetContent>
        </Sheet>

        {/* Sort Options */}
        <div className="flex items-center gap-2 ml-auto">
          <Label htmlFor="sort-by" className="hidden sm:block">
            Trier par:
          </Label>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger id="sort-by" className="w-[180px]">
              <SelectValue placeholder="Trier par" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Pertinence</SelectItem>
              <SelectItem value="price_asc">Prix croissant</SelectItem>
              <SelectItem value="price_desc">Prix décroissant</SelectItem>
              <SelectItem value="rating">Note</SelectItem>
              <SelectItem value="newest">Plus récent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Desktop Filters */}
        <Card className="hidden lg:block lg:col-span-1 h-fit sticky top-20">
          <FilterSidebar />
        </Card>

        {/* Product Display */}
        <div className="lg:col-span-4">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Aucun résultat trouvé</p>
              <Button onClick={handleClearFilters} className="mt-4">
                Effacer les filtres
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="block relative aspect-[3/4] overflow-hidden"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      <Link
                        href={`/products/${product.id}`}
                        className="hover:text-primary"
                      >
                        {product.name}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-500 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "fill-current" : ""
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between p-4 pt-0">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-white"
                    >
                      Ajouter au panier
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
