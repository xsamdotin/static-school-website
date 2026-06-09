export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80"
        alt="School campus"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-light/85 to-primary/90" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center py-32">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Established 2003
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
          Shaping Tomorrow&apos;s
          <br />
          <span className="text-accent">Leaders Today</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/80 leading-relaxed">
          At MT Vidyapeth, we nurture curious minds, foster creativity, and
          build character. Join a community where every student discovers their
          potential and embarks on a journey of lifelong learning.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-accent px-8 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-accent-light hover:shadow-xl"
          >
            Explore More
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-white/30 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "500+", label: "Students" },
            { value: "40+", label: "Faculty" },
            { value: "98%", label: "Pass Rate" },
            { value: "15+", label: "Programs" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white/5 p-4">
              <p className="text-2xl sm:text-3xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
