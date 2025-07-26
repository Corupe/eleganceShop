import Hero from "@/components/sections/hero";
import FeaturedProducts from "@/components/sections/featured-products";
import CategoryShowcase from "@/components/sections/category-showcase";
import Newsletter from "@/components/sections/newsletter";
import Footer from "@/components/layout/footer";
import SEOHead from "@/components/seo/seo-head";
import StructuredData from "@/components/seo/structured-data";
import SocialFeed from "@/components/social/social-feed";

export default function HomePage() {
  const websiteSchema = {
    name: "Élégance Algérienne",
    url: "https://www.elegancealgerienne.dz",
    description:
      "Découvrez notre collection exclusive de mode et lifestyle pour femmes et hommes. Livraison en Algérie.",
  };

  return (
    <>
      <SEOHead
        title="Élégance Algérienne - Mode & Lifestyle"
        description="Découvrez notre collection exclusive de mode et lifestyle pour femmes et hommes. Livraison en Algérie."
        keywords="mode, fashion, lifestyle, Algérie, vêtements, accessoires, robes, tuniques, caftans"
        type="website"
      />
      <StructuredData type="website" data={websiteSchema} />
      <main>
        <Hero />
        <FeaturedProducts />
        <CategoryShowcase />
        <SocialFeed />
        <Newsletter />
      </main>
    </>
  );
}
