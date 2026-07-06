import { useState } from 'react'
import { feedbackEntries } from '../../data/dummyData.js'
import './Feedback.css'

function Feedback() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const resetForm = () => {
    setRating(0)
    setComment('')
    setSubmitted(false)
  }

  return (
    <div className="feedback-page paper-texture">
      <div className="container feedback-layout">
        <div className="feedback-form-col rise-in">
          <span className="eyebrow">Tell us how it went</span>
          <h1 className="page-title">Share your feedback</h1>
          <p className="page-sub">Your input helps us improve the next election cycle.</p>

          {submitted ? (
            <div className="ballot-stub thank-you-card">
              <div className="thank-you-seal" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26">
                  <path d="M8 12l2.5 2.5L16 9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2>Thank you for your feedback!</h2>
              <p>We've recorded your rating of {rating} star{rating === 1 ? '' : 's'}.</p>
              <button className="btn btn-outline" onClick={resetForm}>
                Submit another response
              </button>
            </div>
          ) : (
            <form className="ballot-stub feedback-form" onSubmit={handleSubmit}>
              <label className="field">
                <span>Rating</span>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      type="button"
                      key={n}
                      className={`star ${n <= rating ? 'filled' : ''}`}
                      onClick={() => setRating(n)}
                      aria-label={`${n} star`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </label>

              <label className="field">
                <span>Comment</span>
                <textarea
                  rows="5"
                  placeholder="What worked well? What could be better?"
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </label>

              <button type="submit" className="btn btn-primary" disabled={rating === 0}>
                Submit Feedback
              </button>
            </form>
          )}
        </div>

        <div className="feedback-list-col">
          <h2 className="section-title-sm">What others said</h2>
          <div className="feedback-list">
            {feedbackEntries.map((f) => (
              <div className="feedback-item ballot-stub" key={f.id}>
                <div className="feedback-item-head">
                  <p className="feedback-name">{f.name}</p>
                  <p className="feedback-stars">{'★'.repeat(f.rating)}{'☆'.repeat(5 - f.rating)}</p>
                </div>
                <p className="feedback-comment">{f.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
