"use client"

import type React from "react"
import { useState } from "react"
import { AlertCircle, Check, Send } from "lucide-react"
import { T, useLang } from "@/components/i18n"

const COPY = {
  fr: {
    name: "Nom et prénom",
    namePlaceholder: "Votre nom",
    email: "Email",
    emailPlaceholder: "vous@exemple.com",
    org: "Objet",
    orgPlaceholder: "Référencement, approvisionnement…",
    message: "Message",
    messagePlaceholder: "Décrivez votre demande",
  },
  en: {
    name: "Full name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    org: "Subject",
    orgPlaceholder: "Listing, supply…",
    message: "Message",
    messagePlaceholder: "Describe your request",
  },
} as const

export default function ContactForm() {
  const lang = useLang()
  const t = COPY[lang]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error("Request failed")

      setStatus("sent")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="card bg-white p-6 sm:p-8">
      <h3 className="font-sans text-[1.0625rem] font-semibold">
        <T fr="Écrire à l’équipe" en="Write to the team" />
      </h3>
      <p className="mt-1.5 text-[0.875rem] text-[var(--ink-faint)]">
        <T
          fr="Nous répondons sous un jour ouvré."
          en="We reply within one business day."
        />
      </p>

      {status === "sent" ? (
        <p
          role="status"
          className="mt-6 flex items-start gap-2.5 rounded-lg border px-4 py-3 text-[0.9375rem]"
          style={{
            background: "var(--brand-tint)",
            borderColor: "rgba(16,122,68,0.24)",
            color: "var(--brand-strong)",
          }}
        >
          <Check className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            <T
              fr="Message envoyé. Nous revenons vers vous rapidement."
              en="Message sent. We will get back to you shortly."
            />
          </span>
        </p>
      ) : null}

      {status === "error" ? (
        <p
          role="alert"
          className="mt-6 flex items-start gap-2.5 rounded-lg border border-[#f0c9c5] bg-[#fdf3f2] px-4 py-3 text-[0.9375rem] text-[#8f2b21]"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            <T
              fr="L’envoi a échoué. Écrivez-nous à sarl.handson@gmail.com ou réessayez."
              en="Sending failed. Email sarl.handson@gmail.com or try again."
            />
          </span>
        </p>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="field-label">
              {t.name}
            </label>
            <input
              id="name"
              name="name"
              className="field"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.namePlaceholder}
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="field-label">
              {t.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="field-label">
            {t.org}
          </label>
          <input
            id="subject"
            name="subject"
            className="field"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t.orgPlaceholder}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="field-label">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="field"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.messagePlaceholder}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <T fr="Envoi…" en="Sending…" />
          ) : (
            <>
              <Send className="h-4 w-4" />
              <T fr="Envoyer le message" en="Send message" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
