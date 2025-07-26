"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Package,
  Heart,
  Settings,
  LogOut,
  Edit,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star,
} from "lucide-react";
import Image from "next/image";

const mockUser = {
  name: "Sarah Martin",
  email: "sarah.martin@email.com",
  phone: "+213 123 456 789",
  avatar: "/placeholder-user.jpg",
  joinDate: "Janvier 2024",
};

const mockOrders = [
  {
    id: "ORD-001",
    date: "15 Mars 2024",
    status: "Livré",
    total: 899.99,
    items: [
      { name: "Robe Élégante", image: "/hero2.png", quantity: 1 },
      {
        name: "Accessoires de Luxe",
        image: "/Elegant Perfume Bottles.png",
        quantity: 2,
      },
    ],
  },
  {
    id: "ORD-002",
    date: "10 Mars 2024",
    status: "En cours",
    total: 599.99,
    items: [{ name: "Costume Classique", image: "/hero3.png", quantity: 1 }],
  },
];

const mockWishlist = [
  {
    id: 1,
    name: "Collection Spéciale",
    price: 899.99,
    image: "/Charming.png",
    inStock: true,
  },
  {
    id: 2,
    name: "Style Moderne",
    price: 449.99,
    image: "/hero.png",
    inStock: false,
  },
];

export default function UserAccount() {
  const [activeTab, setActiveTab] = useState("profile");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-DZ", {
      style: "currency",
      currency: "DZD",
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Livré":
        return "bg-green-100 text-green-800";
      case "En cours":
        return "bg-blue-100 text-blue-800";
      case "Annulé":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold font-playfair mb-8">Mon Compte</h1>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profil
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Commandes
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Favoris
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Paramètres
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Informations personnelles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={mockUser.avatar} />
                    <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{mockUser.name}</h3>
                    <p className="text-gray-600">
                      Membre depuis {mockUser.joinDate}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" defaultValue={mockUser.name} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={mockUser.email}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" defaultValue={mockUser.phone} />
                  </div>
                  <div>
                    <Label htmlFor="birthdate">Date de naissance</Label>
                    <Input id="birthdate" type="date" />
                  </div>
                </div>

                <Button className="flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  Mettre à jour le profil
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Adresses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Adresse principale</h4>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-gray-600">123 Rue de la Mode</p>
                    <p className="text-gray-600">Alger, 16000</p>
                    <p className="text-gray-600">Algérie</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Ajouter une nouvelle adresse
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Mes Commandes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-semibold">{order.id}</h4>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            {formatPrice(order.total)}
                          </p>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-md overflow-hidden">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">{item.name}</p>
                              <p className="text-xs text-gray-500">
                                Quantité: {item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline">
                          Voir les détails
                        </Button>
                        <Button size="sm" variant="outline">
                          Suivre la commande
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Mes Favoris
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mockWishlist.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="relative aspect-square mb-3">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <h4 className="font-medium mb-2">{item.name}</h4>
                      <p className="text-lg font-semibold text-primary mb-3">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1"
                          disabled={!item.inStock}
                        >
                          {item.inStock
                            ? "Ajouter au panier"
                            : "Rupture de stock"}
                        </Button>
                        <Button size="sm" variant="outline">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Paramètres du compte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Notifications par email</span>
                      <Button variant="outline" size="sm">
                        Activer
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Notifications push</span>
                      <Button variant="outline" size="sm">
                        Activer
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Newsletter</span>
                      <Button variant="outline" size="sm">
                        Activer
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Sécurité</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Changer le mot de passe
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Authentification à deux facteurs
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Compte</h4>
                  <Button
                    variant="destructive"
                    className="w-full justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Se déconnecter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
