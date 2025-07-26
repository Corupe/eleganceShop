"use client";

import CheckoutProcess from "@/components/checkout/checkout-process";
import SEOHead from "@/components/seo/seo-head";

export default function Checkout() {
  return (
    <>
      <SEOHead
        title="Commande - Élégance Algérienne"
        description="Finalisez votre commande en toute sécurité."
        keywords="commande, paiement, livraison, mode, Algérie"
        type="website"
      />
      <CheckoutProcess />
    </>
  );
}
