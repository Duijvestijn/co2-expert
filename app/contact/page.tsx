'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    companySize: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Nav />

      <main
        style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#f9fafb', minHeight: '100vh' }}
      >
        {/* Hero / split layout */}
        <section
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '80px 24px 64px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'flex-start',
          }}
        >
          {/* Left — copy */}
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#F5A623',
                marginBottom: 12,
              }}
            >
              Get started
            </p>
            <h1
              style={{
                fontSize: 42,
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#1A1A2E',
                marginBottom: 24,
              }}
            >
              Book your demo
            </h1>
            <p style={{ fontSize: 17, color: '#4B5563', lineHeight: 1.7, marginBottom: 36 }}>
              See exactly how co2.expert fits your organisation. Our team will walk you through the
              platform using your industry as context.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                '30-minute focused call — no fluff',
                'See your data in the platform live',
                'No commitment, no credit card',
              ].map((point) => (
                <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      backgroundColor: '#FEF3C7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6.5L4.5 9L10 3.5"
                        stroke="#F5A623"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span style={{ fontSize: 16, color: '#374151', lineHeight: 1.5 }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 16,
              padding: 40,
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    backgroundColor: '#FEF3C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#F5A623"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1A1A2E', marginBottom: 8 }}>
                  Request received!
                </h2>
                <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6 }}>
                  We&apos;ll reach out within one business day to schedule your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={labelStyle}>First name *</label>
                    <input
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Jan"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Last name *</label>
                    <input
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="de Vries"
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Company *</label>
                  <input
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Acme B.V."
                  />
                </div>

                <div>
                  <label style={labelStyle}>Work email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="jan@acme.nl"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Phone (optional)</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="+31 6 12345678"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Company size *</label>
                  <select
                    name="companySize"
                    required
                    value={form.companySize}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">Select size…</option>
                    <option value="1-10">1–10 employees</option>
                    <option value="11-50">11–50 employees</option>
                    <option value="51-250">51–250 employees</option>
                    <option value="250+">250+ employees</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message (optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
                    placeholder="Anything you'd like us to know before the call…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: '#F5A623',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: 16,
                    padding: '14px 28px',
                    borderRadius: 10,
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.75 : 1,
                    letterSpacing: '0.02em',
                    transition: 'opacity 0.2s',
                  }}
                >
                  {loading ? 'Sending…' : 'Request demo →'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Bottom nudge */}
        <div
          style={{
            borderTop: '1px solid #E5E7EB',
            padding: '28px 24px',
            textAlign: 'center',
            backgroundColor: '#ffffff',
          }}
        >
          <p style={{ fontSize: 15, color: '#6B7280' }}>
            Rather just start?{' '}
            <a
              href="https://app.co2.expert/login"
              style={{ color: '#F5A623', fontWeight: 600, textDecoration: 'none' }}
            >
              → app.co2.expert/login
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: '#374151',
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  fontSize: 15,
  borderRadius: 8,
  border: '1.5px solid #D1D5DB',
  outline: 'none',
  backgroundColor: '#F9FAFB',
  color: '#1A1A2E',
  fontFamily: "'Inter', sans-serif",
  boxSizing: 'border-box',
};
