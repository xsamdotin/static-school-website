const values = [
  {
    title: "Integrity",
    desc: "Doing the right thing, always.",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Innovation",
    desc: "Creative thinking & problem solving.",
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Empathy",
    desc: "Respecting feelings of others.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Excellence",
    desc: "Striving for the highest standards.",
    color: "from-rose-500 to-rose-600",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Core Values
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Principles that define our character.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className={`rounded-xl bg-gradient-to-br ${v.color} p-6 text-center text-white shadow-lg`}
            >
              <h3 className="text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
