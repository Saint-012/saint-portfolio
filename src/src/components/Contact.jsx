import './Contact.css'

function Contact() {
  return (
    <section id="contact">
      <div className="sec-label">Contact</div>
      <p className="about-text" style={{ marginBottom: '1.5rem' }}>
        Got a project, idea, or collab? Let's build something together.
      </p>
      <div className="contact-btns">
        <a className="cbtn" href="mailto:emmanueldaviddm@gmail.com">
          <i className="ti ti-mail" aria-hidden="true"></i> Email
        </a>
        <a className="cbtn" href="https://github.com/Saint-012" target="_blank" rel="noopener noreferrer">
          <i className="ti ti-brand-github" aria-hidden="true"></i> GitHub
        </a>
        <a className="cbtn" href="https://wa.me/2348061772398" target="_blank" rel="noopener noreferrer">
          <i className="ti ti-brand-whatsapp" aria-hidden="true"></i> WhatsApp
        </a>
        <a className="cbtn" href="https://t.me/+2348061772398" target="_blank" rel="noopener noreferrer">
          <i className="ti ti-brand-telegram" aria-hidden="true"></i> Telegram
        </a>
      </div>
      <div className="response-note">
        <i className="ti ti-clock" aria-hidden="true"></i>&nbsp; Typical response time: 24–48 hours
      </div>
      <div className="cta-box">
        <h2>Open to freelance work</h2>
        <p>Building cool things with good people — reach out and let's talk scope.</p>
        <a className="hire-btn" href="mailto:emmanueldaviddm@gmail.com">
          <i className="ti ti-send" aria-hidden="true"></i> Hire Me
        </a>
      </div>
    </section>
  )
}

export default Contact
