import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden md:h-[700px] lg:h-[800px]">
      <Image
        src="/hero3.png?height=1000&width=1920"
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0 hue-rotate-45"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-yellow-300/15 z-10" />
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-playfair drop-shadow-lg">
          Élégance Algérienne
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
          Découvrez notre collection exclusive de mode et lifestyle, inspirée
          par la richesse culturelle de l'Algérie.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/collections/women">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Shop Femme
            </Button>
          </Link>
          <Link href="/collections/men">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Shop Homme
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
