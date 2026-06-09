const generalInfo = [
  "Affiliation: C.B.S.E. - English Medium",
  "Type: Co-education",
  "Classes: Nursery to Std. VIII",
  "Academic Session: April to March",
  "Student Teacher Ratio: 20:1",
  "Computer Education: From Std. I onwards",
  "Co-curricular Activities: Painting, Music, and Craft classes",
  "Hygienic Campus with Conveyance Facilities",
  "Limited seats in each class with Special care for weak students",
  "No Readmission charges & No Extra Charges",
];

const timings = [
  {
    group: "Nursery, Inf & Prep",
    dayTime: "10:00 AM - 3:15 PM",
    daySat: "10:00 AM - 12:45 PM",
    morningTime: "6:45 AM - 11:30 AM",
    morningSat: "6:45 AM - 9:30 AM",
  },
  {
    group: "Std. I to Std. VIII",
    dayTime: "10:00 AM - 3:30 PM",
    daySat: "10:00 AM - 1:00 PM",
    morningTime: "6:45 AM - 11:45 AM",
    morningSat: "6:45 AM - 9:45 AM",
  },
];

const uniform = {
  boys: [
    { label: "Regular (Monday - Friday)", items: ["Small Red & Blue Check Shirt", "Full/Half pants of Royal Blue Colour with belt", "Black Full shoes with White Socks", "Tie of Striped (R. Blue) Red Colour"] },
    { label: "Saturday", items: ["White Shirt", "White Pants", "White Canvas Shoes with White Socks"] },
  ],
  girls: [
    { label: "Regular (Monday - Friday)", items: ["Small Red & Blue Check Shirt", "Skirts up to knee of Royal Blue Colour with belt", "Black shoes with White Socks", "Tie of Striped Red Blue Colour"] },
    { label: "Saturday", items: ["White Shirt", "White Skirt", "White Canvas Shoes with White Socks"] },
  ],
};

const whyUs = [
  "Well-disciplined & Healthy Academic Environment",
  "Best Results with Limited Seats",
  "Conveyance Facilities Available",
  "Admission on Test and Interview Only",
  "Computer Education from Std. I",
  "Painting, Music & Craft Classes",
  "Special Care for Weak Students",
  "Student-Teacher Ratio: 20:1",
];

export default function About() {
  return (
    <>
      <section className="bg-white pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              General Information
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {generalInfo.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-surface p-4">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              School Timings
            </h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {timings.map((t) => (
              <div key={t.group} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-primary">{t.group}</h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Day Classes</p>
                    <p className="mt-1 text-sm text-gray-500">Mon-Fri: {t.dayTime}</p>
                    <p className="text-sm text-gray-500">Saturday: {t.daySat}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Morning Classes</p>
                    <p className="mt-1 text-sm text-gray-500">Mon-Fri: {t.morningTime}</p>
                    <p className="text-sm text-gray-500">Saturday: {t.morningSat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              School Uniform
            </h2>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-surface p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Boys
              </h3>
              <div className="mt-4 space-y-4">
                {uniform.boys.map((u) => (
                  <div key={u.label}>
                    <p className="text-sm font-semibold text-gray-700">{u.label}</p>
                    <ul className="mt-2 space-y-1">
                      {u.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-surface p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Girls
              </h3>
              <div className="mt-4 space-y-4">
                {uniform.girls.map((u) => (
                  <div key={u.label}>
                    <p className="text-sm font-semibold text-gray-700">{u.label}</p>
                    <ul className="mt-2 space-y-1">
                      {u.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Vision
              </p>
              <p className="mt-4 text-base text-white/90 leading-relaxed">
                To create a learning community where every student is inspired to
                reach their full potential and become responsible global citizens.
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Mission
              </p>
              <p className="mt-4 text-base text-white/90 leading-relaxed">
                Providing high-quality education through innovative teaching
                methods, fostering critical thinking, and promoting ethical
                values.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Why Choose Us?
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item} className="rounded-xl border border-gray-200 bg-surface p-5 text-center transition-shadow hover:shadow-md">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mt-3 text-sm font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
