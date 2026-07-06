import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const initialForm = {
  name: '',
  roll: '',
  department: '',
  year: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function Register() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match. Please check and try again.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="auth-page paper-texture">
        <div className="auth-card ballot-stub rise-in success-card">
          <div className="auth-seal success-seal" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path d="M8 12l2.5 2.5L16 9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="auth-title">Registration successful</h1>
          <p className="auth-sub">
            Welcome, {form.name || 'student'}. Your account has been created — you can now log in
            and cast your vote.
          </p>
          <Link to="/login" className="btn btn-primary auth-submit">
            Go to Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="auth-page paper-texture">
      <div className="auth-card ballot-stub rise-in register-card">
        <h1 className="auth-title">Create your student account</h1>
        <p className="auth-sub">Register once to vote in every election for your class.</p>

        <form className="auth-form register-grid" onSubmit={handleSubmit}>
          <label className="field">
            <span>Student Name</span>
            <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Full name" />
          </label>

          <label className="field">
            <span>Roll Number</span>
            <input type="text" name="roll" required value={form.roll} onChange={handleChange} placeholder="CSE-2024-XXX" />
          </label>

          <label className="field">
            <span>Department</span>
            <select name="department" required value={form.department} onChange={handleChange}>
              <option value="" disabled>Select department</option>
              <option>Computer Science & Engineering</option>
              <option>Electronics & Communication</option>
              <option>Information Technology</option>
              <option>Mechanical Engineering</option>
              <option>Civil Engineering</option>
            </select>
          </label>

          <label className="field">
            <span>Year</span>
            <select name="year" required value={form.year} onChange={handleChange}>
              <option value="" disabled>Select year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </label>

          <label className="field field-wide">
            <span>Email</span>
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@college.edu" />
          </label>

          <label className="field">
            <span>Password</span>
            <input type="password" name="password" required value={form.password} onChange={handleChange} placeholder="••••••••" />
          </label>

          <label className="field">
            <span>Confirm Password</span>
            <input type="password" name="confirmPassword" required value={form.confirmPassword} onChange={handleChange} placeholder="••••••••" />
          </label>

          {error && <p className="form-error field-wide">{error}</p>}

          <button type="submit" className="btn btn-primary auth-submit field-wide">
            Create Account
          </button>
        </form>

        <p className="auth-footnote">
          Already registered? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
