// Define the structure for a single piece of feedback
export interface Feedback {
  id: number;
  office: string;
  service: string;
  rating: number; // e.g., 1 to 5
  comment: string;
  timestamp: string;
}

// Mock data to simulate what you'd get from your mobile app's database
export const mockFeedbackData: Feedback[] = [
  {
    id: 1,
    office: "City Hall Public Health Clinic",
    service: "Public Health",
    rating: 5,
    comment: "The vaccination process was very smooth and the staff were friendly.",
    timestamp: "2023-10-26T10:00:00Z",
  },
  {
    id: 2,
    office: "Downtown DMV",
    service: "Public Utilities",
    rating: 2,
    comment: "The wait time was incredibly long, and the online appointment system was confusing.",
    timestamp: "2023-10-26T11:30:00Z",
  },
  {
    id: 3,
    office: "Maple Street Elementary",
    service: "Education",
    rating: 4,
    comment: "Great teachers, but the school facilities could use an upgrade.",
    timestamp: "2023-10-25T14:00:00Z",
  },
  {
    id: 4,
    office: "City Social Services Center",
    service: "Social Services",
    rating: 5,
    comment: "They provided me with all the resources I needed. Very helpful and compassionate staff.",
    timestamp: "2023-10-25T09:15:00Z",
  },
    {
    id: 5,
    office: "General Hospital",
    service: "Healthcare",
    rating: 3,
    comment: "The doctors were great, but the billing department made a mistake that was hard to fix.",
    timestamp: "2023-10-24T18:45:00Z",
  },
  {
    id: 6,
    office: "City Hall Public Health Clinic",
    service: "Public Health",
    rating: 4,
    comment: "Easy to get an appointment for my child's check-up.",
    timestamp: "2023-10-24T13:20:00Z",
  },
  {
    id: 7,
    office: "Eastside Public Library",
    service: "Education",
    rating: 5,
    comment: "Wonderful selection of books and helpful librarians.",
    timestamp: "2023-10-23T16:00:00Z",
  },
];