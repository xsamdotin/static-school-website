const contactInfo = [
  {
    label: "Address",
    value: "Near Laxmi Chowk, Brajbehari Gali, Brahampura, Muzaffarpur, Bihar 842003",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 80844 26079",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@southpointpublicschool.in",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "School Hours",
    value: "Mon – Sat: 10:00 AM – 3:30 PM",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500 leading-relaxed">
            We&apos;d love to hear from you. Reach out for admissions, inquiries, or
            to schedule a campus visit.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-gray-800">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-primary">
              Send Us a Message
            </h3>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary resize-none"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-primary shadow transition-all hover:bg-accent-light"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
