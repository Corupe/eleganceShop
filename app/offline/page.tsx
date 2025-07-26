"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  WifiOff,
  RefreshCw,
  Home,
  ShoppingBag,
  User,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    setIsOnline(navigator.onLine);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  if (isOnline) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-stone-800 mb-4">
              Connexion Rétablie !
            </h2>
            <p className="text-stone-600 mb-6">
              Votre connexion internet a été rétablie. Vous pouvez maintenant
              continuer à naviguer.
            </p>
            <Button onClick={handleRefresh} className="w-full">
              Actualiser la page
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Offline Icon */}
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <WifiOff className="h-12 w-12 text-red-600" />
          </div>

          {/* Main Content */}
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6">
            Vous êtes hors ligne
          </h1>
          <p className="text-xl text-stone-600 mb-8">
            Il semble que vous ayez perdu votre connexion internet. Vérifiez
            votre connexion et réessayez.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={handleRefresh} className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              Réessayer
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              Retour
            </Button>
          </div>

          {/* Quick Navigation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Navigation Rapide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  href="/"
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  <Home className="h-8 w-8 text-stone-600 mb-2" />
                  <span className="text-sm font-medium">Accueil</span>
                </Link>
                <Link
                  href="/collections/women"
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  <ShoppingBag className="h-8 w-8 text-stone-600 mb-2" />
                  <span className="text-sm font-medium">Femme</span>
                </Link>
                <Link
                  href="/collections/men"
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  <ShoppingBag className="h-8 w-8 text-stone-600 mb-2" />
                  <span className="text-sm font-medium">Homme</span>
                </Link>
                <Link
                  href="/account"
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  <User className="h-8 w-8 text-stone-600 mb-2" />
                  <span className="text-sm font-medium">Compte</span>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card>
            <CardHeader>
              <CardTitle>Besoin d'aide ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-left">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Vérifiez votre connexion :
                </h3>
                <ul className="list-disc list-inside text-stone-600 space-y-1">
                  <li>
                    Assurez-vous que votre Wi-Fi ou données mobiles sont activés
                  </li>
                  <li>
                    Vérifiez que vous êtes dans une zone avec une bonne
                    couverture réseau
                  </li>
                  <li>Essayez de redémarrer votre routeur ou appareil</li>
                  <li>
                    Contactez votre fournisseur d'accès internet si le problème
                    persiste
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-stone-500">
                  Si vous continuez à avoir des problèmes, contactez notre
                  support client à{" "}
                  <a
                    href="mailto:support@elegancealgerienne.dz"
                    className="text-primary hover:underline"
                  >
                    support@elegancealgerienne.dz
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
