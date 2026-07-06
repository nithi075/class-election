// Static dummy data powering the entire frontend showcase.
// No backend / API calls — everything here is local, in-memory data.

export const currentStudent = {
  name: 'Nithish Kumar',
  rollNumber: 'BCS-2024-041',
  department: 'B.Sc Computer Science',
  year: '3rd Year',
  email: 'nithish@college.edu',
  photo:
    'https://api.dicebear.com/7.x/notionists/svg?seed=Nithish&backgroundColor=f3e6bd',
}

export const candidates = [
  {
    id: 'c1',
    name: 'Arun Kumar',
    rollNumber: 'BCS-2024-012',
    department: 'B.Sc Computer Science',
    position: 'Class Representative',
    manifesto:
      'Focused on improving classroom communication, organizing coding sessions, and helping students with academic activities.',
    votes: 45,
    photo:
      'https://api.dicebear.com/7.x/notionists/svg?seed=Arun&backgroundColor=e7e0cf',
  },
  {
    id: 'c2',
    name: 'Kavya S',
    rollNumber: 'BCS-2024-027',
    department: 'B.Sc Computer Science',
    position: 'Class Representative',
    manifesto:
      'Plans to conduct weekly programming practice sessions, group discussions, and improve student participation.',
    votes: 38,
    photo:
      'https://api.dicebear.com/7.x/notionists/svg?seed=Kavya&backgroundColor=f3e6bd',
  },
  {
    id: 'c3',
    name: 'Vignesh Raj',
    rollNumber: 'BCS-2024-019',
    department: 'B.Sc Computer Science',
    position: 'Event Coordinator',
    manifesto:
      'Wants to organize technical events, coding competitions, workshops, and department activities.',
    votes: 29,
    photo:
      'https://api.dicebear.com/7.x/notionists/svg?seed=Vignesh&backgroundColor=e7e0cf',
  },
  {
    id: 'c4',
    name: 'Priyadharshini M',
    rollNumber: 'BCS-2024-008',
    department: 'B.Sc Computer Science',
    position: 'Event Coordinator',
    manifesto:
      'Focused on arranging seminars, student interaction programs, and skill development events.',
    votes: 22,
    photo:
      'https://api.dicebear.com/7.x/notionists/svg?seed=Priya&backgroundColor=f3e6bd',
  },
]

export const elections = [
  {
    id: 'e1',
    title: 'B.Sc Computer Science Class Representative Election 2026',
    department: 'B.Sc Computer Science',
    status: 'Active',
    endsOn: '2026-07-12',
    positions: ['Class Representative'],
  },
  {
    id: 'e2',
    title: 'Department Event Coordinator Election 2026',
    department: 'B.Sc Computer Science',
    status: 'Active',
    endsOn: '2026-07-15',
    positions: ['Event Coordinator'],
  },
]

export const feedbackEntries = [
  {
    id: 'f1',
    name: 'Santhosh R',
    rating: 5,
    comment:
      'The online voting system was simple and very easy to use.',
  },
  {
    id: 'f2',
    name: 'Meena K',
    rating: 4,
    comment:
      'Dashboard design is good and election results are displayed clearly.',
  },
]

export const studentStats = {
  totalElections: 2,
  votingStatus: 'Completed',
  candidatesAvailable: candidates.length,
  resultsDeclared: 0,
}

export const adminStats = {
  totalStudents: 58,
  totalCandidates: candidates.length,
  totalVotes: candidates.reduce((sum, c) => sum + c.votes, 0),
  activeElections:
    elections.filter((e) => e.status === 'Active').length,
}

export const allStudents = [
  {
    id: 's1',
    name: 'Nithish Kumar',
    roll: 'BCS-2024-041',
    dept: 'B.Sc CS',
    status: 'Voted',
  },
  {
    id: 's2',
    name: 'Santhosh R',
    roll: 'BCS-2024-018',
    dept: 'B.Sc CS',
    status: 'Voted',
  },
  {
    id: 's3',
    name: 'Meena K',
    roll: 'BCS-2024-005',
    dept: 'B.Sc CS',
    status: 'Pending',
  },
  {
    id: 's4',
    name: 'Hari Prasad',
    roll: 'BCS-2024-032',
    dept: 'B.Sc CS',
    status: 'Voted',
  },
  {
    id: 's5',
    name: 'Janani S',
    roll: 'BCS-2024-044',
    dept: 'B.Sc CS',
    status: 'Pending',
  },
]