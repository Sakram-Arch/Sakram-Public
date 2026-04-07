import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sakram-gray to-white" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <Image
          src="/sakram-logo.jpg"
          alt="Sakram"
          width={120}
          height={120}
          className="rounded-2xl shadow-lg"
          priority
        />

        <h1 className="text-5xl font-extrabold tracking-tight text-sakram-brown sm:text-6xl">
          Sakram
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-sakram-text sm:text-xl">
          National Level Digital Public Infrastructure for Cybersecurity.
          <br />
          <span className="text-sakram-orange font-semibold">
            Built for an Always Secure India.
          </span>
        </p>

        <div className="mt-4 flex items-center gap-3">
          <Image
            src="/ispirt-logo.svg"
            alt="iSPIRT"
            width={80}
            height={32}
          />
          <span className="text-sm text-sakram-text/60">
            An iSPIRT Initiative
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 z-10 animate-bounce text-sakram-orange"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
