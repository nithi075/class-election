import { useState } from 'react'
import { Link } from 'react-router-dom'
import CandidateCard from '../../components/CandidateCard/CandidateCard.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import { elections, candidates } from '../../data/dummyData.js'
import './Voting.css'

function Voting() {
  const [activeElectionId, setActiveElectionId] = useState(elections[0].id)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [pendingCandidate, setPendingCandidate] = useState(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [toast, setToast] = useState(false)

  const activeElection = elections.find((e) => e.id === activeElectionId)
  const electionCandidates = candidates.filter((c) =>
    activeElection.positions.includes(c.position),
  )

  const handleVoteClick = (candidate) => {
    if (hasVoted) return
    setPendingCandidate(candidate)
  }

  const confirmVote = () => {
    setSelectedCandidate(pendingCandidate)
    setHasVoted(true)
    setPendingCandidate(null)
    setToast(true)
    setTimeout(() => setToast(false), 3200)
  }

  const cancelVote = () => setPendingCandidate(null)

  return (
    <div className="voting-page paper-texture">
      <div className="container">
        <div className="page-header rise-in">
          <span className="eyebrow">Cast your ballot</span>
          <h1 className="page-title">Voting booth</h1>
          <p className="page-sub">Choose one election, review the candidates, and vote once.</p>
        </div>

        <div className="election-tabs">
          {elections.map((el) => (
            <button
              key={el.id}
              className={`election-tab ${activeElectionId === el.id ? 'active' : ''}`}
              onClick={() => {
                setActiveElectionId(el.id)
                setSelectedCandidate(null)
                setHasVoted(false)
              }}
            >
              {el.title}
            </button>
          ))}
        </div>

        <div className="active-election-banner ballot-stub">
          <div>
            <p className="banner-label">Active election</p>
            <p className="banner-title">{activeElection.title}</p>
          </div>
          <div className="banner-meta">
            <span className="status-pill status-active">{activeElection.status}</span>
            <span>Ends {activeElection.endsOn}</span>
          </div>
        </div>

        {hasVoted && (
          <div className="voted-banner">
            ✓ Your vote for <strong>{selectedCandidate?.name}</strong> has been submitted successfully.
          </div>
        )}

        <div className="candidates-grid voting-grid">
          {electionCandidates.map((c) => (
            <CandidateCard
              key={c.id}
              candidate={c}
              onVote={handleVoteClick}
              selected={selectedCandidate?.id === c.id}
              showVoteButton={!hasVoted || selectedCandidate?.id === c.id}
            />
          ))}
        </div>

        {hasVoted && (
          <div className="voting-actions">
            <Link to="/results" className="btn btn-primary">
              View live results
            </Link>
          </div>
        )}
      </div>

      {pendingCandidate && (
        <Modal
          title="Confirm your vote"
          message={`Are you sure you want to vote for ${pendingCandidate.name}? This cannot be changed once submitted.`}
          confirmLabel="Yes, submit vote"
          cancelLabel="Cancel"
          onConfirm={confirmVote}
          onCancel={cancelVote}
        />
      )}

      {toast && (
        <div className="toast">
          <span className="dot"></span>
          Your vote has been submitted successfully
        </div>
      )}
    </div>
  )
}

export default Voting
