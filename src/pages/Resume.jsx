import { useEffect } from "react";
import { person, resume as r } from "../data";

export default function Resume() {
  useEffect(() => { document.title = "Resume | Kidus Kidanewold"; }, []);
  return (
    <div className="resume-bg">
      <div className="no-print mx-auto mb-4 flex max-w-[210mm] items-center justify-between font-sans text-sm">
        <a href="/" className="underline" style={{ color: "#14181D" }}>← Back to portfolio</a>
        <button onClick={() => window.print()} className="rounded-lg px-4 py-2 font-semibold" style={{ background: "#8A6414", color: "#fff" }}>
          Print / Save as PDF
        </button>
      </div>
      <main className="sheet">
        <header>
          <h1>{person.name}</h1>
          <p>
            {person.location} · {person.email} · github.com/kidusk12 · linkedin.com/in/kidus-kidanewold-78b243341
          </p>
          <hr className="rule" />
        </header>
        <h2>Summary</h2>
        <p>{r.summary}</p>
        <h2>Skills</h2>
        <p>{r.skills}</p>
        <h2>Projects</h2>
        {r.projects.map((p) => (
          <div key={p.name} style={{ marginBottom: 6 }}>
            <p><strong>{p.name}</strong> | {p.role}</p>
            <p style={{ fontSize: "9.5pt" }}>{p.link}</p>
            <ul>{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        ))}
        <h2>Education</h2>
        <p>{r.education}</p>
        <h2>Training &amp; Leadership</h2>
        <ul>{r.training.map((t) => <li key={t}>{t}</li>)}</ul>
        <h2>Languages</h2>
        <p>{r.languages}</p>
      </main>
    </div>
  );
}
