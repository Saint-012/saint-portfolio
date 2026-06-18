import './HowIBuild.css'

const steps = [
  { num: '01', title: 'Find a real problem', desc: "Not a tutorial. Something that actually needs solving — for me, a team, or a client." },
  { num: '02', title: 'Design the simplest version', desc: "One core job. No feature creep. Build what matters first." },
  { num: '03', title: 'Build fast, break things', desc: "Ship a working version before it's perfect. Something real beats something theoretical." },
  { num: '04', title: 'Iterate on feedback', desc: "Real usage reveals what the spec never will. Fix, refine, repeat." },
]

const interests = [
  { icon: 'ti-shield-lock', label: 'Cybersecurity & OSINT', cls: 'ii1' },
  { icon: 'ti-robot', label: 'AI Tools & Automation', cls: 'ii2' },
  { icon: 'ti-device-gamepad-2', label: 'Game Development', cls: 'ii3' },
  { icon: 'ti-code', label: 'Fullstack Web Apps', cls: 'ii4' },
  { icon: 'ti-bolt', label: 'Utility Software', cls: 'ii5' },
]

function HowIBuild() {
  return (
    <section id="build">
      <div className="sec-label">How I Build</div>
      <div className="build-grid">
        <div>
          <p className="build-intro">My process isn't academic. It's shaped by working on real problems fast — figuring things out as I go and shipping before I overthink.</p>
          <div className="build-steps">
            {steps.map(s => (
              <div className="build-step" key={s.num}>
                <span className="step-num">{s.num}</span>
                <div>
                  <h4 className="step-title">{s.title}</h4>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="interests-label">Current Interests</p>
          <div className="interests-grid">
            {interests.map(i => (
              <div className={`interest-item ${i.cls}`} key={i.label}>
                <i className={`ti ${i.icon}`}></i>
                <span>{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowIBuild
