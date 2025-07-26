"use client";

import SEOHead from "@/components/seo/seo-head";
import StructuredData from "@/components/seo/structured-data";

export default function SizeGuidePage() {
  const websiteSchema = {
    name: "Élégance Algérienne",
    url: "https://www.elegancealgerienne.dz",
    description: "Guide des tailles - Élégance Algérienne",
  };

  return (
    <>
      <SEOHead
        title="Guide des Tailles - Élégance Algérienne"
        description="Consultez notre guide des tailles pour trouver la taille parfaite pour vos vêtements."
        keywords="guide des tailles, tailles, vêtements, mode, Élégance Algérienne"
        type="website"
      />
      <StructuredData type="website" data={websiteSchema} />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold font-playfair mb-8 text-center">
            Guide des Tailles
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Comment mesurer</h2>
              <p className="mb-4">
                Pour trouver votre taille parfaite, mesurez-vous avec un mètre
                ruban en suivant ces étapes :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Tour de poitrine :</strong> Mesurez autour de la
                  partie la plus large de votre poitrine
                </li>
                <li>
                  <strong>Tour de taille :</strong> Mesurez autour de votre
                  taille naturelle
                </li>
                <li>
                  <strong>Tour de hanches :</strong> Mesurez autour de la partie
                  la plus large de vos hanches
                </li>
                <li>
                  <strong>Longueur d'épaule :</strong> Mesurez de l'épaule à
                  l'épaule
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Tailles Femme</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2">Taille</th>
                      <th className="border border-gray-300 p-2">
                        Tour de Poitrine
                      </th>
                      <th className="border border-gray-300 p-2">
                        Tour de Taille
                      </th>
                      <th className="border border-gray-300 p-2">
                        Tour de Hanches
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">XS</td>
                      <td className="border border-gray-300 p-2">80-84 cm</td>
                      <td className="border border-gray-300 p-2">60-64 cm</td>
                      <td className="border border-gray-300 p-2">88-92 cm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">S</td>
                      <td className="border border-gray-300 p-2">84-88 cm</td>
                      <td className="border border-gray-300 p-2">64-68 cm</td>
                      <td className="border border-gray-300 p-2">92-96 cm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">M</td>
                      <td className="border border-gray-300 p-2">88-92 cm</td>
                      <td className="border border-gray-300 p-2">68-72 cm</td>
                      <td className="border border-gray-300 p-2">96-100 cm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">L</td>
                      <td className="border border-gray-300 p-2">92-96 cm</td>
                      <td className="border border-gray-300 p-2">72-76 cm</td>
                      <td className="border border-gray-300 p-2">100-104 cm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">XL</td>
                      <td className="border border-gray-300 p-2">96-100 cm</td>
                      <td className="border border-gray-300 p-2">76-80 cm</td>
                      <td className="border border-gray-300 p-2">104-108 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Tailles Homme</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2">Taille</th>
                      <th className="border border-gray-300 p-2">
                        Tour de Poitrine
                      </th>
                      <th className="border border-gray-300 p-2">
                        Tour de Taille
                      </th>
                      <th className="border border-gray-300 p-2">
                        Longueur Épaule
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">S</td>
                      <td className="border border-gray-300 p-2">92-96 cm</td>
                      <td className="border border-gray-300 p-2">76-80 cm</td>
                      <td className="border border-gray-300 p-2">42-44 cm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">M</td>
                      <td className="border border-gray-300 p-2">96-100 cm</td>
                      <td className="border border-gray-300 p-2">80-84 cm</td>
                      <td className="border border-gray-300 p-2">44-46 cm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">L</td>
                      <td className="border border-gray-300 p-2">100-104 cm</td>
                      <td className="border border-gray-300 p-2">84-88 cm</td>
                      <td className="border border-gray-300 p-2">46-48 cm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">XL</td>
                      <td className="border border-gray-300 p-2">104-108 cm</td>
                      <td className="border border-gray-300 p-2">88-92 cm</td>
                      <td className="border border-gray-300 p-2">48-50 cm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">XXL</td>
                      <td className="border border-gray-300 p-2">108-112 cm</td>
                      <td className="border border-gray-300 p-2">92-96 cm</td>
                      <td className="border border-gray-300 p-2">50-52 cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Conseils</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Mesurez-vous sans vêtements épais</li>
                <li>Ne serrez pas trop le mètre ruban</li>
                <li>En cas de doute, choisissez la taille supérieure</li>
                <li>
                  Consultez les commentaires clients pour des conseils
                  spécifiques
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Besoin d'aide ?</h2>
              <p className="mb-4">
                Si vous avez des questions sur les tailles ou besoin d'aide pour
                choisir, n'hésitez pas à nous contacter à
                contact@elegancealgerienne.dz
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
