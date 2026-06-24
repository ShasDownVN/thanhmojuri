import { FormEvent, useState } from 'react'
import { api } from '../services/api'

const emptyForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState('')

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('')

    try {
      await api.sendContact(form)
      setForm(emptyForm)
      setMessage('Thanks, your message has been sent.')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Cannot send message')
    }
  }

  return (
    <main className="site-main">
      <section className="page-title">
        <div className="section-container">
          <h1 className="text-title-heading">Contact Us</h1>
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span className="delimiter"></span>Contact
          </div>
        </div>
      </section>

      <section className="section section-padding">
        <div className="section-container">
          <div className="block block-contact-info">
            <div className="info-title">
              <h2>Need Help?</h2>
            </div>
            <div className="info-items row">
              <div className="col-md-4">
                <h2>Phone</h2>
                <p>810.222.5439</p>
              </div>
              <div className="col-md-4">
                <h2>Customer Service</h2>
                <p>Monday to Friday, 8:00am - 4:00pm</p>
              </div>
              <div className="col-md-4">
                <h2>Returns</h2>
                <p>Our team will reply within two business days.</p>
              </div>
            </div>
          </div>

          <div className="block block-contact-form dynamic-section">
            <div className="block-title">
              <h2>Send Us Your Questions!</h2>
              <div className="sub-title">We will get back to you within two days.</div>
            </div>
            <form className="contact-us-form dynamic-form" onSubmit={submitContact}>
              <input required placeholder="Name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
              <input required placeholder="Email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
              <input required placeholder="Subject" value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} />
              <textarea required placeholder="Message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
              <button className="button" type="submit">Submit</button>
              {message && <p className="admin-message">{message}</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
