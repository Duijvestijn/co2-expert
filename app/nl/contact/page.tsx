'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NLContactPage() {
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
      <Nav lang="nl" />

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
              Aan de slag
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
              Boek je demo
            </h1>
            <p style={{ fontSize: 17, color: '#4B5563', lineHeight: 1.7, marginBottom: 36 }}>
              Zie precies hoe co2.expert aansluit op jouw organisatie. Ons team loopt met je
              door het platform met jouw sector als context.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                '30 minuten gesprek — to the point',
                'Zie jouw data in het platform',
                'Geen verplichtingen, geen creditcard',
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
                  Bedankt!
                </h2>
                <p style={{ color: '#6B7280', fontSize: 15, lineHeight: 1.6 }}>
                  We nemen binnen één werkdag contact op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={labelStyle}>Voornaam *</label>
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
                    <label style={labelStyle}>Achternaam *</label>
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
                  <label style={labelStyle}>Bedrijfsnaam *</label>
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
                  <label style={labelStyle}>E-mailadres *</label>
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
                  <label style={labelStyle}>Telefoonnummer (optioneel)</label>
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
                  <label style={labelStyle}>Bedrijfsgrootte *</label>
                  <select
                    name="companySize"
                    required
                    value={form.companySize}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">Kies grootte…</option>
                    <option value="1-10">1–10 medewerkers</option>
                    <option value="11-50">11–50 medewerkers</option>
                    <option value="51-250">51–250 medewerkers</option>
                    <option value="250+">250+ medewerkers</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Bericht (optioneel)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
                    placeholder="Wat wil je ons alvast laten weten voor het gesprek…"
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
                  {loading ? 'Versturen…' : 'Demo aanvragen →'}
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
            Liever gelijk starten?{' '}
            <a
              href="https://app.co2.expert/login"
              style={{ color: '#F5A623', fontWeight: 600, textDecoration: 'none' }}
            >
              → app.co2.expert/login
            </a>
          </p>
        </div>
      </main>

      <Footer lang="nl" />
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
