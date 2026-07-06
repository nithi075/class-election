# Smart Classroom E-Voting System

A **frontend-only showcase** of a classroom digital voting portal, built with React + Vite.
There is no backend and no API — every list (students, candidates, elections, results,
feedback) is static dummy data living in `src/data/dummyData.js`, and all "actions" (login,
register, vote, submit feedback) are simulated with local React state.

## Tech stack

- React 18 + Vite
- React Router DOM (client-side routing across all pages)
- Plain CSS (no Tailwind, no Bootstrap) — one CSS file per component/page

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

## Project structure

```
client/src/
  components/
    Navbar/           Sticky top navigation with active-link highlighting
    Footer/           Site footer with quick links
    CandidateCard/    Reusable candidate profile card (used in Candidates, Voting, Results)
    DashboardCard/    Reusable stat/shortcut card (used in both dashboards)
    Modal/            Confirmation popup used before submitting a vote
  pages/
    Home/             Landing page — hero, about, features, security, how-it-works, CTA
    Login/             Student/Admin login (no real auth — routes straight to a dashboard)
    Register/          Student registration form with a success screen
    StudentDashboard/  Student's home base: profile, elections, candidates, vote status
    AdminDashboard/    Admin panel: stats, manage students, create election, add candidate, results
    Candidates/        Browchable candidate list with a position filter
    Voting/            Election tabs, candidate selection, confirm-vote popup, one-vote lock
    Results/           Winner card, ranked list, CSS progress bars for vote share
    Feedback/          Star rating + comment form with a thank-you state
    Profile/           Student profile summary
    NotFound/          Catch-all 404 page
  data/
    dummyData.js       All static data used across the app
```

## Notes on behavior

- **Login** does not check credentials — choosing "Student Login" or "Admin Login" and
  clicking `LOGIN` routes you straight to the matching dashboard.
- **Register** validates that the two password fields match, then shows a success message.
- **Voting** keeps a `hasVoted` flag in component state so a ballot can only be submitted once
  per election tab; switching elections resets the flag for that session only (nothing is
  persisted — a page refresh resets all state, since there is no backend).
- **Admin Dashboard** "Create Election" and "Add Candidate" forms show a toast confirmation but
  do not persist new data, since this is a static showcase.

## Design language

The visual identity leans on the idea of a physical ballot: a navy/gold "ballot stub" card style
with a perforated top edge, a paper-toned background, and a mono typeface for tallies and vote
counts, paired with a serif display face (Fraunces) for headings and a clean sans (Work Sans) for
body text.
