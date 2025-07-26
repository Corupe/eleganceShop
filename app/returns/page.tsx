"use client";

import SEOHead from "@/components/seo/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  RotateCcw,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  RefreshCw,
  ListOrdered,
  DollarSign,
} from "lucide-react";

export default function ReturnsPage() {
  return (
    <>
      <SEOHead
        title="Retours et Échanges - Élégance Algérienne"
        description="Consultez notre politique de retour et d'échange. Découvrez les conditions d'éligibilité, le processus de retour et les options de remboursement."
        keywords="retour, échange, remboursement, politique de retour, Algérie"
      />

      <div className="min-h-screen bg-stone-50">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6">
              Retours et Échanges
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Nous voulons que vous soyez entièrement satisfait de votre achat.
              Découvrez notre politique de retour flexible.
            </p>
          </div>

          {/* Return Policy Overview */}
          <Card className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">7 Jours</h3>
                  <p className="text-stone-600">Délai de retour</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RotateCcw className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">Gratuit</h3>
                  <p className="text-stone-600">Retour sans frais</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">Simple</h3>
                  <p className="text-stone-600">Processus facile</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return Process */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Comment Retourner un Article</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-lavender-600">
                      1
                    </span>
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Contactez-nous
                  </h3>
                  <p className="text-sm text-stone-600">
                    Contactez notre service client par email, téléphone ou
                    WhatsApp
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-lavender-600">
                      2
                    </span>
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Autorisation
                  </h3>
                  <p className="text-sm text-stone-600">
                    Recevez votre numéro d'autorisation de retour (RMA)
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-lavender-600">
                      3
                    </span>
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Emballage
                  </h3>
                  <p className="text-sm text-stone-600">
                    Emballez l'article dans son emballage d'origine avec le RMA
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-lavender-600">
                      4
                    </span>
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Expédition
                  </h3>
                  <p className="text-sm text-stone-600">
                    Envoyez le colis à notre adresse de retour
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return Conditions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Articles Éligibles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">État Neuf</h4>
                    <p className="text-sm text-stone-600">
                      Articles non portés avec étiquettes
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">
                      Emballage Original
                    </h4>
                    <p className="text-sm text-stone-600">
                      Dans l'emballage d'origine
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">
                      Délai Respecté
                    </h4>
                    <p className="text-sm text-stone-600">
                      Retour dans les 7 jours
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">
                      Preuve d'Achat
                    </h4>
                    <p className="text-sm text-stone-600">
                      Facture ou reçu requis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <XCircle className="h-6 w-6 mr-2" />
                  Articles Non Éligibles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">
                      Sous-vêtements
                    </h4>
                    <p className="text-sm text-stone-600">
                      Pour des raisons d'hygiène
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">
                      Articles Personnalisés
                    </h4>
                    <p className="text-sm text-stone-600">
                      Broderie ou modifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">
                      Articles Soldés
                    </h4>
                    <p className="text-sm text-stone-600">
                      Ventes finales uniquement
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-stone-800">
                      Articles Endommagés
                    </h4>
                    <p className="text-sm text-stone-600">Par usage normal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exchange Options */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Options d'Échange</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RotateCcw className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Échange Taille
                  </h3>
                  <p className="text-sm text-stone-600 mb-4">
                    Échangez pour une taille différente du même article
                  </p>
                  <Badge className="bg-blue-600">Gratuit</Badge>
                </div>

                <div className="text-center p-6 border-2 border-green-200 rounded-lg bg-green-50">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Échange Article
                  </h3>
                  <p className="text-sm text-stone-600 mb-4">
                    Échangez contre un autre article de valeur équivalente
                  </p>
                  <Badge className="bg-green-600">Gratuit</Badge>
                </div>

                <div className="text-center p-6 border-2 border-purple-200 rounded-lg bg-purple-50">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Remboursement
                  </h3>
                  <p className="text-sm text-stone-600 mb-4">
                    Remboursement complet sur le mode de paiement original
                  </p>
                  <Badge className="bg-purple-600">5-7 jours</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Besoin d'Aide pour un Retour ?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-semibold text-stone-800 mb-2">Email</h3>
                  <p className="text-stone-600 mb-4">returns@elegance-dz.com</p>
                  <Button variant="outline" className="bg-transparent">
                    Envoyer un Email
                  </Button>
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Téléphone
                  </h3>
                  <p className="text-stone-600 mb-4">+213 123 456 789</p>
                  <Button variant="outline" className="bg-transparent">
                    Appeler
                  </Button>
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-stone-800 mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-stone-600 mb-4">Support instantané</p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Ouvrir WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Questions Fréquentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Combien de temps prend le remboursement ?
                  </h3>
                  <p className="text-stone-600">
                    Une fois que nous recevons votre retour, le remboursement
                    est traité dans les 5-7 jours ouvrables. Le délai
                    d'apparition sur votre compte dépend de votre banque.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Puis-je retourner un article acheté en solde ?
                  </h3>
                  <p className="text-stone-600">
                    Les articles en solde sont généralement des ventes finales
                    et ne peuvent pas être retournés, sauf en cas de défaut de
                    fabrication.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Que faire si j'ai perdu ma facture ?
                  </h3>
                  <p className="text-stone-600">
                    Contactez notre service client avec votre numéro de commande
                    ou les détails de votre achat. Nous pourrons retrouver votre
                    commande dans notre système.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">
                    Les frais de retour sont-ils gratuits ?
                  </h3>
                  <p className="text-stone-600">
                    Oui, nous prenons en charge les frais de retour pour tous
                    les retours éligibles. Nous vous fournirons une étiquette de
                    retour prépayée.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* New Sections */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-playfair mb-6 flex items-center gap-3">
              <CheckCircle className="h-7 w-7 text-primary" /> Conditions
              d'Éligibilité
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Vous pouvez retourner ou échanger la plupart des articles neufs
                et non utilisés dans les <strong>7 jours</strong> suivant la
                réception de votre commande.
              </p>
              <p>
                Pour être éligible à un retour ou un échange, votre article doit
                être:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  Dans son état d'origine, non porté, non lavé et non endommagé.
                </li>
                <li>
                  Avec toutes les étiquettes et emballages d'origine intacts.
                </li>
                <li>Accompagné de la preuve d'achat (facture ou reçu).</li>
              </ul>
              <p className="font-semibold text-red-600">
                Articles non retournables: Les sous-vêtements, maillots de bain,
                bijoux percés et articles en solde final ne sont pas éligibles
                aux retours ou échanges pour des raisons d'hygiène ou de
                politique commerciale.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold font-playfair mb-6 flex items-center gap-3">
              <ListOrdered className="h-7 w-7 text-primary" /> Processus de
              Retour
            </h2>
            <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed space-y-4">
              <li>
                <span className="font-semibold">Contactez-nous:</span> Envoyez
                un e-mail à{" "}
                <a
                  href="mailto:returns@elegancealgerienne.dz"
                  className="text-primary hover:underline"
                >
                  returns@elegancealgerienne.dz
                </a>{" "}
                ou appelez-nous au +213 555 123 456 dans les 7 jours suivant la
                réception de votre commande. Indiquez votre numéro de commande
                et la raison du retour/échange.
              </li>
              <li>
                <span className="font-semibold">Préparation du colis:</span>{" "}
                Emballez soigneusement l'article dans son emballage d'origine
                avec toutes les étiquettes.
              </li>
              <li>
                <span className="font-semibold">Expédition:</span> Nous vous
                fournirons les instructions pour le retour. Les frais de retour
                sont à la charge du client, sauf en cas de défaut de fabrication
                ou d'erreur de notre part.
              </li>
              <li>
                <span className="font-semibold">Inspection et Traitement:</span>{" "}
                Une fois l'article reçu et inspecté, nous traiterons votre
                remboursement ou échange dans les 5-7 jours ouvrables.
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold font-playfair mb-6 flex items-center gap-3">
              <DollarSign className="h-7 w-7 text-primary" /> Remboursements
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Les remboursements seront effectués via le même mode de paiement
              que celui utilisé lors de l'achat, ou par virement bancaire si le
              paiement initial était en espèces à la livraison. Veuillez noter
              que les frais de livraison initiaux ne sont pas remboursables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-playfair mb-6 flex items-center gap-3">
              <RefreshCw className="h-7 w-7 text-primary" /> Échanges
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Si vous souhaitez échanger un article contre une taille ou une
              couleur différente, veuillez suivre le processus de retour et
              passer une nouvelle commande pour l'article souhaité. Cela
              garantit que l'article est en stock et vous parvient le plus
              rapidement possible.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
