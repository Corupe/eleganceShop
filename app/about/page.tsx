"use client";

import SEOHead from "@/components/seo/seo-head";
import Image from "next/image";
import { Users, Lightbulb, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="À propos d'Élégance Algérienne"
        description="Découvrez l'histoire, la mission et les valeurs d'Élégance Algérienne."
        keywords="à propos, notre histoire, mission, valeurs, équipe, Algérie"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl font-bold font-playfair mb-8 text-center">
          À propos d'Élégance Algérienne
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair mb-4 text-center">
            Notre histoire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Notre histoire"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                Élégance Algérienne est née d'une passion pour la mode et d'un
                profond amour pour la richesse culturelle de l'Algérie. Fondée
                en 2020, notre marque s'est donnée pour mission de proposer des
                vêtements et accessoires qui allient modernité, confort et un
                clin d'œil subtil à l'héritage algérien.
              </p>
              <p>
                Nous croyons que la mode est une forme d'expression personnelle,
                et chaque pièce de notre collection est conçue pour vous
                permettre de vous sentir confiant(e) et élégant(e), que ce soit
                pour une occasion spéciale ou au quotidien.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-playfair mb-6 text-center">
            Notre mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Notre mission est de devenir la destination de choix pour la mode et
            le lifestyle en Algérie et dans la région francophone, en offrant
            des produits de qualité supérieure, un service client exceptionnel
            et une expérience d'achat en ligne fluide et inspirante. Nous nous
            engageons à promouvoir l'artisanat local et à soutenir les talents
            émergents.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold font-playfair mb-6 text-center">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
              <Lightbulb className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">
                Nous cherchons constamment à innover dans nos designs et nos
                processus pour offrir le meilleur à nos clients.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
              <Handshake className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Qualité</h3>
              <p className="text-gray-700">
                Chaque produit est sélectionné et fabriqué avec le plus grand
                soin pour garantir durabilité et confort.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Client au Cœur</h3>
              <p className="text-gray-700">
                La satisfaction de nos clients est notre priorité absolue, nous
                nous engageons à un service irréprochable.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-playfair mb-6 text-center">
            Notre équipe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Membre de l'équipe 1"
                width={150}
                height={150}
                className="rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Amira Benali</h3>
              <p className="text-primary text-sm">
                Fondatrice & Directrice Créative
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Visionnaire de la mode et passionnée par l'artisanat algérien.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Membre de l'équipe 2"
                width={150}
                height={150}
                className="rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Yacine Cherif</h3>
              <p className="text-primary text-sm">Directeur des Opérations</p>
              <p className="text-gray-600 text-sm mt-2">
                Expert en logistique et optimisation de la chaîne
                d'approvisionnement.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Membre de l'équipe 3"
                width={150}
                height={150}
                className="rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Nadia Mansouri</h3>
              <p className="text-primary text-sm">Responsable Marketing</p>
              <p className="text-gray-600 text-sm mt-2">
                Spécialiste en marketing digital et engagement client.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Membre de l'équipe 4"
                width={150}
                height={150}
                className="rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Mehdi Said</h3>
              <p className="text-primary text-sm">Développeur Principal</p>
              <p className="text-gray-600 text-sm mt-2">
                Architecte de notre plateforme e-commerce.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
