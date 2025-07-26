"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Heart, MessageCircle, Share2, Instagram } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    author: {
      name: "Sarah M.",
      avatar: "/placeholder-user.jpg",
      handle: "@sarah_style",
    },
    content: "J'adore ma nouvelle robe d'Élégance Algérienne! ✨",
    image: "/hero2.png",
    likes: 124,
    comments: 8,
    timestamp: "2h",
    isVerified: true,
  },
  {
    id: 2,
    author: {
      name: "Ahmed K.",
      avatar: "/placeholder-user.jpg",
      handle: "@ahmed_fashion",
    },
    content: "Style parfait pour une soirée élégante 🎩",
    image: "/hero3.png",
    likes: 89,
    comments: 12,
    timestamp: "4h",
    isVerified: false,
  },
  {
    id: 3,
    author: {
      name: "Fatima L.",
      avatar: "/placeholder-user.jpg",
      handle: "@fatima_beauty",
    },
    content: "Les accessoires sont magnifiques! 💎",
    image: "/Elegant Perfume Bottles.png",
    likes: 156,
    comments: 15,
    timestamp: "6h",
    isVerified: true,
  },
];

const instagramGallery = [
  { id: 1, image: "/hero.png", link: "#" },
  { id: 2, image: "/hero2.png", link: "#" },
  { id: 3, image: "/hero3.png", link: "#" },
  { id: 4, image: "/Charming.png", link: "#" },
  { id: 5, image: "/Elegant Perfume Bottles.png", link: "#" },
  { id: 6, image: "/hero.png", link: "#" },
];

export default function SocialFeed() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair mb-4">
            Notre Feed Instagram
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nos clients portent nos créations et partagent
            leur style unique.
          </p>
        </div>

        {/* Instagram Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={post.author.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback>
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-sm">
                        {post.author.name}
                      </span>
                      {post.isVerified && (
                        <Badge
                          variant="secondary"
                          className="text-xs px-1 py-0"
                        >
                          ✓
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">
                      {post.author.handle}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {post.timestamp}
                  </span>
                </div>
              </CardHeader>
              <div className="relative aspect-square">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.content}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm mb-3">{post.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">{post.comments}</span>
                    </button>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instagram Gallery */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Notre Galerie Instagram
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramGallery.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square overflow-hidden rounded-lg group"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Follow Us */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            <Instagram className="w-4 h-4 mr-2" />
            Suivez-nous sur Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
