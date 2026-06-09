export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
              alt="School building"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Nurturing Potential in Every Child
            </h2>
            <p className="mt-5 text-base text-gray-600 leading-relaxed">
              Located in the heart of Muzaffarpur, South Point Public School has
              been a beacon of knowledge since its inception. We believe that
              every child is unique.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary-light">
                CBSE Curriculum
              </span>
              <span className="rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary-light">
                Discipline
              </span>
              <span className="rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary-light">
                Career Focused
              </span>
              <span className="rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary-light">
                Best Education
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
