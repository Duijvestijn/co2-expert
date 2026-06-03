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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  function fieldStyle(name: string): React.CSSProperties {
    return {
      width: '100%',
      padding: '10px 14px',
      fontSize: 15,
      borderRadius: 8,
      border: `1.5px solid ${focusedField === name ? '#F5A623' : '#E5E7EB'}`,
      outline: 'none',
      backgroundColor: '#FFFFFF',
      color: '#1A1A2E',
      fontFamily: "'Inter', sans-serif",
      boxSizing: 'border-box',
      boxShadow: focusedField === name ? '0 0 0 3px rgba(245,166,35,0.12)' : 'none',
      transition: 'border-color 0.15s, box-shadow 0.15s',
    };
  }

  return (
    <>
      <Nav />

      <main style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#FFFFFF', minHeight: '100vh' }}>

        {/* Hero / split layout */}
        <section
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '96px 24px 80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 64,
            alignItems: 'flex-start',
          }}
        >
          {/* Left — copy */}
          <div>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: '#FFF7ED',
                border: '1px solid #FED7AA',
                borderRadius: 50,
                padding: '4px 14px',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#F5A623',
                marginBottom: 20,
              }}
            >
              Get started
            </span>
            <h1
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#1A1A2E',
                marginBottom: 20,
                letterSpacing: '-0.025em',
              }}
            >
              Find out what your carbon footprint looks like
            </h1>
            <p style={{ fontSize: 17, color: '#6B7280', lineHeight: 1.75, marginBottom: 36 }}>
              In 30 minutes, we show you exactly what your Scope 1, 2 and 3 footprint looks like
              — based on your own company data. No commitment. Just clarity.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'See your emissions broken down by Scope 1, 2 and 3',
                'Understand what your customers are actually asking for',
                'Get a clear timeline for your first verified report',
              ].map((point) => (
                <li key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: '#FFF7ED',
                      border: '1px solid #FED7AA',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 1,
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
                  <span style={{ fontSize: 16, color: '#374151', lineHeight: 1.55 }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              padding: '40px 36px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 32px rgba(0,0,0,0.06)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: '#FFF7ED',
                    border: '1px solid #FED7AA',
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
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      style={fieldStyle('firstName')}
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
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                      style={fieldStyle('lastName')}
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
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    style={fieldStyle('company')}
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
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    style={fieldStyle('email')}
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
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    style={fieldStyle('phone')}
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
                    onFocus={() => setFocusedField('companySize')}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...fieldStyle('companySize'), cursor: 'pointer' }}
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
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={3}
                    style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: 80 }}
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
                    transition: 'opacity 0.2s, transform 0.1s',
                    width: '100%',
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
            backgroundColor: '#FFFBF5',
          }}
        >
          <p style={{ fontSize: 15, color: '#6B7280' }}>
            Rather just try it?{' '}
            <a
              href="https://app.co2.expert"
              style={{ color: '#F5A623', fontWeight: 600, textDecoration: 'none' }}
            >
              Start free at app.co2.expert
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
  color: '#1A1A2E',
  marginBottom: 6,
};
