import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import CandidateCard from '../../components/CandidateCard/CandidateCard.jsx'
import { candidates } from '../../data/dummyData.js'
import './Candidates.css'

function Candidates() {
  const [positionFilter, setPositionFilter] = useState('All')
  const positions = useMemo(() => ['All', ...new Set(candidates.map((c) => c.position))], [])

  const filtered =
    positionFilter === 'All' ? candidates : candidates.filter((c) => c.position === positionFilter)

  return (
    <div className="candidates-page paper-texture">
      <div className="container">
        <div className="page-header rise-in">
          <span className="eyebrow">Meet the candidates</span>
          <h1 className="page-title">Candidates standing this term</h1>
          <p className="page-sub">
            Read each manifesto before you vote — every candidate below is contesting a live
            election.
          </p>
        </div>

        <div className="position-filter">
          {positions.map((p) => (
            <button
              key={p}
              className={`filter-chip ${positionFilter === p ? 'active' : ''}`}
              onClick={() => setPositionFilter(p)}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="candidates-grid">
          {filtered.map((c) => (
            <CandidateCard key={c.id} candidate={c} showVoteButton={false} />
          ))}
        </div>

        <div className="candidates-cta">
          <p>Ready to cast your ballot?</p>
          <Link to="/voting" className="btn btn-gold">Go to voting</Link>
        </div>
      </div>
    </div>
  )
}

export default Candidates
