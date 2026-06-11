import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from './icons'

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.2, 0.8, 0.2, 1] },
  },
}

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  
 async function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  setError(null)

  if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
    setError('Please fill in the required fields.')
    return
  }

  setLoading(true)

  try {
    await emailjs.send(
      'service_0056',
      'template_hehnkfl', // template id nu confirm pannu
      {
        name,
        email,
        company,
        subject,
        message,
      },
      '7xbEiMWsZo3hNm_PY'
    )

    setSuccess(true)
    setName('')
    setEmail('')
    setCompany('')
    setSubject('')
    setMessage('')
  } catch (err) {
    console.error(err)
    setError('Unable to send your message. Please try again later.')
  } finally {
    setLoading(false)
  }
}
  return (
    <section id="contact-section" className="bg-white px-6 py-20 lg:px-36 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-full lg:max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={variants}
          className="mb-10 text-center"
        >
          <span className="mt-4 mb-4 text-[32px] font-bold leading-none text-black">CONTACT US</span>
          <h2 className="mt-4 mb-4 text-[24px] font-bold leading-none text-black">Have a Question?
            Let's Talk.
          </h2>
          <p className="m-0 text-base text-black">
            Need help with WorkHub, pricing, features, onboarding, partnerships, or technical support?
            Send us a message and our team will get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={variants}
            className="order-2 lg:order-1"
          >
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex w-full flex-col">
                  <span className="mb-2 text-sm text-black/80">Full Name*</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-lg border border-gray-200 px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
                    placeholder="John Doe"
                    aria-label="Full name"
                  />
                </label>

                <label className="flex w-full flex-col">
                  <span className="mb-2 text-sm text-black/80">Email Address*</span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg border border-gray-200 px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
                    placeholder="you@company.com"
                    aria-label="Email address"
                  />
                </label>
              </div>

              <label className="flex w-full flex-col">
                <span className="mb-2 text-sm text-black/80">Company Name </span>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="rounded-lg border border-gray-200 px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
                  placeholder="WorkHub Inc."
                  aria-label="Company name"
                />
              </label>

              <label className="flex w-full flex-col">
                <span className="mb-2 text-sm text-black/80">Subject*</span>
                <input
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="rounded-lg border border-gray-200 px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
                  placeholder="How can we help?"
                  aria-label="Subject"
                />
              </label>

              <label className="flex w-full flex-col">
                <span className="mb-2 text-sm text-black/80">Message*</span>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="rounded-lg border border-gray-200 px-4 py-3 text-black placeholder-gray-400 focus:outline-none resize-none"
                  placeholder="Tell us more about your question or request"
                  aria-label="Message"
                />
              </label>

              {error && <div className="text-sm text-red-600">{error}</div>}

              <div className="pt-2">
  <button
    type="submit"
    disabled={loading}
    className="
      w-full
      rounded-full
      bg-black
      py-4
      text-lg
      font-medium
      text-white
      transition-all
      duration-300
      hover:bg-neutral-800
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
  >
    {loading ? 'Sending...' : 'Send Message'}
  </button>
</div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.9 } }}
            viewport={{ once: false, amount: 0.2 }}
            className="order-1 flex flex-col gap-6 lg:order-2"
          >
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 8l9 6 9-6" stroke="#000" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" stroke="#000" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-black/80">Email</div>
                  <a href="mailto:support@workhub.com" className="text-base text-black">getworkhub@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M22 16.92V21a1 1 0 01-1.11 1A19 19 0 013 4.11 1 1 0 014 3h4.09a1 1 0 01.95.68c.2.65.5 1.6.85 2.35a1 1 0 01-.24 1.05L9.91 8.91a12.11 12.11 0 005.15 5.15l1.83-1.83a1 1 0 011.05-.24c.75.35 1.7.65 2.35.85a1 1 0 01.68.95z" stroke="#000" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-black/80">Phone</div>
                  <div className="text-base text-black">+91 9074549901</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#000" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="9" r="2.2" stroke="#000" strokeWidth="1.1" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-black/80">Location</div>
                  <div className="text-base text-black">Kerala, India</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 flex items-center gap-4 rounded-lg border border-green-100 bg-green-50 p-4"
          >
            <CheckCircleIcon />
            <div>
              <div className="font-medium text-black">✓ Message Sent Successfully</div>
              <div className="text-sm text-black/70">Thank you for contacting WorkHub. Our team will respond shortly.</div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ContactSection
