// Static dummy data powering the entire frontend showcase.
// No backend / API calls — everything here is local, in-memory data.

import nithishImg from '../assets/roshini.jpg'
import sivaaniskaImg from '../assets/sivaanishka.jpeg'
import vinothaImg from '../assets/vinotha.jpg'
import suregaImg from '../assets/surega.jpg'
import soundaryaImg from '../assets/soundarya.jpg'
import rohiniImg from '../assets/roshini.jpg'


export const currentStudent = {
  name: 'Nithish ',
  rollNumber: 'BCS-2024-041',
  department: 'B.Sc Computer Science',
  year: '3rd Year',
  email: 'nithish@college.edu',
  photo: nithishImg,
}


export const candidates = [
  {
    id: 'c1',
    name: 'Sivaaniska',
    rollNumber: 'BCS-2024-012',
    department: 'B.Sc Computer Science',
    position: 'Class Representative',
    manifesto:
      'Focused on improving communication between students and faculty, organizing academic activities and department events.',
    votes: 45,
    photo: sivaaniskaImg,
  },

  {
    id: 'c2',
    name: 'Vinotha',
    rollNumber: 'BCS-2024-027',
    department: 'B.Sc Computer Science',
    position: 'Class Representative',
    manifesto:
      'Plans to conduct programming sessions, group activities and improve student participation.',
    votes: 38,
    photo: vinothaImg,
  },

  {
    id: 'c3',
    name: 'Surega',
    rollNumber: 'BCS-2024-019',
    department: 'B.Sc Computer Science',
    position: 'Class Representative',
    manifesto:
      'Interested in organizing workshops, technical events and skill development programs.',
    votes: 29,
    photo: suregaImg,
  },

  {
    id: 'c4',
    name: 'Soundarya',
    rollNumber: 'BCS-2024-008',
    department: 'B.Sc Computer Science',
    position: 'Class Representative',
    manifesto:
      'Focused on student interaction, seminars and improving department activities.',
    votes: 22,
    photo: soundaryaImg,
  },

  {
    id: 'c5',
    name: 'Rohini',
    rollNumber: 'BCS-2024-015',
    department: 'B.Sc Computer Science',
    position: 'Class Representative',
    manifesto:
      'Aims to encourage teamwork, communication and student involvement.',
    votes: 18,
    photo: rohiniImg,
  },
]


export const elections = [
  {
    id: 'e1',
    title:
      'B.Sc Computer Science Class Representative Election 2026',
    department: 'B.Sc Computer Science',
    status: 'Active',
    endsOn: '2026-07-12',
    positions: ['Class Representative'],
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
  totalElections: elections.length,
  votingStatus: 'Completed',
  candidatesAvailable: candidates.length,
  resultsDeclared: 0,
}


export const adminStats = {
  totalStudents: 58,

  totalCandidates: candidates.length,

  totalVotes: candidates.reduce(
    (sum, candidate) => sum + candidate.votes,
    0
  ),

  activeElections: elections.filter(
    election => election.status === 'Active'
  ).length,
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