"use client";

import Link from "next/link";
import { useState } from "react";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Director's Desk", href: "/director-desk" },
      { label: "Principal's Desk", href: "/principal-desk" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Academic Program", href: "/academics" },
      { label: "Faculty", href: "/faculty" },
    ],
  },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Notices", href: "/notices" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-primary hover:bg-primary/5 rounded-md"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-primary hover:bg-primary/5 rounded-md">
        {item.label}
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full -mt-1 pt-1 w-52 z-50">
          <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:text-primary hover:bg-primary/5"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="hidden lg:block bg-primary text-white text-xs">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-9">
          <span>Run & Managed By &quot;Nirmala Devi Memorial Trust&quot;</span>
          <div className="flex items-center gap-6">
            <span>Reg No. - 316/BEP/MUZ</span>
            <span>CBSE Curriculum</span>
            <span>School Hours: 10:00 AM - 3:30 PM</span>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary text-sm font-bold">
                <img src="logo.png" alt="" />
              </div>
              <div className="leading-tight">
                <span className="text-base font-bold text-primary block">
                  South Point Public School
                </span>
                <span className="text-xs text-gray-500">Muzaffarpur</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+918084426079"
                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 80844 26079
              </a>
              <Link
                href="/admissions"
                className="rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-primary animate-pulse"
              >
                Admissions Open 2025-26
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden lg:flex border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 w-full">
          <div className="flex items-center gap-1 h-11">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-primary hover:bg-primary/5 rounded-md"
                >
                  {item.label}
                </Link>
              ) : (
                <DesktopNavItem key={item.label} item={item} />
              )
            )}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary rounded-md"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileOpenDropdown(
                        mobileOpenDropdown === item.label ? null : item.label
                      )
                    }
                    className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary rounded-md"
                  >
                    {item.label}
                    <svg
                      className={`h-3 w-3 transition-transform ${mobileOpenDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileOpenDropdown === item.label && (
                    <div className="ml-4 flex flex-col gap-1 pb-1">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary rounded-md"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>
          <div className="mt-3 border-t border-gray-100 pt-3 space-y-2">
            <a
              href="tel:+918084426079"
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 80844 26079
            </a>
            <Link
              href="/admissions"
              className="block rounded-lg bg-accent px-4 py-2 text-center text-xs font-semibold text-primary"
            >
              Admissions Open 2025-26
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
