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
import {
  Home,
  ShoppingBag,
  User,
  Search,
  X,
  Info,
  Phone,
  Tag,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { useAuth } from "@/components/providers/auth-provider";
import Link from "next/link";
import SearchBar from "@/components/ui/search-bar";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { user, logout } = useAuth();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
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
                  <ShoppingBag className="w-5 h-5" />
                  <span>Collection Femme</span>
                </Link>
                <Link
                  href="/collections/men"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Collection Homme</span>
                </Link>
                <Link
                  href="/collections/accessories"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Tag className="w-5 h-5" />
                  <span>Accessoires</span>
                </Link>
                <Link
                  href="/collections/sale"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Tag className="w-5 h-5" />
                  <span>Soldes</span>
                </Link>
              </div>
            </div>

            {/* Account & Cart */}
            <div>
              <h3 className="font-semibold mb-3">Mon Compte</h3>
              <div className="space-y-2">
                {user ? (
                  <>
                    <Link
                      href="/account"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                    >
                      <User className="w-5 h-5" />
                      <span>Mon Profil</span>
                    </Link>
                    <Link
                      href="/wishlist"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                    >
                      <Heart className="w-5 h-5" />
                      <span>Favoris</span>
                    </Link>
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-2 h-auto"
                      onClick={logout}
                    >
                      <X className="w-5 h-5 mr-3" />
                      <span>Se déconnecter</span>
                    </Button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <User className="w-5 h-5" />
                    <span>Se connecter</span>
                  </Link>
                )}
                <Link
                  href="/cart"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Panier</span>
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
                  href="/about"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Info className="w-5 h-5" />
                  <span>À propos</span>
                </Link>
                <Link
                  href="/shipping"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Livraison</span>
                </Link>
                <Link
                  href="/returns"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Retours</span>
                </Link>
                <Link
                  href="/size-guide"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Info className="w-5 h-5" />
                  <span>Guide des Tailles</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
