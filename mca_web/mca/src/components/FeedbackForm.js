import React, { useState } from "react";
import "./FeedbackForm.css";

function FeedbackForm() {
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <section className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default FeedbackForm;
