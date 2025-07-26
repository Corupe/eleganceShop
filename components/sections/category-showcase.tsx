"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Femme",
    image: "/hero2.png",
    link: "/collections/women",
    description: "Collection exclusive pour femmes",
  },
  {
    id: 2,
    name: "Homme",
    image: "/hero3.png",
    link: "/collections/men",
    description: "Style élégant pour hommes",
  },
  {
    id: 3,
    name: "Accessoires",
    image: "/Elegant Perfume Bottles.png",
    link: "/collections/accessories",
    description: "Accessoires de luxe",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-playfair">
          Nos Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={category.link}>
              <Card className="group overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2 font-playfair">
                        {category.name}
                      </h3>
                      <p className="text-sm opacity-90">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
