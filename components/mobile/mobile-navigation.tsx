"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  Search,
  ShoppingBag,
  User,
  Heart,
  Home,
  Package,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import SearchBar from "@/components/ui/search-bar";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          {/* Search */}
          <div>
            <SearchBar />
          </div>

          {/* Main Navigation */}
          <nav className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Navigation</h3>
              <div className="space-y-2">
                <Link
                  href="/"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Home className="w-5 h-5" />
                  <span>Accueil</span>
                </Link>
                <Link
                  href="/collections/women"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Package className="w-5 h-5" />
                  <span>Collection Femme</span>
                </Link>
                <Link
                  href="/collections/men"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Package className="w-5 h-5" />
                  <span>Collection Homme</span>
                </Link>
                <Link
                  href="/collections/accessories"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Package className="w-5 h-5" />
                  <span>Accessoires</span>
                </Link>
                <Link
                  href="/collections/sale"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Badge
                    variant="destructive"
                    className="w-5 h-5 p-0 flex items-center justify-center text-xs"
                  >
                    %
                  </Badge>
                  <span>Soldes</span>
                </Link>
              </div>
            </div>

            {/* Account & Cart */}
            <div>
              <h3 className="font-semibold mb-3">Mon Compte</h3>
              <div className="space-y-2">
                <Link
                  href="/account"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <User className="w-5 h-5" />
                  <span>Mon Compte</span>
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Panier</span>
                </Link>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Heart className="w-5 h-5" />
                  <span>Favoris</span>
                </Link>
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-semibold mb-3">Service Client</h3>
              <div className="space-y-2">
                <Link
                  href="/contact"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact</span>
                </Link>
                <Link
                  href="/shipping"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Package className="w-5 h-5" />
                  <span>Livraison</span>
                </Link>
                <Link
                  href="/returns"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Package className="w-5 h-5" />
                  <span>Retours</span>
                </Link>
                <Link
                  href="/size-guide"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Package className="w-5 h-5" />
                  <span>Guide des Tailles</span>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3 p-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>Alger, Algérie</span>
                </div>
                <div className="flex items-center gap-3 p-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>+213 123 456 789</span>
                </div>
                <div className="flex items-center gap-3 p-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>contact@elegancealgerienne.dz</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
