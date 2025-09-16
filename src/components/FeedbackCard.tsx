import type { Feedback } from '../data';
import './FeedbackCard.css';

interface FeedbackCardProps {
  feedback: Feedback;
}

// A simple star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < rating ? 'filled' : 'empty'}>
          ★
        </span>
      ))}
    </div>
  );
};


export const FeedbackCard = ({ feedback }: FeedbackCardProps) => {
  return (
    <div className="feedback-card">
      <div className="card-header">
        <span className="service-name">{feedback.service}</span>
        <StarRating rating={feedback.rating} />
      </div>
      <p className="comment">"{feedback.comment}"</p>
      <div className="card-footer">
        <span className="office-name">{feedback.office}</span>
        <span className="timestamp">{new Date(feedback.timestamp).toLocaleDateString()}</span>
      </div>
    </div>
  );
};