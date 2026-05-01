import { Github, Linkedin, Briefcase } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
];

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://fiverr.com", icon: Briefcase, label: "Fiverr" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <a href="#" className="text-xl font-bold text-charcoal tracking-tight">
              LUCIDIENT
            </a>
            <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">
              AI workflows and agents built for businesses that want to move faster.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wide mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-charcoal/60 hover:text-olive transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wide mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-border flex items-center justify-center text-charcoal/60 hover:text-olive hover:border-olive/30 transition-all"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-charcoal/40">
            &copy; {new Date().getFullYear()} Lucidient. All rights reserved.
          </p>
          <p className="text-sm text-charcoal/40">
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
