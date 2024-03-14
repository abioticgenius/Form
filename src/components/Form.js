import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import './Form.css'; 

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    address: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.dob &&
      formData.address &&
      formData.phone &&
      formData.message
    ) {
      saveToLocalStorage(formData);
      toast.success("Form filled!");
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
  };

  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : null;
  };

  const resetForm = () => {
    localStorage.removeItem('formData');
    setFormData({
      name: '',
      email: '',
      dob: '',
      address: '',
      phone: '',
      message: ''
    });
    toast.info("Form reset!");
  };

  return (
    <div className="form-container">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder='Your Name'
            name="name"
            value={formData.name}

            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='example@exapmle.com'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder='121 STREET'
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            title="Please enter a valid 10 digit phone number."
            maxLength={10}
            value={formData.phone}
            placeholder='1234567890'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        <br></br>
        <button type="button" className="reset-btn" onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};

export default Form;