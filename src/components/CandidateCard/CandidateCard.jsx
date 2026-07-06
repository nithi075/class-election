import './CandidateCard.css'

function CandidateCard({ candidate, onVote, selected, showVoteButton = true, rank }) {
  const { name, rollNumber, department, position, manifesto, votes, photo } = candidate

  return (
    <article className={`candidate-card ballot-stub ${selected ? 'is-selected' : ''}`}>
      {rank && <span className="candidate-rank">#{rank}</span>}
      <div className="candidate-photo-wrap">
        <img src={photo} alt={name} className="candidate-photo" />
      </div>
      <h3 className="candidate-name">{name}</h3>
      <p className="candidate-position">{position}</p>

      <dl className="candidate-meta">
        <div>
          <dt>Roll No.</dt>
          <dd>{rollNumber}</dd>
        </div>
        <div>
          <dt>Department</dt>
          <dd>{department}</dd>
        </div>
      </dl>

      <p className="candidate-manifesto">{manifesto}</p>

      {typeof votes === 'number' && (
        <p className="candidate-votes">
          <span>{votes}</span> votes
        </p>
      )}

      {showVoteButton && (
        <button
          type="button"
          className={`btn ${selected ? 'btn-gold' : 'btn-outline'} candidate-vote-btn`}
          onClick={() => onVote && onVote(candidate)}
        >
          {selected ? 'Selected ✓' : 'Vote'}
        </button>
      )}
    </article>
  )
}

export default CandidateCard
