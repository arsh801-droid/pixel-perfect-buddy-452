import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="font-mono text-sm font-medium text-primary">
          &lt;arsh/&gt;
        </Link>
        <ul className="flex flex-wrap items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "rounded-md px-3 py-1.5 text-primary bg-muted" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SectionTitle({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="fade-up mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">// {tag}</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h1>
    </div>
  );
}
