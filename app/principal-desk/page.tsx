import Link from "next/link";

export default function PrincipalDeskPage() {
  return (
    <div className="pt-36 lg:pt-44">
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Principal&apos;s Desk
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Mrs. Sujan Kumari
            </h1>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="relative mx-auto w-fit">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                  alt="Mrs. Sujan Kumari"
                  className="h-56 w-56 rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="mt-6 text-center lg:text-left">
                <h2 className="text-xl font-bold text-primary">
                  Mrs. Sujan Kumari
                </h2>
                <p className="text-sm text-gray-500">Principal</p>
                <blockquote className="mt-4 border-l-4 border-accent pl-4 italic text-sm text-gray-600">
                  &ldquo;Education is the Manifestation of Perfection&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-5 text-base leading-relaxed text-gray-700">
                <p className="font-semibold text-primary">
                  Dear Students and Parents,
                </p>

                <p>
                  Welcome to a new academic year at South Point Public School.
                  As the Principal, I am honored to lead a team of dedicated
                  educators who strive every day to make learning an enjoyable
                  and enriching experience.
                </p>

                <p>
                  Our philosophy is simple: discipline and love must go hand in
                  hand. We focus on academic rigour, but we equally value sports,
                  arts, and community service. We want our students to be
                  resilient, compassionate, and curious.
                </p>

                <p>
                  I encourage parents to be active partners in this journey. Your
                  support and engagement are vital to the success of our
                  children. Together, let us build a future where our students
                  not only achieve personal success but also contribute
                  positively to society.
                </p>

                <p>
                  Let us work together to help our children realize their dreams.
                </p>

                <div className="pt-4">
                  <p className="font-semibold text-primary">Warm Regards,</p>
                  <p className="text-gray-600">Mrs. Sujan Kumari</p>
                  <p className="text-sm text-gray-400">Principal</p>
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
