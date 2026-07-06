import { candidates } from '../../data/dummyData.js'
import './Results.css'

function Results() {
  const ranked = [...candidates].sort((a, b) => b.votes - a.votes)
  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0)
  const winner = ranked[0]

  return (
    <div className="results-page paper-texture">
      <div className="container">
        <div className="page-header rise-in">
          <span className="eyebrow">Declared results</span>
          <h1 className="page-title">Election results</h1>
          <p className="page-sub">{totalVotes} votes counted across all contested positions.</p>
        </div>

        <div className="winner-card ballot-stub rise-in">
          <p className="winner-label">Winner 🏆</p>
          <img src={winner.photo} alt={winner.name} className="winner-photo" />
          <h2 className="winner-name">{winner.name}</h2>
          <p className="winner-position">{winner.position}</p>
          <p className="winner-votes">{winner.votes} Votes</p>
        </div>

        <div className="ranking-section">
          <h2 className="section-title-sm">Candidate ranking</h2>
          <div className="ranking-list">
            {ranked.map((c, index) => {
              const pct = totalVotes ? Math.round((c.votes / totalVotes) * 100) : 0
              return (
                <div className="ranking-row ballot-stub" key={c.id}>
                  <div className="ranking-top">
                    <div className="ranking-identity">
                      <span className="ranking-position-num">{index + 1}</span>
                      <img src={c.photo} alt={c.name} className="ranking-photo" />
                      <div>
                        <p className="ranking-name">{c.name}</p>
                        <p className="ranking-role">{c.position}</p>
                      </div>
                    </div>
                    <div className="ranking-figures">
                      <span className="ranking-votes">{c.votes} votes</span>
                      <span className="ranking-pct">{pct}%</span>
                    </div>
                  </div>
                  <div className="progress-track">
                    <div
                      className={`progress-fill ${index === 0 ? 'is-leading' : ''}`}
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
