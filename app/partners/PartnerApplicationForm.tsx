'use client'

import { useState, FormEvent } from 'react'

const firmTypes = [
  { value: 'accounting-firm', label: 'Accounting firm' },
  { value: 'financial-advisor', label: 'Financial advisor' },
  { value: 'sustainability-consultant', label: 'Sustainability consultant' },
  { value: 'other', label: 'Other' },
]

const clientRanges = [
  { value: '1-10', label: '1–10 clients' },
  { value: '11-50', label: '11–50 clients' },
  { value: '51-200', label: '51–200 clients' },
  { value: '200+', label: '200+ clients' },
]

export default function PartnerApplicationForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      firmType: (form.elements.namedItem('firmType') as HTMLSelectElement).value,
      numberOfClients: (form.elements.namedItem('numberOfClients') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/partner-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? 'Submission failed.')
      }

      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{ background: '#F9F9FB', border: '2px solid #F5A623' }}
      >
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A1A2E' }}>
          Application received!
        </h3>
        <p className="text-gray-600">
          Thank you for applying. We'll review your application and get back to
          you within 2 business days.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent transition'
  const focusStyle = { '--tw-ring-color': '#F5A623' } as React.CSSProperties

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-semibold mb-1.5"
          style={{ color: '#1A1A2E' }}
        >
          Company name <span style={{ color: '#F5A623' }}>*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          placeholder="Acme Accountants B.V."
          className={inputClass}
          style={focusStyle}
        />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold mb-1.5"
          style={{ color: '#1A1A2E' }}
        >
          Your name <span style={{ color: '#F5A623' }}>*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jan de Vries"
          className={inputClass}
          style={focusStyle}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold mb-1.5"
          style={{ color: '#1A1A2E' }}
        >
          Work email <span style={{ color: '#F5A623' }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jan@acme.nl"
          className={inputClass}
          style={focusStyle}
        />
      </div>

      {/* Firm type */}
      <div>
        <label
          htmlFor="firmType"
          className="block text-sm font-semibold mb-1.5"
          style={{ color: '#1A1A2E' }}
        >
          Firm type <span style={{ color: '#F5A623' }}>*</span>
        </label>
        <select
          id="firmType"
          name="firmType"
          required
          className={inputClass}
          style={focusStyle}
        >
          <option value="">Select firm type…</option>
          {firmTypes.map((ft) => (
            <option key={ft.value} value={ft.value}>
              {ft.label}
            </option>
          ))}
        </select>
      </div>

      {/* Number of clients */}
      <div>
        <label
          htmlFor="numberOfClients"
          className="block text-sm font-semibold mb-1.5"
          style={{ color: '#1A1A2E' }}
        >
          Number of clients
        </label>
        <select
          id="numberOfClients"
          name="numberOfClients"
          className={inputClass}
          style={focusStyle}
        >
          <option value="">Select range…</option>
          {clientRanges.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold mb-1.5"
          style={{ color: '#1A1A2E' }}
        >
          Anything else you'd like us to know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your practice and how you see co2.expert fitting in…"
          className={inputClass}
          style={focusStyle}
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ background: '#F5A623' }}
      >
        {status === 'loading' ? 'Sending…' : 'Submit application'}
      </button>
    </form>
  )
}
