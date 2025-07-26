"use client";

import CollectionPage from "@/components/collections/collection-page";
import SEOHead from "@/components/seo/seo-head";

export default function AccessoriesCollectionPage() {
  return (
    <>
      <SEOHead
        title="Accessoires - Élégance Algérienne"
        description="Découvrez notre collection d'accessoires de luxe. Bijoux, sacs, parfums et plus encore."
        keywords="accessoires, bijoux, sacs, parfums, mode, Algérie"
        type="website"
      />
      <CollectionPage />
    </>
  );
}
