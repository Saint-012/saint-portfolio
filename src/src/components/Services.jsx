import './Services.css'

const services = [
  { icon: 'ti-layout', name: 'Full-Stack Web Apps' },
  { icon: 'ti-robot', name: 'Automation Systems & Bots' },
  { icon: 'ti-tools', name: 'Custom Software Tools' },
  { icon: 'ti-device-gamepad-2', name: 'Game Design & Development' },
]

function Services() {
  return (
    <section id="services">
      <div className="sec-label">Services</div>
      <div className="services-list">
        {services.map((s) => (
          <div className="svc-row" key={s.name}>
            <span className="svc-name"><i className={`ti ${s.icon}`} aria-hidden="true"></i> {s.name}</span>
            <span className="svc-badge">Available</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
