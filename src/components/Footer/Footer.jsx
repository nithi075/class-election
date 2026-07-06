import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 12l2.5 2.5L16 9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <p className="footer-title">Smart Classroom E-Voting System</p>
            <p className="footer-tag">Every vote counted. Every result trusted.</p>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <p className="footer-heading">Navigate</p>
            <Link to="/">Home</Link>
            <Link to="/candidates">Candidates</Link>
            <Link to="/voting">Vote</Link>
            <Link to="/results">Results</Link>
          </div>
          <div>
            <p className="footer-heading">Account</p>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/feedback">Feedback</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Smart Classroom E-Voting System — Built for demonstration purposes.</p>
      </div>
    </footer>
  )
}

export default Footer
