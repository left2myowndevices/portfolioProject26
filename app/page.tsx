"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import ProductIcon from "@/components/product-icon";
import {
  approach,
  experience,
  frameworksAndTools,
  linkedInUrl,
  navigationItems,
  resumePath,
  sectionIds,
  skillGroups,
} from "@/lib/portfolio-content";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isAtPageEnd, setIsAtPageEnd] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isSectionIndexOpen, setIsSectionIndexOpen] = useState(false);
  const sectionIndexCloseTimeout = useRef<number | null>(null);

  function openSectionIndex() {
    if (sectionIndexCloseTimeout.current !== null) {
      window.clearTimeout(sectionIndexCloseTimeout.current);
      sectionIndexCloseTimeout.current = null;
    }
    setIsSectionIndexOpen(true);
  }

  function closeSectionIndexSoon() {
    if (sectionIndexCloseTimeout.current !== null) window.clearTimeout(sectionIndexCloseTimeout.current);
    sectionIndexCloseTimeout.current = window.setTimeout(() => {
      setIsSectionIndexOpen(false);
      sectionIndexCloseTimeout.current = null;
    }, 280);
  }

  useEffect(() => {
    function onScroll() {
      const position = window.scrollY + 180;
      let current = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && position >= section.offsetTop) current = id;
      }

      setActiveSection(current);
      setIsAtPageEnd(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 32);
      const contact = document.getElementById("contact");
      setIsContactVisible(Boolean(contact && contact.getBoundingClientRect().top <= window.innerHeight * 0.72));
      const footer = document.querySelector("footer");
      setIsFooterVisible(Boolean(footer && footer.getBoundingClientRect().top < window.innerHeight));
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (sectionIndexCloseTimeout.current !== null) window.clearTimeout(sectionIndexCloseTimeout.current);
    };
  }, []);

  const isSectionIndexExpanded = activeSection !== "home" || isSectionIndexOpen;

  return (
    <main>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="site-wordmark" href="#home">Jess <span>Draper</span></a>
          <Link className="site-case-studies-link" href="/case-studies">Case studies <span>↗</span></Link>
        </nav>
      </header>

      <nav
        className={`section-index${isSectionIndexExpanded ? " is-open" : ""}${isContactVisible ? " is-contact" : ""}`}
        aria-label="Section index"
        onPointerEnter={openSectionIndex}
        onPointerLeave={closeSectionIndexSoon}
        onFocus={openSectionIndex}
        onBlur={closeSectionIndexSoon}
      >
        <button
          className="section-index-title"
          type="button"
          aria-expanded={isSectionIndexExpanded}
          aria-label="Toggle contents menu"
          onClick={() => setIsSectionIndexOpen((isOpen) => !isOpen)}
        >
          Contents
        </button>
        {navigationItems.map((item, index) => (
          <a className={activeSection === item.id ? "is-active" : undefined} href={`#${item.id}`} key={item.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
          </a>
        ))}
      </nav>

      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy hero-enter">
            <p className="eyebrow">Product designer &amp; frontend engineer</p>
            <h1>I design digital products and build the frontend experiences that make them work <em>beautifully.</em></h1>
            <p className="hero-intro">
              I partner with business leaders to turn complex ideas into clear, useful interfaces, then bring them all the way to production.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/case-studies">View case studies <span>↗</span></Link>
              <a className="text-link" href="#tools">Explore my toolkit <span>↓</span></a>
              <a className="text-link" href={resumePath} download>Download resume <span>↓</span></a>
            </div>
          </div>
          <div className="hero-mark hero-enter-delay">
            <figure className="hero-portrait">
              <img src="/jess-illustrated-portrait.png" alt="Illustrated portrait of Jess Draper" />
              <figcaption>Designing the whole product surface, from first idea to production.</figcaption>
            </figure>
          </div>
        </div>
        <a className="scroll-prompt" href="#skills"><span /> Scroll to explore</a>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What I work with</p>
            <h2>Skills built for the whole product surface.</h2>
          </div>
          <p>Enough range to connect the dots, and enough depth to make the details count.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <section className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}><ProductIcon name={skill} />{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="tools-section" id="tools">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Frameworks &amp; tools</p>
            <h2>The tools behind the work.</h2>
          </div>
          <p>A practical stack for designing, building, testing, and shipping useful products.</p>
        </div>
        <div className="tool-grid">
          {frameworksAndTools.map((tool) => (
            <div className="tool-tile" key={tool}>
              <ProductIcon name={tool} />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading"><div><p className="eyebrow">Career path</p><h2>Experience</h2></div></div>
        <ol className="timeline">
          {experience.map((item, index) => (
            <li key={item.company}>
              <span className="timeline-index">0{index + 1}</span>
              <div className="timeline-role"><p>{item.period}</p><h3>{item.role}</h3><h4>{item.company}</h4></div>
              <p className="timeline-detail">{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="approach-section">
        <div className="section-heading"><div><p className="eyebrow">How I work</p><h2>A clear path from idea to a better product.</h2></div></div>
        <div className="approach-list">
          {approach.map(([number, title, detail]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Let&apos;s work together</p>
          <h2>Ready to make something that feels <em>right?</em></h2>
          <p>I&apos;m interested in product design and frontend roles where craft, clear thinking, and business outcomes all matter.</p>
          <a className="text-link" href={linkedInUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a>
        </div>
        <div className="contact-form-wrap"><ContactForm /></div>
      </section>

      <footer>
        <a className="site-wordmark" href="#home">Jess <span>Draper</span></a>
        <p>Product design &amp; frontend engineering</p>
      </footer>

      <a className={`back-to-top${isContactVisible || isAtPageEnd ? " is-visible" : ""}${isFooterVisible ? " is-footer-visible" : ""}`} href="#home" aria-label="Back to top">
        <span aria-hidden="true">↑</span>
      </a>
    </main>
  );
}
