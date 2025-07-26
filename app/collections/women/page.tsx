"use client";

import CollectionPage from "@/components/collections/collection-page";
import SEOHead from "@/components/seo/seo-head";

export default function WomenCollectionPage() {
  return (
    <>
      <SEOHead
        title="Collection Femme - Élégance Algérienne"
        description="Découvrez notre collection exclusive pour femmes. Robes élégantes, tuniques et accessoires inspirés par la culture algérienne."
        keywords="mode femme, robes, tuniques, caftans, vêtements femmes, Algérie"
        type="website"
      />
      <CollectionPage />
    </>
  );
}
