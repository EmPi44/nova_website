import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Novamir ambient background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 md:px-16 lg:px-24">
        <div
          className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[0.2em] text-charcoal-900 opacity-0 animate-fade-in"
        >
          NOVAMIR
        </div>
        <div className="hidden md:flex items-center gap-12 opacity-0 animate-fade-in animation-delay-200">
          <a
            href="#collection"
            className="font-[family-name:var(--font-body)] text-sm font-medium tracking-widest text-charcoal-800 hover:text-charcoal-600 transition-colors duration-300"
          >
            KOLLEKTION
          </a>
          <a
            href="#about"
            className="font-[family-name:var(--font-body)] text-sm font-medium tracking-widest text-charcoal-800 hover:text-charcoal-600 transition-colors duration-300"
          >
            ÜBER UNS
          </a>
          <a
            href="#contact"
            className="font-[family-name:var(--font-body)] text-sm font-medium tracking-widest text-charcoal-800 hover:text-charcoal-600 transition-colors duration-300"
          >
            KONTAKT
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative line */}
          <div className="w-px h-16 bg-charcoal-400/50 mx-auto mb-8 opacity-0 animate-fade-in animation-delay-200" />

          {/* Main headline */}
          <h1
            className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-light text-charcoal-900 tracking-wide leading-tight opacity-0 animate-slide-up animation-delay-400"
          >
            Zeitlose
            <span className="block italic font-normal text-charcoal-700">Eleganz</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-8 font-[family-name:var(--font-body)] text-lg md:text-xl text-charcoal-700 font-light tracking-wide max-w-xl mx-auto opacity-0 animate-fade-in animation-delay-600"
          >
            Entdecken Sie die Kunst des raffinierten Designs,
            wo jedes Detail eine Geschichte erzählt.
          </p>

          {/* CTA Button */}
          <div className="mt-12 opacity-0 animate-fade-in animation-delay-800">
            <a
              href="#collection"
              className="inline-block px-10 py-4 font-[family-name:var(--font-body)] text-sm font-medium tracking-[0.25em] text-charcoal-900 border border-charcoal-900/30 hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-gold-50 transition-all duration-500"
            >
              ENTDECKEN
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
          <div className="flex flex-col items-center gap-2">
            <span className="font-[family-name:var(--font-body)] text-xs tracking-[0.3em] text-charcoal-600">
              SCROLL
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-charcoal-600 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}
