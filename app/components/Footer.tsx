export default function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white text-xs font-bold">
                MT
              </div>
              <span className="text-base font-bold text-white">
                MT Vidyapeth
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Empowering students with knowledge, skills, and values to excel in
              a rapidly changing world.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {["About Us", "Academics", "Admissions", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/, "")}`}
                      className="text-sm text-white/60 transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Programs</h4>
            <ul className="mt-4 space-y-2">
              {["Primary School", "Middle School", "High School", "STEM"].map(
                (p) => (
                  <li key={p}>
                    <a
                      href="#academics"
                      className="text-sm text-white/60 transition-colors hover:text-accent"
                    >
                      {p}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Follow Us</h4>
            <ul className="mt-4 space-y-2">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map(
                (social) => (
                  <li key={social}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-accent"
                    >
                      {social}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} MT Vidyapeth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
