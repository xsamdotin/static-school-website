const steps = [
  {
    num: "1",
    title: "Register",
    desc: "Fill out the registration form at the school office. Registration Fee: Rs. 300/-",
  },
  {
    num: "2",
    title: "Assessment",
    desc: "Attend test and interview for class placement. Direct admission for Nursery class.",
  },
  {
    num: "3",
    title: "Enrollment",
    desc: "Submit documents and fees to confirm admission.",
  },
];

const docs = [
  "Birth Certificate (Original & Photocopy)",
  "Transfer Certificate (from previous school)",
  "Report Card of the last class attended",
  "Passport size photographs of student and parents",
  "Aadhar Card copy",
];

const nurseryFees = [
  { label: "Registration Fee", amount: "₹ 300/-" },
  { label: "Admission Fee", amount: "₹ 3,000/-" },
];

const stdFees = [
  { label: "Registration Fee", amount: "₹ 300/-" },
  { label: "Admission Fee", amount: "₹ 3,600/-" },
];

const monthlyFees = [
  { class: "Nursery, Inf & Prep", amount: "₹ 1,500/-" },
  { class: "Std. I", amount: "₹ 1,650/-" },
  { class: "Std. II, III & IV", amount: "₹ 1,740/-" },
  { class: "Std. V, VI & VII", amount: "₹ 1,800/-" },
  { class: "Std. VIII", amount: "₹ 2,100/-" },
];

export default function AdmissionsPage() {
  return (
    <div className="pt-16 lg:pt-36">
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Admissions
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Admissions 2025-26
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500 leading-relaxed">
              Join our community of learners. The admission process is designed
              to be simple and transparent.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-primary to-primary-light p-8 sm:p-10 text-center shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Admissions Open
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              For Session 2025-26
            </h2>
            <p className="mt-2 text-white/80">
              Limited seats available for Nursery to Class VIII
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            Admission Process
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="relative rounded-xl border border-gray-200 bg-white p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-primary">
                  {step.num}
                </div>
                <h3 className="mt-4 font-semibold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            Admission Policy
          </h2>
          <ul className="mt-6 space-y-3">
            {[
              "Admission to any class is taken after test only. If a child is found not fit for one class, his/her suitability is examined for the next lower class.",
              "Direct Admission in Nursery class - No test or interview required.",
              "The Principal reserves the right to refuse admission to any student without furnishing any reason.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            School Fee Structure
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-primary text-center">Nursery to Prep</h3>
              <div className="mt-5 space-y-3">
                {nurseryFees.map((f) => (
                  <div key={f.label} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-600">{f.label}</span>
                    <span className="text-sm font-semibold text-primary">{f.amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <p className="text-sm font-semibold text-gray-700 mb-3">Monthly Fee</p>
                {monthlyFees.slice(0, 1).map((f) => (
                  <div key={f.class} className="rounded-lg bg-accent/5 p-3">
                    <p className="text-xs text-gray-500">{f.class}</p>
                    <p className="text-sm font-semibold text-primary">{f.amount}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-primary text-center">Std. I to Std. VIII</h3>
              <div className="mt-5 space-y-3">
                {stdFees.map((f) => (
                  <div key={f.label} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-600">{f.label}</span>
                    <span className="text-sm font-semibold text-primary">{f.amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <p className="text-sm font-semibold text-gray-700 mb-3">Monthly Fee</p>
                <div className="space-y-2">
                  {monthlyFees.slice(1).map((f) => (
                    <div key={f.class} className="rounded-lg bg-accent/5 p-3">
                      <p className="text-xs text-gray-500">{f.class}</p>
                      <p className="text-sm font-semibold text-primary">{f.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            Required Documents
          </h2>
          <ul className="mt-6 space-y-3">
            {docs.map((doc) => (
              <li key={doc} className="flex items-start gap-3 text-sm text-gray-600">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {doc}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-accent/20 bg-accent/5 p-6 text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              For admission inquiries, please visit our school office or contact us.
            </p>
            <p className="mt-2 text-sm font-semibold text-primary">
              Academic Session: April to March
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
