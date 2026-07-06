import { currentStudent, studentStats } from '../../data/dummyData.js'
import './Profile.css'

function Profile() {
  return (
    <div className="profile-page paper-texture">
      <div className="container">
        <div className="profile-card ballot-stub rise-in">
          <img src={currentStudent.photo} alt={currentStudent.name} className="profile-photo" />
          <h1 className="profile-name">{currentStudent.name}</h1>
          <p className="profile-role">{currentStudent.department}</p>

          <dl className="profile-details">
            <div>
              <dt>Roll Number</dt>
              <dd>{currentStudent.rollNumber}</dd>
            </div>
            <div>
              <dt>Department</dt>
              <dd>{currentStudent.department}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{currentStudent.year}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{currentStudent.email}</dd>
            </div>
          </dl>

          <div className="profile-stats">
            <div>
              <p className="profile-stat-value">{studentStats.totalElections}</p>
              <p className="profile-stat-label">Elections</p>
            </div>
            <div>
              <p className="profile-stat-value">{studentStats.votingStatus}</p>
              <p className="profile-stat-label">Voting status</p>
            </div>
            <div>
              <p className="profile-stat-value">{studentStats.candidatesAvailable}</p>
              <p className="profile-stat-label">Candidates seen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
