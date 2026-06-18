import './Skills.css'

const skills = [
  { icon: 'ti-code', title: 'Software Engineering', desc: 'Clean, scalable code across frontend & backend stacks', cls: 'sk1' },
  { icon: 'ti-device-gamepad-2', title: 'Game Development', desc: 'Interactive games with compelling mechanics & design', cls: 'sk2' },
  { icon: 'ti-apps', title: 'App Development', desc: 'Web & mobile apps built for real-world problems', cls: 'sk3' },
  { icon: 'ti-robot', title: 'Bots & Automation', desc: 'Smart bots and scripts that do the heavy lifting', cls: 'sk4' },
  { icon: 'ti-bolt', title: 'Vibe Coding', desc: 'Fast, creative, experimental — shipping things that spark', cls: 'sk5' },
  { icon: 'ti-briefcase', title: 'Freelancing', desc: 'End-to-end delivery from brief to shipped product', cls: 'sk6' },
]

function Skills() {
  return (
    <section id="skills">
      <div className="sec-label">Skills</div>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className={`skill-card ${s.cls}`} key={s.title}>
            <i className={`ti ${s.icon}`} aria-hidden="true"></i>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
