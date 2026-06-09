import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-primary text-xs font-bold">
                <img src="logo.png" alt="" />
              </div>
              <span className="text-base font-bold text-white">
                South Point Public School
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Empowering students with knowledge, integrity, and the skills to
              succeed in a changing world. A premier institution in Muzaffarpur.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Near Laxmi Chowk, Brajbehari Gali, Brahampura, Muzaffarpur, Bihar 842003
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 80844 26079
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@southpointpublicschool.in
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Academics", href: "/academics" },
                { label: "Admissions", href: "/admissions" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Follow Us</h4>
            <ul className="mt-4 space-y-2">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
                <li key={social}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-accent">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} South Point Public School, Muzaffarpur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
