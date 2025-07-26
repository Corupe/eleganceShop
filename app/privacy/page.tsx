"use client";

import SEOHead from "@/components/seo/seo-head";
import StructuredData from "@/components/seo/structured-data";

export default function PrivacyPage() {
  const websiteSchema = {
    name: "Élégance Algérienne",
    url: "https://www.elegancealgerienne.dz",
    description: "Politique de confidentialité - Élégance Algérienne",
  };

  return (
    <>
      <SEOHead
        title="Politique de Confidentialité - Élégance Algérienne"
        description="Consultez notre politique de confidentialité pour comprendre comment nous collectons, utilisons et protégeons vos données personnelles."
        keywords="politique de confidentialité, protection des données, vie privée, Élégance Algérienne"
        type="website"
      />
      <StructuredData type="website" data={websiteSchema} />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold font-playfair mb-8 text-center">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. Collecte des Données
              </h2>
              <p className="mb-4">
                Nous collectons les informations que vous nous fournissez
                directement, telles que :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Nom, prénom et adresse email</li>
                <li>Adresse de livraison et de facturation</li>
                <li>Informations de paiement</li>
                <li>Historique des commandes</li>
                <li>Préférences de communication</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. Utilisation des Données
              </h2>
              <p className="mb-4">
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Traiter et livrer vos commandes</li>
                <li>Communiquer avec vous concernant vos commandes</li>
                <li>Améliorer nos services et produits</li>
                <li>Personnaliser votre expérience</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Protection des Données
              </h2>
              <p className="mb-4">
                Nous mettons en place des mesures de sécurité appropriées pour
                protéger vos données personnelles contre tout accès non
                autorisé, modification, divulgation ou destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                4. Partage des Données
              </h2>
              <p className="mb-4">
                Nous ne vendons, n'échangeons ni ne louons vos données
                personnelles à des tiers. Nous pouvons partager vos informations
                uniquement dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>
                  Avec nos prestataires de services (transport, paiement) dans
                  le cadre de nos services
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Vos Droits</h2>
              <p className="mb-4">Vous avez le droit de :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Accéder à vos données personnelles</li>
                <li>Corriger vos données inexactes</li>
                <li>Demander la suppression de vos données</li>
                <li>Vous opposer au traitement de vos données</li>
                <li>Retirer votre consentement à tout moment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
              <p className="mb-4">
                Nous utilisons des cookies pour améliorer votre expérience sur
                notre site. Vous pouvez contrôler l'utilisation des cookies via
                les paramètres de votre navigateur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Conservation des Données
              </h2>
              <p className="mb-4">
                Nous conservons vos données personnelles aussi longtemps que
                nécessaire pour fournir nos services et respecter nos
                obligations légales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
              <p className="mb-4">
                Pour toute question concernant cette politique de
                confidentialité, contactez-nous à :
                privacy@elegancealgerienne.dz
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-8 pt-8 border-t">
              <p>Dernière mise à jour : Janvier 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
