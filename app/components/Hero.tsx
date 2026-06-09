import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 lg:pt-44">
      <img
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80"
        alt="School campus"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-light/85 to-primary/90" /> */}

      <div className="relative mx-auto max-w-4xl px-4 text-center py-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-4 py-1.5 text-sm text-accent backdrop-blur-sm mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Admissions Open 2025-26
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
          Empowering Minds,
          <br />
          <span className="text-accent">Shaping Futures</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/80 leading-relaxed">
          Welcome to South Point Public School, Muzaffarpur. Where tradition
          meets modern excellence in Muzaffarpur.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/admissions"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-accent px-8 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-accent-light hover:shadow-xl"
          >
            Apply Now
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-white/30 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
