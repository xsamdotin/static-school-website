const features = [
  {
    title: "CBSE Affiliated",
    desc: "English Medium, Co-education. Classes: Nursery to Std. VIII",
  },
  {
    title: "20:1 Ratio",
    desc: "Student-Teacher ratio for personalized attention. Limited seats per class",
  },
  {
    title: "Tech-Ready",
    desc: "Computer Education from Std. I onwards. Modern learning tools",
  },
  {
    title: "Holistic Growth",
    desc: "Painting, Music & Craft classes. Overall development focus",
  },
  {
    title: "Admission Process",
    desc: "Test & Interview based. Direct admission for Nursery",
  },
  {
    title: "Transparent Fees",
    desc: "No readmission charges. No extra charges",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Parents Choose Us
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Essential information about our institution and what makes us stand
            out
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-primary">
                {feature.title}
              </h3>
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
