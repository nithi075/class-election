import { Link } from 'react-router-dom'
import './DashboardCard.css'

function DashboardCard({ icon, label, value, to, tone = 'navy', footer }) {
  const content = (
    <div className={`dashboard-card ballot-stub tone-${tone}`}>
      <div className="dashboard-card-icon" aria-hidden="true">
        {icon}
      </div>
      <p className="dashboard-card-label">{label}</p>
      <p className="dashboard-card-value">{value}</p>
      {footer && <p className="dashboard-card-footer">{footer}</p>}
    </div>
  )

  if (to) {
    return (
      <Link to={to} className="dashboard-card-link">
        {content}
      </Link>
    )
  }

  return content
}

export default DashboardCard
