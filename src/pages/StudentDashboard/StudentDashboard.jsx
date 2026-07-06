import DashboardCard from '../../components/DashboardCard/DashboardCard.jsx'
import { currentStudent, studentStats, elections } from '../../data/dummyData.js'
import './StudentDashboard.css'

function StudentDashboard() {
  return (
    <div className="dashboard-page paper-texture">
      <div className="container">
        <div className="dashboard-header rise-in">
          <div>
            <span className="eyebrow">Student Portal</span>
            <h1 className="dashboard-title">Welcome, {currentStudent.name.split(' ')[0]} 👋</h1>
            <p className="dashboard-sub">
              {studentStats.totalElections} elections this term · Voting status:{' '}
              <strong>{studentStats.votingStatus}</strong>
            </p>
          </div>
          <img src={currentStudent.photo} alt={currentStudent.name} className="dashboard-avatar" />
        </div>

        <div className="dashboard-grid">
          <DashboardCard icon="👤" label="My Profile" value={currentStudent.name} to="/profile" footer={currentStudent.rollNumber} />
          <DashboardCard icon="🗳" label="Active Elections" value={studentStats.totalElections} to="/voting" tone="teal" footer="2 seats open for voting" />
          <DashboardCard icon="🎓" label="Available Candidates" value={studentStats.candidatesAvailable} to="/candidates" tone="gold" footer="Across both elections" />
          <DashboardCard icon="✅" label="Vote Status" value={studentStats.votingStatus} tone="teal" footer="Your ballot has been recorded" />
          <DashboardCard icon="🏆" label="Results" value="View" to="/results" tone="gold" footer="See rankings once declared" />
          <DashboardCard icon="💬" label="Feedback" value="Share" to="/feedback" footer="Tell us how voting went" />
        </div>

        <div className="dashboard-elections">
          <h2 className="section-title-sm">Elections you can vote in</h2>
          <div className="election-list">
            {elections.map((el) => (
              <div className="election-row ballot-stub" key={el.id}>
                <div>
                  <p className="election-name">{el.title}</p>
                  <p className="election-dept">{el.department}</p>
                </div>
                <div className="election-meta">
                  <span className={`status-pill status-${el.status.toLowerCase()}`}>{el.status}</span>
                  <span className="election-ends">Ends {el.endsOn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
