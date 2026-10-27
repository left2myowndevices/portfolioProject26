import Link from "next/link";

export default function CaseStudyHeader() {
  return (
    <header className="case-study-nav">
      <Link className="case-study-wordmark" href="/">Jess <span>Draper</span></Link>
      <div className="case-study-nav-links">
        <Link className="case-study-back-link case-study-home-link" href="/"><span>↙</span> Home</Link>
        <Link className="case-study-back-link" href="/case-studies"><span>←</span> Case studies</Link>
      </div>
    </header>
  );
}
