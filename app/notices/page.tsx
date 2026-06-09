const notices = [
  {
    date: "Saturday, May 10, 2025",
    category: "Important",
    title: "Formative Assessment 1 (FA1) - May 2025",
    desc: "The first Formative Assessment for all classes (Nursery to Std. VIII) will be conducted from May 15th to May 20th, 2025. Students are advised to prepare thoroughly. Syllabus and examination pattern will be shared in class.",
  },
  {
    date: "Monday, September 1, 2025",
    category: "Important",
    title: "Summative Assessment 1 (SA1) - September 2025",
    desc: "The first Summative Assessment will commence from September 15th, 2025. This is a comprehensive examination covering the syllabus taught from April to August. Admit cards will be issued one week before the exams.",
  },
  {
    date: "Wednesday, November 5, 2025",
    category: "Important",
    title: "Formative Assessment 3 (FA3) - November 2025",
    desc: "FA3 will be held from November 10th to November 15th, 2025. Students must bring their admit cards and arrive 15 minutes before the scheduled exam time. Progress reports will be shared with parents within 10 days.",
  },
  {
    date: "Sunday, March 1, 2026",
    category: "Important",
    title: "Summative Assessment 2 (SA2) - Annual Examination",
    desc: "The Annual Examination (SA2) for the academic session 2025-26 will begin from March 10th, 2026. This is the final examination covering the entire year's syllabus. Detailed date sheet will be provided by February 25th.",
  },
  {
    date: "Monday, October 20, 2025",
    category: null,
    title: "Parent-Teacher Meeting - Progress Report Discussion",
    desc: "A mandatory Parent-Teacher Meeting is scheduled for October 25th, 2025 to discuss student performance in FA1 and FA2. Parents are requested to collect their ward's progress report cards and discuss academic progress with respective class teachers.",
  },
];

export default function NoticesPage() {
  return (
    <div className="pt-16 lg:pt-36">
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Notices
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              School Notices
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500 leading-relaxed">
              Stay updated with the latest announcements and circulars.
            </p>
          </div>

          <div className="mt-8 relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search notices..."
              className="w-full rounded-xl border border-gray-200 bg-surface py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>

          <div className="mt-10 space-y-6">
            {notices.map((notice) => (
              <div
                key={notice.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-xs text-gray-400">{notice.date}</p>
                  {notice.category && (
                    <span className="rounded-full bg-accent/15 px-3 py-0.5 text-xs font-semibold text-accent">
                      {notice.category}
                    </span>
                  )}
                </div>
                <h2 className="mt-2 text-base font-semibold text-primary">
                  {notice.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {notice.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
