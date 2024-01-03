import React from 'react';
import './thankhealth1.css'; // Import your updated CSS file

const ThankYouPageH = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h2>Thank You for Your Submission!</h2>
        <p>Your information has been received.</p>
        <a href="/" className="btn">Return Home</a>
        {/* Add more content or redirection buttons if needed */}
      </div>
    </div>
  );
};

export default ThankYouPageH;
