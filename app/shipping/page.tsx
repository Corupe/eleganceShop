"use client";

import SEOHead from "@/components/seo/seo-head";
import StructuredData from "@/components/seo/structured-data";

export default function ShippingPage() {
  const websiteSchema = {
    name: "Élégance Algérienne",
    url: "https://www.elegancealgerienne.dz",
    description: "Informations de livraison - Élégance Algérienne",
  };

  return (
    <>
      <SEOHead
        title="Livraison - Élégance Algérienne"
        description="Découvrez nos options de livraison et les délais estimés pour votre commande."
        keywords="livraison, délais, frais de port, Élégance Algérienne"
        type="website"
      />
      <StructuredData type="website" data={websiteSchema} />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold font-playfair mb-8 text-center">
            Informations de Livraison
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Options de Livraison
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Livraison Standard
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Délai : 3-5 jours ouvrables
                  </p>
                  <p className="text-gray-600 mb-4">Frais : 500 DZD</p>
                  <p className="text-sm">
                    Livraison à domicile ou en point relais
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Livraison Express
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Délai : 1-2 jours ouvrables
                  </p>
                  <p className="text-gray-600 mb-4">Frais : 1000 DZD</p>
                  <p className="text-sm">Livraison prioritaire à domicile</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Zones de Livraison
              </h2>
              <p className="mb-4">
                Nous livrons dans toute l'Algérie. Les délais peuvent varier
                selon votre localisation :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Alger et environs :</strong> 1-3 jours ouvrables
                </li>
                <li>
                  <strong>Autres grandes villes :</strong> 3-5 jours ouvrables
                </li>
                <li>
                  <strong>Zones rurales :</strong> 5-7 jours ouvrables
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Suivi de Commande</h2>
              <p className="mb-4">
                Une fois votre commande expédiée, vous recevrez un email avec un
                numéro de suivi pour suivre votre colis en temps réel.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Livraison Gratuite
              </h2>
              <p className="mb-4">
                La livraison est gratuite pour toute commande supérieure à 5000
                DZD.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="mb-4">
                Pour toute question concernant la livraison, contactez-nous à
                contact@elegancealgerienne.dz
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
