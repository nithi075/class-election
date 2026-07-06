import { useState } from 'react'
import DashboardCard from '../../components/DashboardCard/DashboardCard.jsx'
import { adminStats, allStudents, candidates } from '../../data/dummyData.js'
import './AdminDashboard.css'

const sections = [
  { key: 'students', label: 'Manage Students', icon: '👥' },
  { key: 'create', label: 'Create Election', icon: '🗳' },
  { key: 'candidate', label: 'Add Candidate', icon: '➕' },
  { key: 'results', label: 'View Results', icon: '📊' },
]

function AdminDashboard() {
  const [active, setActive] = useState('students')
  const [toast, setToast] = useState('')
  const [electionForm, setElectionForm] = useState({ title: '', department: '' })
  const [candidateForm, setCandidateForm] = useState({ name: '', position: '' })

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2600)
  }

  const handleCreateElection = (e) => {
    e.preventDefault()
    showToast(`Election "${electionForm.title || 'Untitled'}" created (demo only)`)
    setElectionForm({ title: '', department: '' })
  }

  const handleAddCandidate = (e) => {
    e.preventDefault()
    showToast(`Candidate "${candidateForm.name || 'Unnamed'}" added (demo only)`)
    setCandidateForm({ name: '', position: '' })
  }

  return (
    <div className="dashboard-page paper-texture">
      <div className="container">
        <div className="dashboard-header rise-in">
          <div>
            <span className="eyebrow">Admin Control Room</span>
            <h1 className="dashboard-title">Election administration</h1>
            <p className="dashboard-sub">Manage students, elections, and candidates from one place.</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <DashboardCard icon="🎓" label="Total Students" value={adminStats.totalStudents} tone="teal" />
          <DashboardCard icon="🧑‍💼" label="Total Candidates" value={adminStats.totalCandidates} tone="gold" />
          <DashboardCard icon="🗳" label="Total Votes" value={adminStats.totalVotes} />
          <DashboardCard icon="⏱" label="Active Elections" value={adminStats.activeElections} tone="teal" />
        </div>

        <div className="admin-tabs">
          {sections.map((s) => (
            <button
              key={s.key}
              className={`admin-tab ${active === s.key ? 'active' : ''}`}
              onClick={() => setActive(s.key)}
            >
              <span>{s.icon}</span> {s.label}
            </button>
          ))}
        </div>

        <div className="admin-panel ballot-stub">
          {active === 'students' && (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Dept</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allStudents.map((s) => (
                    <tr key={s.id}>
                      <td>{s.name}</td>
                      <td>{s.roll}</td>
                      <td>{s.dept}</td>
                      <td>
                        <span className={`status-pill status-${s.status === 'Voted' ? 'active' : 'closed'}`}>
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {active === 'create' && (
            <form className="admin-form" onSubmit={handleCreateElection}>
              <label className="field">
                <span>Election Title</span>
                <input
                  type="text"
                  placeholder="e.g. Sports Secretary Election 2026"
                  value={electionForm.title}
                  onChange={(e) => setElectionForm({ ...electionForm, title: e.target.value })}
                  required
                />
              </label>
              <label className="field">
                <span>Department</span>
                <input
                  type="text"
                  placeholder="e.g. All Departments"
                  value={electionForm.department}
                  onChange={(e) => setElectionForm({ ...electionForm, department: e.target.value })}
                  required
                />
              </label>
              <button type="submit" className="btn btn-primary">Create Election</button>
            </form>
          )}

          {active === 'candidate' && (
            <form className="admin-form" onSubmit={handleAddCandidate}>
              <label className="field">
                <span>Candidate Name</span>
                <input
                  type="text"
                  placeholder="Full name"
                  value={candidateForm.name}
                  onChange={(e) => setCandidateForm({ ...candidateForm, name: e.target.value })}
                  required
                />
              </label>
              <label className="field">
                <span>Position</span>
                <input
                  type="text"
                  placeholder="e.g. Class Representative"
                  value={candidateForm.position}
                  onChange={(e) => setCandidateForm({ ...candidateForm, position: e.target.value })}
                  required
                />
              </label>
              <button type="submit" className="btn btn-primary">Add Candidate</button>
            </form>
          )}

          {active === 'results' && (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Candidate</th>
                    <th>Position</th>
                    <th>Votes</th>
                  </tr>
                </thead>
                <tbody>
                  {[...candidates]
                    .sort((a, b) => b.votes - a.votes)
                    .map((c) => (
                      <tr key={c.id}>
                        <td>{c.name}</td>
                        <td>{c.position}</td>
                        <td className="mono-cell">{c.votes}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {toast && (
        <div className="toast">
          <span className="dot"></span>
          {toast}
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
