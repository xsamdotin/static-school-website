export default function About() {
  return (
    <section id="about" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              A Legacy of Excellence in Education
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Founded in 2003, MT Vidyapeth has been at the forefront of
              providing quality education that blends academic rigor with
              holistic development. Our state-of-the-art campus, dedicated
              faculty, and innovative curriculum create an environment where
              students thrive.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We believe in nurturing each student&apos;s unique talents through a
              balanced approach that emphasizes critical thinking, creativity,
              and character building. Our commitment to excellence has made us
              one of the most respected educational institutions in the region.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { title: "Mission", desc: "Empower students with knowledge, skills, and values to excel in a changing world." },
                { title: "Vision", desc: "To be a beacon of educational excellence, shaping global citizens and future leaders." },
              ].map((item) => (
                <div key={item.title} className="flex-1 min-w-[200px] rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
              alt="School building"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-accent p-5 shadow-lg">
              <p className="text-3xl font-bold text-white">22</p>
              <p className="text-sm text-white/80">Years of Excellence</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Holistic Development",
              desc: "Beyond textbooks — we focus on sports, arts, and life skills to shape well-rounded individuals.",
            },
            {
              title: "Expert Faculty",
              desc: "Our dedicated teachers bring passion and expertise, mentoring every student to reach their full potential.",
            },
            {
              title: "Modern Infrastructure",
              desc: "Smart classrooms, well-equipped labs, a vast library, and expansive sports facilities.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-primary">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
