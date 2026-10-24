import { Link, useNavigate, useRouterState } from "@tanstack/react-router";

const links = [
  { label: "Home", hash: null },
  { label: "About", hash: "about" },
  { label: "Skills", hash: "skills" },
  { label: "Projects", hash: "projects" },
  { label: "Contact", hash: "contact" },
] as const;

export function SiteHeader() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const onHome = pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="font-mono text-sm font-medium text-primary">
          &lt;arsh/&gt;
        </Link>
        <ul className="flex flex-wrap items-center gap-1 text-sm">
          {links.map((l) => {
            const active = onHome && (l.hash ? hash === l.hash : !hash);
            return (
              <li key={l.label}>
                <Link
                  to="/"
                  {...(l.hash ? { hash: l.hash } : {})}
                  className={`rounded-md px-3 py-1.5 transition-colors hover:text-primary ${active ? "text-primary bg-muted" : "text-muted-foreground"}`}
                  onClick={(e) => {
                    if (!onHome) return; // navigate to home; the home page scrolls to the section on arrival
                    e.preventDefault();
                    if (l.hash) {
                      document.getElementById(l.hash)?.scrollIntoView({ behavior: "smooth" });
                      navigate({ to: "/", hash: l.hash, replace: true });
                    } else {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      if (hash) navigate({ to: "/", replace: true });
                    }
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
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
