const forms = [
  "TC Application Form",
  "Request For Bonafide certificate",
  "Application for Transport facility",
  "Request for updating Residential Address",
  "Request for updating Phone No.",
  "Request for updating Email ID",
];

const fas = [
  { label: "FA1", name: "Formative Assessment 1", month: "May" },
  { label: "FA2", name: "Formative Assessment 2", month: "August" },
  { label: "FA3", name: "Formative Assessment 3", month: "November" },
  { label: "FA4", name: "Formative Assessment 4", month: "January" },
];

const sas = [
  { label: "SA1", name: "Summative Assessment 1", month: "September" },
  { label: "SA2", name: "Summative Assessment 2 (Annual)", month: "March" },
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const periods = [
  { period: "1st", time: "10:00 - 10:45" },
  { period: "2nd", time: "10:45 - 11:30" },
  { period: "3rd", time: "11:30 - 12:15" },
  { period: "4th", time: "12:15 - 01:00" },
  { period: "Break(Recess)", time: "01:00 - 01:30" },
  { period: "5th", time: "01:30 - 02:15" },
  { period: "6th", time: "02:15 - 03:00" },
  { period: "7th", time: "03:00 - 03:30" },
];

export default function Academics() {
  return (
    <>
      <section className="bg-white pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Academics
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Academic Program
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500 leading-relaxed">
              We follow a rigorous curriculum designed to challenge students and
              foster a love for learning.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
              Forms &amp; Documents
            </h2>
            <p className="mt-2 text-gray-500">
              Download important forms and certificates
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {forms.map((form, i) => (
              <div
                key={form}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md cursor-pointer"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
                  {i + 1}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {form}
                </span>
                <svg
                  className="ml-auto h-4 w-4 shrink-0 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
              CBSE Assessment System
            </h2>
            <p className="mt-2 text-gray-500">
              Formative and Summative Assessments as per CBSE guidelines
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-primary">
              Formative Assessments (FA)
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {fas.map((fa) => (
                <div
                  key={fa.label}
                  className="rounded-xl border border-gray-200 bg-surface p-5 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-lg font-bold text-accent">
                    {fa.label}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-primary">
                    {fa.name}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{fa.month}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-primary">
              Summative Assessments (SA)
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {sas.map((sa) => (
                <div
                  key={sa.label}
                  className="rounded-xl border border-gray-200 bg-surface p-5 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-lg font-bold text-accent">
                    {sa.label}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-primary">
                    {sa.name}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{sa.month}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-5 text-sm text-gray-600 leading-relaxed">
            <strong>Note:</strong> The results of all Formative &amp; Summative
            Assessments are communicated to parents/guardians through Progress
            Report Cards according to the latest CBSE guidelines and examination
            specifications.
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
              Bell Schedule
            </h2>
            <p className="mt-2 text-gray-500">
              Daily time slots for academic sessions
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <div className="flex gap-2 mb-4 flex-wrap">
              {days.map((day) => (
                <span
                  key={day}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium ${
                    day === "Sunday"
                      ? "bg-red-100 text-red-600"
                      : day === "Saturday"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-primary/10 text-primary"
                  }`}
                >
                  {day}
                </span>
              ))}
            </div>

            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary">
                  <th className="px-5 py-3 text-left text-sm font-semibold text-white">
                    Period
                  </th>
                  <th className="px-5 py-3 text-left text-sm font-semibold text-white">
                    Time
                  </th>
                  <th className="hidden sm:table-cell px-5 py-3 text-left text-sm font-semibold text-white">
                    Monday – Friday
                  </th>
                  <th className="hidden sm:table-cell px-5 py-3 text-left text-sm font-semibold text-white">
                    Saturday
                  </th>
                </tr>
              </thead>
              <tbody>
                {periods.map((p, i) => (
                  <tr
                    key={p.period}
                    className={`border-b border-gray-100 ${
                      p.period === "Break(Recess)"
                        ? "bg-accent/5"
                        : i % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50"
                    }`}
                  >
                    <td className="px-5 py-3 text-sm font-medium text-gray-700">
                      {p.period}
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-500">
                      {p.time}
                    </td>
                    <td className="hidden sm:table-cell px-5 py-3 text-sm text-gray-500">
                      {p.period === "Break(Recess)" ? "Recess" : "Regular Class"}
                    </td>
                    <td className="hidden sm:table-cell px-5 py-3 text-sm text-gray-500">
                      {p.period === "Break(Recess)" ? "Recess" : "Regular Class"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-4 text-center text-xs text-gray-400">
              Sunday: Holiday
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
