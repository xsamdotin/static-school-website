const images = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/spps${i + 1}/600/400`,
  alt: `Gallery image ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <div className="pt-16 lg:pt-36">
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Photo Gallery
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              Moments at South Point
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500 leading-relaxed">
              Capturing the vibrant moments and memories of our school life —
              from academic achievements to cultural celebrations.
            </p>
          </div>

          <div className="mt-12 columns-2 sm:columns-3 gap-4 space-y-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="break-inside-avoid overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-shadow hover:shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
