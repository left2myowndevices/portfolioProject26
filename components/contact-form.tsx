"use client";

import { type FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const fieldClassName =
  "w-full rounded-xl border border-[var(--field-border)] bg-[var(--surface-alt)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors duration-150 placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)]";

function readField(formData: FormData, field: string) {
  return String(formData.get(field) ?? "").trim();
}

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: readField(formData, "name"),
          email: readField(formData, "email"),
          company: readField(formData, "company"),
          role: readField(formData, "role"),
          details: readField(formData, "details"),
        }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message ?? "Unable to send your message.");
      }

      form.reset();
      setState("success");
      setMessage("Thanks, your message was sent. I’ll follow up soon.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your message.");
    }
  }

  return (
    <form className="space-y-7" onSubmit={onSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-3">
          <span className="text-sm text-[var(--text-secondary)]">Name</span>
          <input
            className={fieldClassName}
            name="name"
            type="text"
            required
            placeholder="Your name"
          />
        </label>

        <label className="space-y-3">
          <span className="text-sm text-[var(--text-secondary)]">Email</span>
          <input
            className={fieldClassName}
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-3">
          <span className="text-sm text-[var(--text-secondary)]">Company</span>
          <input className={fieldClassName} name="company" type="text" placeholder="Company" />
        </label>

        <label className="space-y-3">
          <span className="text-sm text-[var(--text-secondary)]">Role</span>
          <input className={fieldClassName} name="role" type="text" placeholder="Role title" />
        </label>
      </div>

      <label className="space-y-3">
        <span className="text-sm text-[var(--text-secondary)]">Message</span>
        <textarea
          className={fieldClassName}
          name="details"
          required
          rows={5}
          placeholder="Share the role, team, and timeline."
        />
      </label>

      <div className="flex flex-wrap gap-4 pt-5">
        <button className="cta-submit" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>

      {message ? (
        <p className={`text-sm ${state === "error" ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"}`} role={state === "error" ? "alert" : "status"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
