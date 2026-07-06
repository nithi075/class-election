import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [role, setRole] = useState('student')
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No real authentication — this is a static frontend showcase.
    if (role === 'student') {
      navigate('/student-dashboard')
    } else {
      navigate('/admin-dashboard')
    }
  }

  return (
    <div className="auth-page paper-texture">
      <div className="auth-card ballot-stub rise-in">
        <div className="auth-seal" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26">
            <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M8 12l2.5 2.5L16 9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-sub">Sign in to reach your ballot and dashboard.</p>

        <div className="role-toggle">
          <button
            type="button"
            className={role === 'student' ? 'active' : ''}
            onClick={() => setRole('student')}
          >
            Student Login
          </button>
          <button
            type="button"
            className={role === 'admin' ? 'active' : ''}
            onClick={() => setRole('admin')}
          >
            Admin Login
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@college.edu"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              value={form.password}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="btn btn-primary auth-submit">
            LOGIN
          </button>
        </form>

        <p className="auth-footnote">
          New here? <Link to="/register">Create a student account</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
