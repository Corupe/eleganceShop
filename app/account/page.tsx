"use client";

import UserAccount from "@/components/account/user-account";
import SEOHead from "@/components/seo/seo-head";

export default function Account() {
  return (
    <>
      <SEOHead
        title="Mon Compte - Élégance Algérienne"
        description="Gérez votre compte, vos commandes et vos informations personnelles."
        keywords="compte, profil, commandes, mode, Algérie"
        type="website"
      />
      <UserAccount />
    </>
  );
}
