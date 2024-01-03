import React from 'react';
import './thankappo1.css'; // Replace with your CSS file path

const ThankYouPage = () => {
  return (
    <div className="container">
      <div className="thank-you-message">
        <h2>Thank You for Booking!</h2>
        <p>Your appointment has been successfully scheduled.</p>
        {/* Add more content or redirection buttons if needed */}
        <a href="/" className="thank-you-btn">Return to Home</a>
      </div>
    </div>
  );
};

export default ThankYouPage;
