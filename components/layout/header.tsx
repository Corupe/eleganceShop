"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/providers/cart-provider";
import { useAuth } from "@/components/providers/auth-provider";
import SearchBar from "@/components/ui/search-bar";
import MobileMenu from "@/components/ui/mobile-menu";
import { useState } from "react";

export default function Header() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-playfair text-2xl font-bold text-gray-900"
        >
          Élégance Algérienne
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium">
          <Link
            href="/collections/women"
            className="hover:text-primary transition-colors"
          >
            Femme
          </Link>
          <Link
            href="/collections/men"
            className="hover:text-primary transition-colors"
          >
            Homme
          </Link>
          <Link
            href="/collections/accessories"
            className="hover:text-primary transition-colors"
          >
            Accessoires
          </Link>
          <Link
            href="/collections/sale"
            className="hover:text-primary transition-colors"
          >
            Soldes
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            À Propos
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right Section: Search, User, Cart */}
        <div className="flex items-center gap-4">
          <SearchBar />
          {user ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={logout}
              aria-label="Logout"
            >
              <User className="h-5 w-5" />
            </Button>
          ) : (
            <Link href="/account" aria-label="Account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <Link href="/cart" className="relative" aria-label="Shopping Cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
