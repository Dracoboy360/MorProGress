import { useState, useMemo } from 'react';
import './App.css';
import { FeedbackCard } from './components/FeedbackCard';
import { OverallRatings } from './components/OverallRatings';
import { Sidebar } from './components/Sidebar';
import { mockFeedbackData } from './data';

function App() {
  // State to track the currently selected office. `null` means "All Offices".
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);

  // State for sorting by date
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // Get a unique list of office names. `useMemo` prevents this from recalculating on every render.
  const uniqueOffices = useMemo(() => {
    const officeSet = new Set(mockFeedbackData.map(feedback => feedback.office));
    return Array.from(officeSet);
  }, []); // The empty array [] means this runs only once.

  // Filter the feedback based on the selected office
  const filteredFeedback = useMemo(() => {
    if (!selectedOffice) {
      return mockFeedbackData; // If no office is selected, return all data
    }
    return mockFeedbackData.filter(feedback => feedback.office === selectedOffice);
  }, [selectedOffice]); // This recalculates only when selectedOffice changes

  // Sort the filtered feedback based on the selected sort order
  const displayedFeedback = useMemo(() => {
    return [...filteredFeedback].sort((a, b) => {
      const dateA = new Date(a.timestamp).getTime();
      const dateB = new Date(b.timestamp).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [filteredFeedback, sortOrder]); // Recalculates when data or sort order changes

  return (
    <div className="app-layout">
      {/* Our new Sidebar component */}
      <Sidebar
        offices={uniqueOffices}
        selectedOffice={selectedOffice}
        onSelectOffice={setSelectedOffice}
      />

      <div className="main-content">
        <header>
          <h1>{selectedOffice || 'All Offices'} Feedback</h1>
        </header>

        <main>
          <section className="ratings-summary">
            <OverallRatings feedbackData={displayedFeedback} />
          </section>

          {/* Filter controls will only show if data exists */}
          {displayedFeedback.length > 0 && (
            <div className="filter-controls">
              <label htmlFor="sortOrder">Sort by: </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          )}

          <section className="feedback-list">
            <h2>Recent Feedback</h2>
            {displayedFeedback.length > 0 ? (
              displayedFeedback.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
              ))
            ) : (
              <p>No feedback available for this office.</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;