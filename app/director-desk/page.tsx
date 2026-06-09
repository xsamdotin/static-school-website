import Link from "next/link";

export default function DirectorDeskPage() {
  return (
    <div className="pt-36 lg:pt-44">
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Director&apos;s Desk
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Shri Diljeet Kumar
            </h1>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="relative mx-auto w-fit">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Shri Diljeet Kumar"
                  className="h-56 w-56 rounded-2xl object-cover shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 rounded-xl bg-accent px-4 py-2 shadow-lg">
                  <p className="text-xs font-semibold text-primary">
                    Serving since 1999
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center lg:text-left">
                <h2 className="text-xl font-bold text-primary">
                  Shri Diljeet Kumar
                </h2>
                <p className="text-sm text-gray-500">Director</p>
                <blockquote className="mt-4 border-l-4 border-accent pl-4 italic text-sm text-gray-600">
                  &ldquo;Building a Legacy of Excellence&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="prose prose-gray max-w-none space-y-5 text-base leading-relaxed text-gray-700">
                <p className="font-semibold text-primary">Dear Parents and Students,</p>

                <p>
                  It gives me immense pride to welcome you to South Point Public
                  School, Muzaffarpur. When we laid the foundation of this
                  institution in 1999, our dream was simple yet profound: to
                  create a space where education transcends textbooks and touches
                  the lives of children in meaningful ways.
                </p>

                <p>
                  Over the years, we have grown from a humble beginning to a
                  premier institution in Muzaffarpur, but our core values remain
                  unchanged. We believe that every child carries a unique spark,
                  and it is our responsibility to nurture it into a flame that
                  lights up the world.
                </p>

                <p>
                  In today&apos;s rapidly changing world, education must prepare
                  students not just for exams, but for life. We are committed to
                  providing infrastructure and pedagogy that encourages critical
                  thinking, innovation, and ethical leadership.
                </p>

                <p>
                  I assure you that at South Point Public School, your child is
                  in safe hands, learning to fly while staying rooted in our rich
                  cultural heritage.
                </p>

                <div className="pt-4">
                  <p className="font-semibold text-primary">Sincerely,</p>
                  <p className="text-gray-600">Shri Diljeet Kumar</p>
                  <p className="text-sm text-gray-400">Director</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-accent px-6 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-primary"
            >
              Back to About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
