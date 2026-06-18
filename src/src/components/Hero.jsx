import './Hero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-scan"></div>
      <div className="hero-name">
       <span className="g">Saint</span><span className="cursor"></span>
      </div>
      <div className="hero-sub">
        I turn ideas into shipped products — bots, apps, games, tools.
      </div>
      <div className="hero-tags">
        <span className="tag t1">Full Stack Dev</span>
        <span className="tag t2">Game Dev</span>
        <span className="tag t3">App Builder</span>
        <span className="tag t4">Freelancer</span>
        <span className="tag t1">Tool Maker</span>
      </div>
    </div>
  )
}

export default Hero
