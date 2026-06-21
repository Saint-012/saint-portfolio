import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    cls: 'pc1',
    accent: 'purple',
    type: 'Automation · Bot',
    title: 'Attendance Bot',
    status: 'live',
    statusLabel: 'Shipped',
    desc: 'An automated bot that tracks and manages attendance — cuts out manual work entirely.',
    impact: 'Eliminated 100% of manual tracking. Saves hours every week for any team.',
    tech: ['Python', 'Automation', 'Bot'],
    link: { icon: 'ti-lock', label: 'Private repo' },
    detail: {
      problem: 'Manual attendance tracking is slow, error-prone, and eats up time that could go into actual work. For any team that meets regularly, doing it by hand means someone always has to own that thankless task — and the data is usually scattered or lost.',
      solution: 'Built a Python-based bot that automates the entire attendance workflow — logging presence, storing records, and generating reports without any manual input. Connects directly to wherever the team already communicates, so there\'s zero friction to adoption.',
      challenges: 'The main challenge was making the bot resilient enough to handle edge cases — late joins, connection drops, users on different platforms — without requiring constant babysitting. Also had to design the data structure so records stayed clean and queryable over time.',
      outcome: 'Eliminated 100% of manual tracking for the target workflow. Saves multiple hours per week for any team that adopts it. Zero missed records since deployment.',
    },
  },
  {
    cls: 'pc4',
    accent: 'purple',
    type: 'AI · Tool',
    title: 'AI Caption Generator',
    image: '/caption.png',
    status: 'live',
    statusLabel: 'Live',
    desc: 'An AI-powered tool that generates ready-to-post captions for social media — built for creators and small businesses who need quick, on-brand content.',
    impact: 'Turns a topic and platform into multiple caption options in seconds, powered by AI.',
    tech: ['AI', 'React', 'API'],
    link: { icon: 'ti-external-link', label: 'View live', url: 'https://ai-caption-rho.vercel.app/' },
    detail: {
      problem: 'Content creators and small businesses spend disproportionate time writing captions — a task that\'s repetitive, low-skill, and drains creative energy that should go into the actual content.',
      solution: 'Built an AI-powered caption generator that takes a topic, tone, and platform as input and returns multiple ready-to-post caption options in seconds. No prompt engineering needed from the user — the interface handles it.',
      challenges: 'The main design challenge was making the output actually usable — not generic AI filler. Spent time on the prompt architecture to get captions that felt like they had personality and matched the platform\'s native voice.',
      outcome: 'Live and publicly accessible. Generates on-brand social captions in seconds. Demonstrates practical AI integration in a real product — not just a demo.',
    },
  },
  {
    cls: 'pc5',
    accent: 'green',
    type: 'AI · Tool',
    title: 'Prism',
    image: '/prism2.png',
    status: 'live',
    statusLabel: 'Live',
    desc: 'Paste any text — articles, notes, documents, reviews — and get back a clean summary, key points, or organized themes. Powered by AI.',
    impact: 'Turns dense, unstructured text into clear insights in seconds.',
    tech: ['AI', 'React', 'Groq'],
    link: { icon: 'ti-external-link', label: 'View live', url: 'https://prism-ten-swart.vercel.app/' },
    detail: {
      problem: 'Reading through long articles, meeting notes, or research documents takes time — and most people only need the core ideas, not every word. There was no simple, focused tool for turning raw text into structured insights quickly.',
      solution: 'Built Prism — a focused AI text organizer that lets users paste any content and choose exactly what they want back: a concise summary, a numbered list of key points, or grouped themes and insights. The prompt logic is handled behind the scenes so the user just gets clean results.',
      challenges: 'The main challenge was crafting prompts that produced consistently structured, useful output across wildly different types of input — short tweets vs long research papers. Also handled API errors, empty states, and loading feedback to make the experience feel solid.',
      outcome: 'Live and publicly accessible. Handles any text input and returns AI-generated summaries, key points, or themes in seconds. Demonstrates practical prompt engineering and clean AI product design.',
    },
  },
  {
    cls: 'pc6',
    accent: 'teal',
    type: 'AI · Bot',
    title: 'SmartBook Assistant',
    image: '/smartbook.png',
    status: 'live',
    statusLabel: 'Live',
    desc: 'An AI-powered Telegram bot that handles FAQs and bookings for small businesses — customers get instant answers and can book appointments without any human needed.',
    impact: 'Fully automated customer interactions — FAQs answered and bookings confirmed 24/7.',
    tech: ['Node.js', 'Telegram', 'Groq', 'AI'],
    link: { icon: 'ti-external-link', label: 'Try the bot', url: 'https://t.me/smartbook_assistant_bot' },
    detail: {
      problem: 'Small businesses lose customers to slow response times — most can\'t afford to have someone answering repetitive questions and booking requests around the clock. WhatsApp and DMs pile up, and customers don\'t wait.',
      solution: 'Built a Telegram bot that acts as a 24/7 AI-powered front desk. It answers common customer questions using an AI model trained on the business\'s info — hours, location, services, pricing — and walks customers through a full booking flow, collecting name, date, and service before confirming the appointment.',
      challenges: 'The main challenge was making the bot context-aware enough to handle both free-form FAQ questions and a structured multi-step booking flow in the same conversation — switching cleanly between the two without confusing the user.',
      outcome: 'Fully functional and deployed live. Any small business can be onboarded by editing a single config block. Demonstrates practical AI integration, conversational UX design, and backend deployment on a zero-cost stack.',
    },
  },
  {
    cls: 'pc7',
    accent: 'pink',
    type: 'AI · Bot',
    title: 'S.A.R. Bot',
    image: '/sar.png',
    status: 'live',
    statusLabel: 'Live',
    desc: 'An AI-powered auto-reply bot that responds to Telegram DMs with a custom persona — sassy, smart, and unbothered. Powered by Groq.',
    impact: 'Fully automated AI replies 24/7 — no human needed, no message left on read.',
    tech: ['Node.js', 'Telegram', 'Groq', 'AI'],
    link: { icon: 'ti-external-link', label: 'Try the bot', url: 'https://t.me/SaintAutoReplyBot_bot' },
    detail: {
      problem: 'Managing DMs and comments at scale is exhausting — especially for creators and small brands. Every unanswered message is a missed connection, but nobody has time to be online 24/7.',
      solution: 'Built S.A.R. (Saint Auto Reply) Bot — a Telegram bot powered by Groq AI that automatically reads incoming messages and fires back with a smart, on-brand response. The bot runs a fully customizable persona, so it replies exactly how you want it to.',
      challenges: 'The main challenge was making AI replies feel human and natural — not robotic or generic. Spent time crafting a persona prompt that gave the bot a real personality: confident, nonchalant, a little sassy. Also handled deployment on a zero-cost stack that keeps the bot alive 24/7.',
      outcome: 'Live and running on Render. Replies to any DM instantly with AI-generated responses. Fully customizable persona — any brand or creator can swap in their own voice in minutes.',
    },
  },
  {
    cls: 'pc2',
    accent: 'green',
    type: 'Web · Platform',
    title: 'Social Betting Platform',
    status: 'wip',
    statusLabel: 'Built, not yet deployed',
    desc: 'A social-first platform where users engage, compete, and interact around predictions in real time. Built solo using AI-assisted development.',
    impact: 'Full prediction platform built end-to-end — frontend, backend, and social features. Deployment pending.',
    tech: ['Fullstack', 'Social', 'Web'],
    link: { icon: 'ti-lock', label: 'Private repo' },
    detail: {
      problem: 'Prediction and betting platforms are either purely transactional or completely isolated — you win or lose alone, with no real social layer. There was a gap for something that combined competitive prediction with actual community interaction.',
      solution: 'Built a full-stack social prediction platform from scratch. Users can create and join prediction events, see what others are betting on in real time, and interact around outcomes. The social layer is first-class — not bolted on.',
      challenges: 'Real-time state sync across users was the hardest part — making sure bets, updates, and outcomes were consistent for everyone simultaneously without race conditions. Also had to design a system that felt social without becoming chaotic.',
      outcome: 'A complete, functional social prediction platform built end-to-end with no template or starter kit. Demonstrates full-stack architecture, real-time systems, and product thinking from scratch.',
    },
  },
  {
    cls: 'pc3',
    accent: 'orange',
    type: 'App · Cybersecurity',
    title: 'Phantom',
    status: 'wip',
    statusLabel: 'In development',
    desc: 'Discover what you\'ve left behind online. Phantom scans public sources to reveal your exposed digital footprint — breach records, leaked data, and online exposure — so you understand your privacy risk before someone else exploits it.',
    impact: 'Real OSINT-powered privacy awareness tool. Currently in active development.',
    tech: ['Next.js', 'Supabase', 'OSINT'],
    link: { icon: 'ti-clock', label: 'Coming soon' },
    detail: {
      problem: 'Most people have no idea how much of their personal data is publicly accessible. Email addresses, passwords, usernames, and other sensitive details get leaked in breaches constantly — and most users never find out until it\'s too late.',
      solution: 'Phantom is an OSINT-powered digital footprint scanner. Enter an email, and it queries real public data sources — including breach databases — to show what\'s exposed about you and where. The goal is awareness: understand your exposure before someone else exploits it.',
      challenges: 'Aggregating data from multiple OSINT sources while keeping the experience clean and non-overwhelming is the core design challenge. Also handling auth, scan history persistence, and PDF report generation without compromising user data in the process.',
      outcome: 'Currently in active development. 8 core pages complete. Supabase auth and breach API integration in progress. Targeting a public launch with real scan results, persisted history, and PDF reports.',
    },
  },
]

const accentMap = {
  purple: {
    type: 'rgba(120,80,255,0.8)',
    pill: { bg: 'rgba(120,80,255,0.1)', border: 'rgba(120,80,255,0.3)', color: 'rgba(120,80,255,0.85)' },
    highlight: { bg: 'rgba(120,80,255,0.08)', border: 'rgba(120,80,255,0.2)', color: 'rgba(120,80,255,0.8)' },
    label: 'rgba(120,80,255,0.35)',
  },
  green: {
    type: 'rgba(0,180,120,0.8)',
    pill: { bg: 'rgba(0,180,120,0.09)', border: 'rgba(0,180,120,0.25)', color: 'rgba(0,180,120,0.85)' },
    highlight: { bg: 'rgba(0,180,120,0.07)', border: 'rgba(0,180,120,0.18)', color: 'rgba(0,180,120,0.8)' },
    label: 'rgba(0,180,120,0.35)',
  },
  orange: {
    type: 'rgba(255,120,50,0.8)',
    pill: { bg: 'rgba(255,120,50,0.09)', border: 'rgba(255,120,50,0.25)', color: 'rgba(255,120,50,0.85)' },
    highlight: { bg: 'rgba(255,120,50,0.07)', border: 'rgba(255,120,50,0.18)', color: 'rgba(255,120,50,0.8)' },
    label: 'rgba(255,120,50,0.35)',
  },
  teal: {
    type: 'rgba(0,220,180,0.8)',
    pill: { bg: 'rgba(0,220,180,0.09)', border: 'rgba(0,220,180,0.25)', color: 'rgba(0,220,180,0.85)' },
    highlight: { bg: 'rgba(0,220,180,0.07)', border: 'rgba(0,220,180,0.18)', color: 'rgba(0,220,180,0.8)' },
    label: 'rgba(0,220,180,0.35)',
  },
  pink: {
    type: 'rgba(255,80,180,0.8)',
    pill: { bg: 'rgba(255,80,180,0.09)', border: 'rgba(255,80,180,0.25)', color: 'rgba(255,80,180,0.85)' },
    highlight: { bg: 'rgba(255,80,180,0.07)', border: 'rgba(255,80,180,0.18)', color: 'rgba(255,80,180,0.8)' },
    label: 'rgba(255,80,180,0.35)',
  },
}

function ProjectModal({ project, onClose }) {
  if (!project) return null
  const a = accentMap[project.accent]
  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕ Close</button>
        <div className="modal-header">
          <div className="modal-type" style={{ color: a.type }}>{project.type}</div>
          <div className="modal-title">{project.title}</div>
          <div className="pstatus" style={{ marginTop: '6px' }}>
            <span className={`dot ${project.status}`}></span> {project.statusLabel}
          </div>
        </div>
        <div className="modal-body">
          {[
            { label: 'Problem', text: project.detail.problem },
            { label: 'Solution', text: project.detail.solution },
            { label: 'Challenges', text: project.detail.challenges },
          ].map(({ label, text }) => (
            <div className="modal-section" key={label}>
              <div className="modal-section-label" style={{ color: a.label }}>{label}</div>
              <p className="modal-section-text">{text}</p>
            </div>
          ))}
          <div className="modal-section">
            <div className="modal-section-label" style={{ color: a.label }}>Stack</div>
            <div className="tech-row">
              {project.tech.map(t => (
                <span key={t} className="tech-pill" style={{ background: a.pill.bg, border: `0.5px solid ${a.pill.border}`, color: a.pill.color }}>{t}</span>
              ))}
            </div>
          </div>
          <div className="modal-section">
            <div className="modal-section-label" style={{ color: a.label }}>Outcome</div>
            <div className="modal-highlight" style={{ background: a.highlight.bg, border: `0.5px solid ${a.highlight.border}`, color: a.highlight.color }}>
              {project.detail.outcome}
            </div>
          </div>
          <div className="modal-section">
            <div className="modal-section-label" style={{ color: a.label }}>Links</div>
            <div className="project-links">
              {project.link.url ? (
                <a className="plink" href={project.link.url} target="_blank" rel="noopener noreferrer">
                  <i className={`ti ${project.link.icon}`} aria-hidden="true"></i> {project.link.label}
                </a>
              ) : (
                <span className="plink"><i className={`ti ${project.link.icon}`} aria-hidden="true"></i> {project.link.label}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [active, setActive] = useState(null)

  return (
    <>
      <section id="projects">
        <div className="sec-label">Projects</div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className={`project-card ${p.cls}`} key={p.title} onClick={() => setActive(p)} style={{ cursor: 'pointer' }}>
              <div className="pc-glow"></div>
              {p.image && (
                <div className="pc-image-wrap">
                  <img src={p.image} alt={p.title} className="pc-image" />
                </div>
              )}
              <div className="ptype">{p.type}</div>
              <h3>{p.title}</h3>
              <div className="pstatus">
                <span className={`dot ${p.status}`}></span> {p.statusLabel}
              </div>
              <p>{p.desc}</p>
              <div className="impact">{p.impact}</div>
              <div className="tech-row">
                {p.tech.map((t) => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
              </div>
              <div className="view-hint">
                <i className="ti ti-arrow-right" style={{ fontSize: '11px' }}></i> View details
              </div>
            </div>
          ))}
        </div>
      </section>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </>
  )
}

export default Projects