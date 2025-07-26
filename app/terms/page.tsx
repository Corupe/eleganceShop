"use client";

import SEOHead from "@/components/seo/seo-head";
import StructuredData from "@/components/seo/structured-data";

export default function TermsPage() {
  const websiteSchema = {
    name: "Élégance Algérienne",
    url: "https://www.elegancealgerienne.dz",
    description: "Conditions d'utilisation - Élégance Algérienne",
  };

  return (
    <>
      <SEOHead
        title="Conditions d'Utilisation - Élégance Algérienne"
        description="Consultez nos conditions d'utilisation pour comprendre les règles et politiques de notre boutique en ligne."
        keywords="conditions d'utilisation, politique, règles, Élégance Algérienne"
        type="website"
      />
      <StructuredData type="website" data={websiteSchema} />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold font-playfair mb-8 text-center">
            Conditions d'Utilisation
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptation des Conditions
              </h2>
              <p className="mb-4">
                En accédant et en utilisant le site web d'Élégance Algérienne,
                vous acceptez d'être lié par ces conditions d'utilisation. Si
                vous n'acceptez pas ces conditions, veuillez ne pas utiliser
                notre site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. Utilisation du Site
              </h2>
              <p className="mb-4">
                Notre site est destiné à un usage personnel et non commercial.
                Vous vous engagez à ne pas utiliser le site pour :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Violer toute loi applicable</li>
                <li>Porter atteinte aux droits d'autrui</li>
                <li>Transmettre du contenu offensant ou inapproprié</li>
                <li>Tenter d'accéder sans autorisation à nos systèmes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Commandes et Paiements
              </h2>
              <p className="mb-4">
                Toutes les commandes sont soumises à acceptation. Nous nous
                réservons le droit de refuser toute commande pour quelque raison
                que ce soit. Les prix sont en euros et incluent la TVA
                applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Livraison</h2>
              <p className="mb-4">
                Nous livrons en Algérie. Les délais de livraison sont estimatifs
                et peuvent varier selon la disponibilité et la localisation. Les
                frais de livraison sont calculés lors de la commande.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. Retours et Remboursements
              </h2>
              <p className="mb-4">
                Vous disposez de 14 jours pour retourner un article non utilisé
                dans son état d'origine. Les frais de retour sont à votre charge
                sauf en cas de défaut de fabrication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                6. Protection des Données
              </h2>
              <p className="mb-4">
                Nous respectons votre vie privée. Consultez notre politique de
                confidentialité pour plus d'informations sur la collecte et
                l'utilisation de vos données personnelles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Propriété Intellectuelle
              </h2>
              <p className="mb-4">
                Tout le contenu de ce site (textes, images, logos, etc.) est
                protégé par les droits d'auteur et appartient à Élégance
                Algérienne ou à ses partenaires.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Limitation de Responsabilité
              </h2>
              <p className="mb-4">
                Élégance Algérienne ne peut être tenue responsable des dommages
                indirects résultant de l'utilisation de notre site ou de nos
                services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Modifications</h2>
              <p className="mb-4">
                Nous nous réservons le droit de modifier ces conditions à tout
                moment. Les modifications entrent en vigueur dès leur
                publication sur le site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
              <p className="mb-4">
                Pour toute question concernant ces conditions, contactez-nous à
                contact@elegancealgerienne.dz
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
