"use client";

import { useState } from "react";
import { productMarks } from "@/lib/portfolio-content";

type ProductIconProps = {
  name: string;
};

export default function ProductIcon({ name }: ProductIconProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const mark = productMarks[name] ?? { label: name.slice(0, 2).toUpperCase() };
  const source = mark.src ?? (mark.slug ? `https://cdn.simpleicons.org/${mark.slug}/${mark.color ?? "F8FAFC"}` : undefined);

  return (
    <span className="product-icon" aria-hidden="true">
      {source && source !== failedSource ? (
        <img src={source} alt="" onError={() => setFailedSource(source)} />
      ) : (
        <span>{mark.label}</span>
      )}
    </span>
  );
}
