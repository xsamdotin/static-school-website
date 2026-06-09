const notices = [
  {
    title: "Formative Assessment 1 (FA1) - May 2025",
    date: "5/10/2025",
    badge: "NEW",
    desc: "The first Formative Assessment for all classes (Nursery to Std. VIII) will be conducted from May 15th to May 20th, 2025. Students are advised to prepare thoroughly. Syllabus and examination pattern will be shared in class.",
  },
  {
    title: "Summative Assessment 1 (SA1) - September 2025",
    date: "9/1/2025",
    badge: "NEW",
    desc: "The first Summative Assessment will commence from September 15th, 2025. This is a comprehensive examination covering the syllabus taught from April to August. Admit cards will be issued one week before the exams.",
  },
  {
    title: "Formative Assessment 3 (FA3) - November 2025",
    date: "11/5/2025",
    badge: "NEW",
    desc: "FA3 will be held from November 10th to November 15th, 2025. Students must bring their admit cards and arrive 15 minutes before the scheduled exam time. Progress reports will be shared with parents within 10 days.",
  },
  {
    title: "Summative Assessment 2 (SA2) - Annual Examination",
    date: "3/1/2026",
    badge: "NEW",
    desc: "The Annual Examination (SA2) for the academic session 2025-26 will begin from March 10th, 2026. This is the final examination covering the entire year's syllabus. Detailed date sheet will be provided by February 25th.",
  },
  {
    title: "Parent-Teacher Meeting - Progress Report Discussion",
    date: "10/20/2025",
    badge: null,
    desc: "A mandatory Parent-Teacher Meeting is scheduled for October 25th, 2025 to discuss student performance in FA1 and FA2. Parents are requested to collect their ward's progress report cards and discuss academic progress with respective class teachers.",
  },
];

import Link from "next/link";

export default function NoticeBoard() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Notice Board
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Latest Updates
          </h2>
        </div>

        <div className="mt-12 space-y-5">
          {notices.map((notice) => (
            <div
              key={notice.title}
              className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-base font-semibold text-primary">
                      {notice.title}
                    </h3>
                    {notice.badge && (
                      <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
                        {notice.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-gray-400">{notice.date}</p>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {notice.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/notices" className="inline-flex h-11 items-center justify-center rounded-lg border border-accent px-6 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-primary">
            View All Notices
          </Link>
        </div>
      </div>
    </section>
  );
}
