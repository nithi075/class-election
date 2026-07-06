import { Link } from 'react-router-dom'
import './Home.css'

const features = [
  {
    title: 'One student, one vote',
    desc: 'Each roll number is checked against the election roll so nobody can cast a second ballot.',
    icon: '☑',
  },
  {
    title: 'Live tally, not a guess',
    desc: 'Vote counts update the moment a ballot is confirmed — no waiting for a manual count.',
    icon: '≣',
  },
  {
    title: 'Manifestos, not just names',
    desc: 'Every candidate card carries a short manifesto, so votes are cast on substance.',
    icon: '✎',
  },
  {
    title: 'Built for every device',
    desc: 'Vote from a hostel laptop or a phone between lectures — the ballot looks the same.',
    icon: '▤',
  },
]

const security = [
  { label: 'Single-vote lock', detail: 'A submitted ballot is locked immediately and cannot be recast.' },
  { label: 'Session-based access', detail: 'Only signed-in students and admins can reach election pages.' },
  { label: 'Transparent results', detail: 'Final tallies are published with rank and vote share for every seat.' },
]

const steps = [
  { n: '01', title: 'Register', text: 'Create a student account with your roll number and department.' },
  { n: '02', title: 'Review candidates', text: 'Read manifestos and compare candidates by position.' },
  { n: '03', title: 'Cast your ballot', text: 'Pick one candidate per seat and confirm your vote.' },
  { n: '04', title: 'See the result', text: 'Once voting closes, the winner and full ranking are published.' },
]

function Home() {
  return (
    <div className="home">
      <section className="hero paper-texture">
        <div className="container hero-inner">
          <div className="hero-copy rise-in">
            <span className="eyebrow">Classroom Election Portal</span>
            <h1 className="hero-title">
              Online Voting <br />
              <span className="hero-title-accent">System</span>
            </h1>
            <p className="hero-sub">
              A digital ballot box for your classroom — register, review candidates, vote once,
              and watch the results come in, all from one portal.
            </p>
            <div className="hero-actions">
              <Link to="/login" className="btn btn-primary">
                Login to vote
              </Link>
              <Link to="/register" className="btn btn-outline">
                Register as student
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <p className="hero-stat-value">612</p>
                <p className="hero-stat-label">Registered students</p>
              </div>
              <div>
                <p className="hero-stat-value">2</p>
                <p className="hero-stat-label">Elections running</p>
              </div>
              <div>
                <p className="hero-stat-value">134</p>
                <p className="hero-stat-label">Votes cast today</p>
              </div>
            </div>
          </div>

          <div className="hero-visual rise-in">
            <div className="ballot-slip ballot-stub">
              <p className="ballot-slip-heading">Official Ballot</p>
              <p className="ballot-slip-position">Class Representative</p>
              <ul className="ballot-slip-list">
                <li>
                  <span className="ballot-radio checked"></span> Arjun Mehta
                </li>
                <li>
                  <span className="ballot-radio"></span> Priya Nair
                </li>
              </ul>
              <div className="ballot-slip-footer">
                <span>Vote receipt</span>
                <span>#EV-20260706</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <span className="eyebrow">About the system</span>
          <h2 className="section-title">A ballot box that fits inside your browser</h2>
          <p className="section-lead">
            Smart Classroom E-Voting replaces the paper ballot box and manual tally sheet with a
            simple portal every student already knows how to use. Elections are set up by class
            admins, candidates publish their manifestos, and students vote in a couple of clicks —
            with a result page that shows exactly how every seat was decided.
          </p>
        </div>
      </section>

      <section className="section section-muted" id="features">
        <div className="container">
          <span className="eyebrow">Why it works</span>
          <h2 className="section-title">Built around how a classroom actually votes</h2>
          <div className="feature-grid">
            {features.map((f) => (
              <div className="feature-card ballot-stub" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="security">
        <div className="container">
          <div className="security-layout">
            <div>
              <span className="eyebrow">Security highlights</span>
              <h2 className="section-title">No re-votes. No guesswork.</h2>
              <p className="section-lead">
                Every ballot in the system follows the same three guarantees, so results can be
                trusted the moment they're published.
              </p>
            </div>
            <ul className="security-list">
              {security.map((s) => (
                <li key={s.label} className="security-item">
                  <span className="security-check">✓</span>
                  <div>
                    <p className="security-label">{s.label}</p>
                    <p className="security-detail">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="how-it-works">
        <div className="container">
          <span className="eyebrow">How voting works</span>
          <h2 className="section-title">From registration to result, in four steps</h2>
          <div className="steps-grid">
            {steps.map((s) => (
              <div className="step-card" key={s.n}>
                <p className="step-number">{s.n}</p>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-inner">
          <div>
            <h2 className="cta-title">Your classroom's election is waiting</h2>
            <p className="cta-sub">Register once, vote in every election held for your department.</p>
          </div>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-gold">
              Create student account
            </Link>
            <Link to="/login" className="btn btn-outline-light">
              I already have an account
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
