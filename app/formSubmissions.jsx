// YourComponent.jsx

import ContactForm from './contactForm';
import React from 'react';

const FormSubmission = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);

    fetch(event.target.action, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
        } else {
          // Handle error
        }
      })
      .catch((error) => {
        // Handle network error
      });
  };

  return (
    <div>
      <form id="contact-form" onSubmit={handleFormSubmit}>
        <ContactForm />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default FormSubmission;
