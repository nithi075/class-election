import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found-page paper-texture">
      <div className="not-found-card ballot-stub rise-in">
        <p className="not-found-code">404</p>
        <h1 className="not-found-title">This ballot doesn't exist</h1>
        <p className="not-found-sub">
          The page you're looking for isn't part of this election. Let's get you back to safe
          ground.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
