"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, Truck, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const mockOrderItems = [
  {
    id: 1,
    name: "Robe Élégante",
    price: 299.99,
    image: "/hero2.png",
    size: "M",
    quantity: 1,
  },
  {
    id: 2,
    name: "Costume Classique",
    price: 599.99,
    image: "/hero3.png",
    size: "L",
    quantity: 2,
  },
];

const shippingOptions = [
  { id: "standard", name: "Livraison standard", price: 25, days: "3-5 jours" },
  { id: "express", name: "Livraison express", price: 45, days: "1-2 jours" },
  { id: "premium", name: "Livraison premium", price: 75, days: "24h" },
];

const paymentMethods = [
  { id: "card", name: "Carte bancaire", icon: CreditCard },
  { id: "paypal", name: "PayPal", icon: CreditCard },
  { id: "cash", name: "Paiement à la livraison", icon: Truck },
];

export default function CheckoutProcess() {
  const [step, setStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = mockOrderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping =
    shippingOptions.find((option) => option.id === shippingMethod)?.price || 0;
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-DZ", {
      style: "currency",
      currency: "DZD",
    }).format(price);
  };

  const handlePlaceOrder = () => {
    // Simulate order processing
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Commande confirmée !</h1>
          <p className="text-gray-600 mb-8">
            Merci pour votre commande. Vous recevrez un email de confirmation
            avec les détails de votre commande.
          </p>
          <div className="space-y-4">
            <Link href="/account">
              <Button className="w-full">Voir mes commandes</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full">
                Continuer les achats
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-center space-x-4">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-16 mt-2 text-sm">
          <span
            className={step >= 1 ? "text-primary font-medium" : "text-gray-500"}
          >
            Informations de livraison
          </span>
          <span
            className={step >= 2 ? "text-primary font-medium" : "text-gray-500"}
          >
            Méthode de paiement
          </span>
          <span
            className={step >= 3 ? "text-primary font-medium" : "text-gray-500"}
          >
            Confirmation
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && "Informations de livraison"}
                {step === 2 && "Méthode de paiement"}
                {step === 3 && "Confirmation de commande"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" placeholder="Votre prénom" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" placeholder="Votre nom" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" placeholder="+213 123 456 789" />
                  </div>
                  <div>
                    <Label htmlFor="address">Adresse</Label>
                    <Input id="address" placeholder="123 Rue de la Mode" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">Ville</Label>
                      <Input id="city" placeholder="Alger" />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Code postal</Label>
                      <Input id="postalCode" placeholder="16000" />
                    </div>
                    <div>
                      <Label htmlFor="country">Pays</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dz">Algérie</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter">
                      S'inscrire à la newsletter
                    </Label>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium mb-4 block">
                      Méthode de livraison
                    </Label>
                    <div className="space-y-3">
                      {shippingOptions.map((option) => (
                        <div
                          key={option.id}
                          className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                            shippingMethod === option.id
                              ? "border-primary bg-primary/5"
                              : "border-gray-200"
                          }`}
                          onClick={() => setShippingMethod(option.id)}
                        >
                          <div>
                            <div className="font-medium">{option.name}</div>
                            <div className="text-sm text-gray-500">
                              {option.days}
                            </div>
                          </div>
                          <div className="font-semibold">
                            {formatPrice(option.price)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-4 block">
                      Méthode de paiement
                    </Label>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer ${
                            paymentMethod === method.id
                              ? "border-primary bg-primary/5"
                              : "border-gray-200"
                          }`}
                          onClick={() => setPaymentMethod(method.id)}
                        >
                          <method.icon className="w-5 h-5" />
                          <span className="font-medium">{method.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">
                      Récapitulatif de la commande
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Sous-total:</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Livraison:</span>
                        <span>{formatPrice(shipping)}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">
                      J'accepte les conditions de vente et la politique de
                      confidentialité
                    </Label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Précédent
                  </Button>
                )}
                {step < 3 ? (
                  <Button onClick={() => setStep(step + 1)} className="ml-auto">
                    Suivant
                  </Button>
                ) : (
                  <Button onClick={handlePlaceOrder} className="ml-auto">
                    Confirmer la commande
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Résumé de la commande</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockOrderItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        Taille: {item.size}
                      </p>
                      <p className="text-xs text-gray-500">
                        Quantité: {item.quantity}
                      </p>
                    </div>
                    <div className="text-sm font-semibold">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sous-total</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Livraison</span>
                    <span>{formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
