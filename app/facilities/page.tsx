const facilities = [
  {
    title: "Modern Laboratories",
    desc: "State-of-the-art Science labs for Physics, Chemistry, and Biology, allowing students to engage in practical learning and experiments.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Computer Lab",
    desc: "Advanced computer labs with high-speed internet to foster digital literacy and programming skills from an early age.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Transport Facility",
    desc: "Safe and reliable bus fleet covering all major routes in Muzaffarpur. GPS tracking and trained attendants ensure student safety.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Hostel Facility",
    desc: "A home away from home. Clean, hygienic, and secure separate hostels for boys and girls with nutritious meals and 24/7 supervision.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Extra Attention",
    desc: "Special remedial classes and personalized mentorship programs for students who need extra support to excel academically.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Cultural Activities",
    desc: "Vibrant platform for music, dance, drama, and arts. We organize regular annual functions and inter-house competitions.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2m0 4a5 5 0 015 5m0 0v8m0-8a5 5 0 015-5m-5 5h.01M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Sports & Games",
    desc: "Expansive playground with facilities for Cricket, Football, Volleyball, and Badminton. Dedicated coaches for physical training.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Science Activities",
    desc: "Annual Science exhibitions, innovation fairs, and workshops to ignite curiosity and scientific temper among young minds.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Library",
    desc: "A well-stocked library with a vast collection of books, journals, and digital resources to encourage reading habits.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Educational Programs",
    desc: "Regular workshops, seminars, and guest lectures to keep students updated with global trends and career guidance.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
];

const smartFeatures = [
  "Interactive Digital Boards",
  "Audio-Visual Learning Aids",
  "E-Learning Modules",
];

export default function FacilitiesPage() {
  return (
    <div className="pt-16 lg:pt-36">
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Facilities
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              World-Class Infrastructure
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-gray-500 leading-relaxed">
              At South Point Public School, we provide a world-class
              infrastructure to support the holistic development of every child.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {f.icon}
                </div>
                <h3 className="mt-4 font-semibold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Smart Learning Environment
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                Technology-Driven Classrooms
              </h2>
              <p className="mt-5 text-base text-gray-600 leading-relaxed">
                We believe in leveraging technology to enhance the learning
                experience. Our smart classrooms are equipped with:
              </p>
              <ul className="mt-6 space-y-3">
                {smartFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
                alt="Smart Classroom"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-accent px-5 py-3 shadow-lg">
                <p className="text-sm font-bold text-primary">Smart Classroom</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
