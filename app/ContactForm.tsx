"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (String(form.get("company_site") ?? "")) {
      setStatus("Thanks. Your message has been prepared.");
      return;
    }
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || message.length < 15) {
      setStatus("Please add your name, a valid email and at least 15 characters.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    setStatus("Opening your email application—please review before sending.");
    window.location.href = `mailto:K.Eswar7045@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-head"><span>MESSAGE CONSOLE</span><small>No information is stored by this website.</small></div>
      <div className="form-grid">
        <label><span>Name</span><input name="name" autoComplete="name" required minLength={2} placeholder="Your name" /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
      </div>
      <label className="honeypot" aria-hidden="true">Website<input name="company_site" tabIndex={-1} autoComplete="off" /></label>
      <label><span>Message</span><textarea name="message" required minLength={15} rows={4} placeholder="Role, project or question…" /></label>
      <div className="form-submit"><button className="button primary" type="submit">Prepare email</button><p role="status">{status}</p></div>
    </form>
  );
}
