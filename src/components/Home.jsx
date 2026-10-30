import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiMoon, FiSun, FiExternalLink } from "react-icons/fi";
import { person, nav, projects, skills, experience, about, hobbiesIntro, hobbies } from "../data";

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

// Shows the image if it exists, otherwise the fallback (so a missing file never breaks the page)
function Media({ src, alt, fallback, className = "", eager = false }) {
  const [bad, setBad] = useState(false);
  if (!src || bad) return fallback;
  return <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} onError={() => setBad(true)} className={className} />;
}

function Section({ id, n, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-[1100px] px-5 py-20">
      <Reveal>
        <p className="mb-2 font-mono text-xs text-gold">{n}</p>
        <h2 className="mb-8 text-2xl font-semibold md:text-3xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

function ProjectCard({ p }) {
  return (
    <Reveal className="h-full">
      <article className={`card flex h-full flex-col ${p.featured ? "md:p-8" : ""}`}>
        {p.featured && (
          <Media src={p.image} alt={p.imageAlt} className="mb-6 aspect-video w-full rounded-lg object-cover"
            fallback={<div className="mb-6 grid aspect-video place-items-center rounded-lg text-sm text-muted" style={{ border: "1px dashed var(--border)" }}>Screenshot coming soon</div>} />
        )}
        <p className="font-mono text-xs text-gold">{p.role}</p>
        <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-muted">{p.summary}</p>
        {p.bullets.length > 0 && (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        )}
        <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          {p.live && <a className="btn btn-primary" href={p.live} target="_blank" rel="noopener noreferrer">Live <FiExternalLink aria-hidden="true" /></a>}
          {p.code && <a className="btn btn-ghost" href={p.code} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> Code</a>}
        </div>
        {p.note && <p className="mt-3 text-xs text-muted">{p.note}</p>}
      </article>
    </Reveal>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const field = "w-full rounded-lg px-4 py-2.5 text-sm";
  const fieldStyle = { background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" };

  const submit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!data.success) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form id="contact-form" onSubmit={submit} className="card mt-6 max-w-xl space-y-4">
      <input type="hidden" name="access_key" value={person.formKey} />
      <input type="hidden" name="subject" value="New message from your portfolio" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="cf-to" className="mb-1 block text-sm">To</label>
        <input id="cf-to" value={person.email} readOnly tabIndex={-1} className={field} style={{ ...fieldStyle, opacity: 0.7 }} />
      </div>
      <div>
        <label htmlFor="cf-name" className="mb-1 block text-sm">Your name</label>
        <input id="cf-name" name="name" required className={field} style={fieldStyle} />
      </div>
      <div>
        <label htmlFor="cf-email" className="mb-1 block text-sm">From (your email)</label>
        <input id="cf-email" name="email" type="email" required className={field} style={fieldStyle} />
      </div>
      <div>
        <label htmlFor="cf-msg" className="mb-1 block text-sm">Message</label>
        <textarea id="cf-msg" name="message" rows={5} required className={field} style={fieldStyle} />
      </div>
      <button type="submit" disabled={status === "sending"} className="btn btn-primary">
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      <p role="status" className="text-sm">
        {status === "sent" && "Thank you! Your message was sent."}
        {status === "error" && <>Sorry, that didn't send. Please email <a className="underline" href={`mailto:${person.email}`}>{person.email}</a> directly.</>}
      </p>
    </form>
  );
}

export default function Home({ theme, toggle }) {
  const [open, setOpen] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const small = projects.filter((p) => !p.featured);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:px-4 focus:py-2"
        style={{ background: "var(--accent)", color: "var(--accent-ink)" }}>Skip to content</a>

      <header className="sticky top-0 z-40 border-b border-line bg-bg">
        <nav className="mx-auto flex h-14 max-w-[1100px] items-center justify-between gap-4 px-5" aria-label="Main">
          <a href="#top" aria-label="Back to top" className="flex items-center gap-2">
            <Media src={person.photo} alt="" className="h-9 w-9 rounded-full object-cover"
              fallback={<span className="font-mono text-sm font-medium text-gold">KK</span>} />
            <span className="hidden text-sm font-semibold sm:inline">Kidus</span>
          </a>
          <ul className="flex flex-1 items-center gap-5 overflow-x-auto text-sm text-muted md:justify-end">
            {nav.map((l) => (
              <li key={l.label} className="shrink-0"><a className="transition-colors hover:text-gold" href={l.href}>{l.label}</a></li>
            ))}
          </ul>
          <button onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} className="btn btn-ghost !px-3 !py-2">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top" className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-20 md:grid-cols-[1fr_auto] md:py-28">
          <div>
            <p className="mb-3 text-2xl text-gold">{person.greeting}</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{person.name}</h1>
            <p className="mt-5 max-w-xl text-lg text-muted">{person.headline}</p>
            <p className="mt-4 flex items-center gap-2 text-sm">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} aria-hidden="true" />
              {person.availability}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="#work">View Projects</a>
              <a className="btn btn-ghost" href="/resume.pdf" download>Download Résumé</a>
            </div>
          </div>
          <Media src={person.photo} alt={`Portrait of ${person.name}`} eager className="h-44 w-44 rounded-full object-cover md:h-56 md:w-56"
            fallback={<div role="img" aria-label="Profile photo placeholder" className="grid h-44 w-44 place-items-center rounded-full text-5xl font-semibold md:h-56 md:w-56"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--accent)" }}>KK</div>} />
        </section>

        {/* PROJECTS */}
        <Section id="work" n="01 / Work" title="Projects">
          <div className="grid gap-6 md:grid-cols-2">{featured.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">{small.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" n="02 / Skills" title="Skills">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skills.map(({ name, icon: Icon }) => (
              <li key={name}><Reveal><div className="card flex items-center gap-3 !p-4"><Icon size={26} aria-hidden="true" /><span className="text-sm font-medium">{name}</span></div></Reveal></li>
            ))}
          </ul>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" n="03 / Experience & Training" title="Experience & Education">
          <div className="grid gap-4 md:grid-cols-3">
            {experience.map((e) => (
              <Reveal key={e.title} className="h-full">
                <div className="card h-full">
                  <h3 className="font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted">{e.place}</p>
                  {e.note && <p className="mt-2 text-sm">{e.note}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ABOUT */}
        <Section id="about" n="04 / About" title="About me">
          <Reveal><p className="max-w-2xl text-lg text-muted">{about}</p></Reveal>
        </Section>

        {/* HOBBIES */}
        <Section id="hobbies" n="05 / Hobbies" title="Hobbies: Writing">
          <Reveal><p className="mb-6 max-w-2xl text-muted">{hobbiesIntro}</p></Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            {hobbies.map((h) => (
              <details key={h.title} className="card !p-4">
                <summary className="cursor-pointer list-none">
                  <span className="font-semibold">{h.title}</span>
                  <span className="ml-2 font-mono text-xs text-gold">{h.format}</span>
                </summary>
                <p className="mt-3 whitespace-pre-line text-sm text-muted">{h.text}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" n="06 / Contact" title="Let's talk">
          <Reveal>
            <p className="mb-6 max-w-xl text-muted">I'm looking for an internship or junior backend / full-stack role. The best way to reach me is email.</p>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="btn btn-primary" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="contact-form">
                <FaEnvelope aria-hidden="true" /> Email me
              </button>
              <a className="btn btn-ghost" href={person.github} target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
              <a className="btn btn-ghost" href={person.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn</a>
            </div>
            <p className="mt-4 text-sm text-muted">
              Or write directly: <a className="underline" href={`mailto:${person.email}`}>{person.email}</a>
            </p>
            {open && <ContactForm />}
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © 2026 {person.name} · Built with React + Tailwind
      </footer>
    </>
  );
}