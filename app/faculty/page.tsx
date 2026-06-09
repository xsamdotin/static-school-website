const faculty = [
  "Mr Jai Kishore Singh",
  "Mrs Sunita Singh",
  "Mr Rajesh Kumar Ray",
  "Mr Tripurari Kumar",
  "Mrs Jayita Sen",
  "Mrs Moti Kumari",
  "Mrs Anita Singh",
  "Mrs Punam Kumari",
  "Mr Shashi Ranjan",
  "Mr Tahir Hussain",
  "Mr Shyam Nandan Kishore",
  "Mr Vikram Kumar Mishra",
  "Mr Avijeet Kumar",
  "Mr Shashi Shekhar Sinha",
  "Ms Nimisha Nimi",
  "Mr Chandan Kumar Upadhyay",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 0 && /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function getColor(index: number) {
  const colors = [
    "from-blue-500 to-blue-600",
    "from-amber-500 to-amber-600",
    "from-emerald-500 to-emerald-600",
    "from-rose-500 to-rose-600",
    "from-violet-500 to-violet-600",
    "from-cyan-500 to-cyan-600",
  ];
  return colors[index % colors.length];
}

export default function FacultyPage() {
  return (
    <div className="pt-16 lg:pt-36">
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Faculty
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Meet Our Educators
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500 leading-relaxed">
              Our dedicated team of experienced educators committed to nurturing
              young minds and shaping future leaders.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {faculty.map((name, i) => (
              <div
                key={name}
                className="group rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-lg"
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${getColor(i)} text-lg font-bold text-white shadow-sm`}
                >
                  {getInitials(name)}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-primary">
                  {name}
                </h3>
                <p className="mt-1 text-xs text-gray-400">Educator</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Excellence in Education
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70 leading-relaxed">
            Our faculty members bring years of experience, dedication, and
            passion to the classroom, ensuring every student receives
            personalized attention and quality education.
          </p>
        </div>
      </section>
    </div>
  );
}
