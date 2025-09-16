import type { Feedback } from '../data';
import './OverallRatings.css';

interface OverallRatingsProps {
  feedbackData: Feedback[];
}

// Define the shape of our calculated data
interface ServiceRating {
  total: number;
  count: number;
}

export const OverallRatings = ({ feedbackData }: OverallRatingsProps) => {
  // Use reduce to group feedback by service and sum ratings/count
  const ratingsByService = feedbackData.reduce((acc, feedback) => {
    // If the service is not yet a key in our accumulator, add it
    if (!acc[feedback.service]) {
      acc[feedback.service] = { total: 0, count: 0 };
    }
    // Add the rating and increment the count
    acc[feedback.service].total += feedback.rating;
    acc[feedback.service].count += 1;
    return acc;
  }, {} as Record<string, ServiceRating>); // Initialize with an empty object of the correct type

  return (
    <div className="overall-ratings-card">
      <h2>Overall Service Ratings</h2>
      <ul>
        {Object.entries(ratingsByService).map(([service, data]) => {
          const average = data.total / data.count;
          return (
            <li key={service}>
              <span className="service">{service}</span>
              <span className="average-score">{average.toFixed(1)} / 5.0</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};