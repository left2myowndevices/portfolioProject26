import { productMarks } from "@/lib/portfolio-content";

type ProductIconProps = {
  name: string;
};

export default function ProductIcon({ name }: ProductIconProps) {
  const mark = productMarks[name] ?? { label: name.slice(0, 2).toUpperCase() };
  const source = mark.src ?? (mark.slug ? `https://cdn.simpleicons.org/${mark.slug}/${mark.color ?? "F8FAFC"}` : undefined);

  return (
    <span className="product-icon" aria-hidden="true">
      <span>{mark.label}</span>
      {source ? <img src={source} alt="" onError={(event) => { event.currentTarget.style.display = "none"; }} /> : null}
    </span>
  );
}
