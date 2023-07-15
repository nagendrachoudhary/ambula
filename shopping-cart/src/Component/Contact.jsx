import React from 'react';
import './ContactPage.css'; // Import the CSS file for this component

const DemoContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to get in touch with us.</p>
      <h2>Contact Information</h2>
      <ul>
        <li>Email: info@example.com</li>
        <li>Phone: +1 123-456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
      <h2>Contact Form</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default DemoContactPage;
