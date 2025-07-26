"use client";

import AdminDashboard from "@/components/admin/admin-dashboard";
import SEOHead from "@/components/seo/seo-head";

export default function Admin() {
  return (
    <>
      <SEOHead
        title="Administration - Élégance Algérienne"
        description="Panneau d'administration pour la gestion du site."
        keywords="admin, administration, gestion, mode, Algérie"
        type="website"
      />
      <AdminDashboard />
    </>
  );
}
