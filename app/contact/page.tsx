"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import SEOHead from "@/components/seo/seo-head";

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact - Élégance Algérienne"
        description="Contactez-nous pour toute question ou assistance. Notre équipe est là pour vous aider."
        keywords="contact, assistance, service client, mode, Algérie"
        type="website"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-playfair mb-4">
            Contactez-nous
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter
            pour toute question concernant nos produits, commandes ou service
            client.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" placeholder="Votre prénom" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" placeholder="Votre nom" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" placeholder="+213 123 456 789" />
                </div>
                <div>
                  <Label htmlFor="subject">Sujet</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Question générale</SelectItem>
                      <SelectItem value="order">
                        Question sur une commande
                      </SelectItem>
                      <SelectItem value="product">
                        Question sur un produit
                      </SelectItem>
                      <SelectItem value="return">Retour ou échange</SelectItem>
                      <SelectItem value="technical">
                        Problème technique
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre question ou problème..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">
                      123 Rue de la Mode, Alger, Algérie
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-gray-600">+213 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">
                      contact@elegancealgerienne.dz
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Horaires d'ouverture</p>
                    <p className="text-gray-600">Lun-Sam: 9h-18h</p>
                    <p className="text-gray-600">Dimanche: Fermé</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">
                      Comment passer une commande ?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Parcourez nos collections, ajoutez les articles à votre
                      panier et suivez les étapes de commande.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">
                      Quels sont les délais de livraison ?
                    </h4>
                    <p className="text-sm text-gray-600">
                      La livraison standard prend 3-5 jours ouvrables. La
                      livraison express est disponible en 1-2 jours.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">
                      Comment retourner un article ?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Vous avez 30 jours pour retourner un article non utilisé
                      dans son emballage d'origine.
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Voir toutes les FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
