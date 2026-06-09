import Link from "next/link";

export default function DirectorMessage() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative mx-auto w-fit">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                alt="Director"
                className="h-64 w-64 rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-3 -right-3 rounded-xl bg-accent px-4 py-2 shadow-lg">
                <p className="text-xs font-semibold text-primary">Est. 1999</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Director&apos;s Message
            </p>
            <h2 className="mt-2 text-2xl font-bold text-primary">
              Shri Diljeet Kumar
            </h2>
            <p className="text-sm text-gray-500">Director</p>

            <blockquote className="mt-6 border-l-4 border-accent pl-5 italic text-lg text-gray-700 leading-relaxed">
              &ldquo;Our vision is to build a foundation where every child
              discovers their true potential and grows into a responsible global
              citizen.&rdquo;
            </blockquote>

            <p className="mt-5 text-base text-gray-600 leading-relaxed">
              Welcome to South Point Public School. For over 25 years, we have
              been dedicated to illuminating young minds in Muzaffarpur.
            </p>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              I invite you to join our family and experience a learning
              environment that blends traditional values with modern pedagogy.
            </p>

            <Link href="/director-desk" className="mt-6 inline-flex h-11 items-center justify-center rounded-lg border border-accent px-6 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-primary">
              Read Full Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
