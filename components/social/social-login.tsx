"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Google, Apple } from "lucide-react";

export default function SocialLogin() {
  const handleSocialLogin = (provider: string) => {
    // Handle social login logic here
    console.log(`Logging in with ${provider}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Se connecter avec</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
          onClick={() => handleSocialLogin("google")}
        >
          <Google className="w-5 h-5" />
          Continuer avec Google
        </Button>

        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
          onClick={() => handleSocialLogin("facebook")}
        >
          <Facebook className="w-5 h-5" />
          Continuer avec Facebook
        </Button>

        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
          onClick={() => handleSocialLogin("apple")}
        >
          <Apple className="w-5 h-5" />
          Continuer avec Apple
        </Button>

        <div className="relative">
          <Separator />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
            ou
          </span>
        </div>

        <p className="text-xs text-gray-500 text-center">
          En continuant, vous acceptez nos conditions d'utilisation et notre
          politique de confidentialité.
        </p>
      </CardContent>
    </Card>
  );
}
