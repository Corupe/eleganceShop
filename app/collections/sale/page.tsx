"use client";

import CollectionPage from "@/components/collections/collection-page";
import SEOHead from "@/components/seo/seo-head";

export default function SaleCollectionPage() {
  return (
    <>
      <SEOHead
        title="Soldes - Élégance Algérienne"
        description="Profitez de nos soldes exceptionnelles. Jusqu'à -70% sur une sélection d'articles."
        keywords="soldes, promotions, réductions, mode, vêtements, Algérie"
        type="website"
      />
      <CollectionPage />
    </>
  );
}
