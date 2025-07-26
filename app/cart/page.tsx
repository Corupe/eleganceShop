"use client";

import CartPage from "@/components/cart/cart-page";
import SEOHead from "@/components/seo/seo-head";

export default function Cart() {
  return (
    <>
      <SEOHead
        title="Panier - Élégance Algérienne"
        description="Votre panier d'achat. Passez votre commande en toute sécurité."
        keywords="panier, commande, achat, mode, Algérie"
        type="website"
      />
      <CartPage />
    </>
  );
}
