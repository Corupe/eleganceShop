"use client";

import SearchResults from "@/components/search/search-results";
import SEOHead from "@/components/seo/seo-head";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <>
      <SEOHead
        title={`Recherche: ${query} - Élégance Algérienne`}
        description={`Résultats de recherche pour "${query}". Découvrez nos produits.`}
        keywords={`recherche, ${query}, mode, vêtements, Algérie`}
        type="website"
      />
      <SearchResults query={query} />
    </>
  );
}
