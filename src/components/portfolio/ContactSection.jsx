import { useState } from 'react';

const InputField = ({ label, type = 'text', value, onChange, required, name }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative group">
      <label
        className={`font-mono text-xs tracking-widest transition-all duration-200 block mb-2`}
        style={{ color: focused ? 'var(--orange)' : 'var(--silver)' }}
      >
        {label}{required && ' *'}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className="w-full bg-transparent outline-none text-navy pb-3 font-sans text-base border-b-2 transition-all duration-200"
        style={{
          borderColor: focused ? 'var(--orange)' : 'rgba(15,15,30,0.3)',
          color: 'var(--navy)',
        }}
      />
    </div>
  );
};

const TextareaField = ({ label, value, onChange, required, name }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label
        className="font-mono text-xs tracking-widest transition-all duration-200 block mb-2"
        style={{ color: focused ? 'var(--orange)' : 'var(--silver)' }}
      >
        {label}{required && ' *'}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={5}
        className="w-full bg-transparent outline-none font-sans text-base border-b-2 transition-all duration-200 resize-none pb-3"
        style={{
          borderColor: focused ? 'var(--orange)' : 'rgba(15,15,30,0.3)',
          color: 'var(--navy)',
        }}
      />
    </div>
  );
};

// 🔑 Replace with your actual Web3Forms access key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Web3Forms error:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ backgroundColor: 'var(--bone)' }} className="py-24 px-8 lg:px-20 relative overflow-hidden">
      {/* Section number bg */}
      <span
        className="absolute right-8 top-1/2 -translate-y-1/2 font-black select-none hidden lg:block"
        style={{ fontSize: '12rem', lineHeight: 1, color: 'rgba(15,15,30,0.06)' }}
      >
        04
      </span>

      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <div className="flex items-start gap-6 mb-4">
          <span className="font-mono text-xs text-signal tracking-widest mt-2">04 //</span>
          <div>
            <p className="font-mono text-xs tracking-widest mb-2" style={{ color: 'var(--silver)' }}>DEPLOYMENT_TERMINAL</p>
            <h2 className="font-black uppercase leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--navy)', letterSpacing: '-0.02em' }}>
              CONTACT
            </h2>
          </div>
        </div>

        <p className="ml-14 mb-12 leading-relaxed" style={{ color: '#4A4A6A' }}>
          Ready to engineer something remarkable? Initialize a connection below and I'll respond within 24 hours.
        </p>

        {status === 'success' ? (
          <div
            className="border-2 p-12 text-center"
            style={{ borderColor: 'var(--orange)', backgroundColor: 'rgba(255,95,31,0.05)' }}
          >
            <p className="font-mono text-xs text-signal tracking-widest mb-4">TRANSMISSION_STATUS</p>
            <p className="font-black text-4xl uppercase mb-4" style={{ color: 'var(--navy)' }}>MESSAGE RECEIVED</p>
            <p className="font-mono text-sm text-silver">Expect a response within 24 hours. Standby.</p>
            <button
              onClick={() => setStatus('idle')}
              className="font-mono text-xs mt-8 tracking-widest px-6 py-3 border-2 chunky-hover-dark"
              style={{ borderColor: 'var(--navy)', color: 'var(--navy)' }}
            >
              NEW_TRANSMISSION
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Honeypot field — hidden from humans, catches bots */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField
                label="NAME"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <InputField
                label="EMAIL"
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <InputField
              label="SUBJECT"
              name="subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            <TextareaField
              label="MESSAGE"
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />

            {/* Error state */}
            {status === 'error' && (
              <div
                className="border px-4 py-3 font-mono text-xs tracking-widest"
                style={{ borderColor: '#e53e3e', color: '#e53e3e', backgroundColor: 'rgba(229,62,62,0.05)' }}
              >
                TRANSMISSION_FAILED — Please try again or contact directly via email.
              </div>
            )}

            {/* Submit button */}
            <div className="pt-6">
              {status === 'sending' && (
                <div className="mb-4">
                  <p className="font-mono text-xs text-silver tracking-widest mb-2">TRANSMITTING...</p>
                  <div className="h-1 w-full overflow-hidden" style={{ backgroundColor: 'rgba(15,15,30,0.15)' }}>
                    <div className="h-full progress-animate" style={{ backgroundColor: 'var(--orange)' }} />
                  </div>
                </div>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-6 font-black text-xl uppercase tracking-widest transition-all duration-100 border-2"
                style={{
                  backgroundColor: 'var(--navy)',
                  color: 'var(--bone)',
                  borderColor: 'var(--navy)',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (status !== 'sending') {
                    e.currentTarget.style.boxShadow = '6px 6px 0px var(--orange)';
                    e.currentTarget.style.transform = 'translate(-3px, -3px)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translate(0,0)';
                }}
              >
                {status === 'sending' ? 'TRANSMITTING...' : '[ DEPLOY_MESSAGE ]'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}