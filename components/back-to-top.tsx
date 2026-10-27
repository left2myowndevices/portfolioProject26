"use client";

import { useEffect, useState } from "react";

type BackToTopProps = {
  visible?: boolean;
  liftForFooter?: boolean;
};

export default function BackToTop({ visible, liftForFooter = false }: BackToTopProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const shouldShow = visible ?? hasScrolled;

  useEffect(() => {
    const updateVisibility = () => setHasScrolled(window.scrollY > 500);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      className={`back-to-top${shouldShow ? " is-visible" : ""}${liftForFooter ? " is-footer-visible" : ""}`}
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
