"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Heart,
  MessageCircle,
  Share2,
  Camera,
  Upload,
} from "lucide-react";
import Image from "next/image";

const mockReviews = [
  {
    id: 1,
    user: {
      name: "Sarah M.",
      avatar: "/placeholder-user.jpg",
    },
    rating: 5,
    title: "Robe magnifique !",
    content:
      "J'adore cette robe, elle est parfaite pour les occasions spéciales. La qualité est exceptionnelle.",
    date: "Il y a 2 jours",
    verified: true,
    likes: 12,
    comments: 3,
    images: ["/hero2.png"],
  },
  {
    id: 2,
    user: {
      name: "Ahmed K.",
      avatar: "/placeholder-user.jpg",
    },
    rating: 4,
    title: "Très satisfait",
    content:
      "Excellent service et livraison rapide. Le costume est de très bonne qualité.",
    date: "Il y a 1 semaine",
    verified: true,
    likes: 8,
    comments: 1,
    images: [],
  },
];

export default function UserGeneratedContent() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission
    console.log("Review submitted:", { rating, reviewTitle, reviewContent });
    setShowReviewForm(false);
    setRating(0);
    setReviewTitle("");
    setReviewContent("");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair mb-4">
            Avis de nos clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de nos produits. Partagez votre
            expérience avec la communauté.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reviews List */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Avis récents</h3>
              <Button onClick={() => setShowReviewForm(true)}>
                Laisser un avis
              </Button>
            </div>

            <div className="space-y-4">
              {mockReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.user.avatar} />
                        <AvatarFallback>
                          {review.user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{review.user.name}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Vérifié
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>

                        <h5 className="font-medium mb-2">{review.title}</h5>
                        <p className="text-gray-600 mb-3">{review.content}</p>

                        {review.images.length > 0 && (
                          <div className="flex gap-2 mb-3">
                            {review.images.map((image, index) => (
                              <div
                                key={index}
                                className="relative w-16 h-16 rounded-md overflow-hidden"
                              >
                                <Image
                                  src={image}
                                  alt="Review image"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <button className="flex items-center gap-1 hover:text-primary">
                            <Heart className="w-4 h-4" />
                            <span>{review.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary">
                            <MessageCircle className="w-4 h-4" />
                            <span>{review.comments}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary">
                            <Share2 className="w-4 h-4" />
                            <span>Partager</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <Card>
              <CardHeader>
                <CardTitle>Laisser un avis</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <Label>Note</Label>
                    <div className="flex items-center gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setRating(i + 1)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              i < rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="reviewTitle">Titre de l'avis</Label>
                    <Input
                      id="reviewTitle"
                      value={reviewTitle}
                      onChange={(e) => setReviewTitle(e.target.value)}
                      placeholder="Résumez votre expérience"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="reviewContent">Votre avis</Label>
                    <Textarea
                      id="reviewContent"
                      value={reviewContent}
                      onChange={(e) => setReviewContent(e.target.value)}
                      placeholder="Partagez votre expérience détaillée..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label>Photos (optionnel)</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500 mb-2">
                        Glissez-déposez vos photos ici ou cliquez pour
                        sélectionner
                      </p>
                      <Button variant="outline" size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Choisir des fichiers
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1">
                      Publier l'avis
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowReviewForm(false)}
                    >
                      Annuler
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
