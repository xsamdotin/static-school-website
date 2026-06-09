const programs = [
  {
    name: "Primary School",
    grades: "Grades 1–5",
    desc: "Foundational learning with focus on literacy, numeracy, and creative exploration in a nurturing environment.",
  },
  {
    name: "Middle School",
    grades: "Grades 6–8",
    desc: "Broad-based curriculum fostering analytical thinking, scientific curiosity, and collaborative skills.",
  },
  {
    name: "High School",
    grades: "Grades 9–12",
    desc: "Advanced coursework with streams in Science, Commerce, and Arts, preparing students for higher education.",
  },
  {
    name: "STEM Program",
    grades: "Elective",
    desc: "Hand-on learning in robotics, coding, and design thinking to build future-ready problem solvers.",
  },
];

const activities = [
  { name: "Sports & Athletics", color: "bg-blue-500" },
  { name: "Music & Performing Arts", color: "bg-amber-500" },
  { name: "Debate & Public Speaking", color: "bg-emerald-500" },
  { name: "Art & Craft", color: "bg-rose-500" },
  { name: "Community Service", color: "bg-violet-500" },
  { name: "Science Club", color: "bg-cyan-500" },
];

export default function Academics() {
  return (
    <section id="academics" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Academics
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Comprehensive Academic Programs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500 leading-relaxed">
            From foundational learning to specialized streams, our curriculum is
            designed to inspire intellectual growth and academic excellence at
            every stage.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-primary">
                  {program.name}
                </h3>
                <span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary-light">
                  {program.grades}
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {program.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-2xl bg-primary p-8 sm:p-12">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"
            alt="Students in activity"
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="relative">
          <h3 className="text-2xl font-bold text-white">
            Beyond the Classroom
          </h3>
          <p className="mt-3 text-white/70">
            We believe in nurturing every aspect of a student&apos;s personality
            through a wide range of co-curricular activities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {activities.map((a) => (
              <span
                key={a.name}
                className={`${a.color} rounded-full px-4 py-1.5 text-sm font-medium text-white`}
              >
                {a.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
