"use client";

import CollectionPage from "@/components/collections/collection-page";
import SEOHead from "@/components/seo/seo-head";

export default function MenCollectionPage() {
  return (
    <>
      <SEOHead
        title="Collection Homme - Élégance Algérienne"
        description="Découvrez notre collection exclusive pour hommes. Style élégant et moderne inspiré par la culture algérienne."
        keywords="mode homme, vêtements hommes, costume, chemise, pantalon, Algérie"
        type="website"
      />
      <CollectionPage />
    </>
  );
}
