// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import styles from './RegisterForm.module.css';

export default function RegisterForm({ onClose }) {
  const [step, setStep] = useState(1); // Track current step
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    email: '',
    homeAddress: '',
    cityStateZip: '',
    gender: '',
    course: '',
    classTiming: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate Step 1
      if (
        formData.firstName &&
        formData.lastName &&
        formData.phoneNumber &&
        formData.dateOfBirth &&
        formData.email &&
        formData.homeAddress &&
        formData.cityStateZip &&
        formData.gender
      ) {
        setStep(2);
      }
    } else if (step === 2) {
      // Validate Step 2
      if (formData.course && formData.classTiming) {
        alert('Registration Complete!');
        onClose();
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>✖</button>

        {/* Form */}
        <form className={styles.form}>
          {step === 1 && (
            <>
              <h3>Personal Information</h3>

              <label htmlFor="firstName" className={styles.label}>First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className={styles.input}
                onChange={handleInputChange}
                value={formData.firstName}
              />
              {!formData.firstName && (
                <p className={styles.error}>Please enter a value</p>
              )}

              <label htmlFor="lastName" className={styles.label}>Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className={styles.input}
                onChange={handleInputChange}
                value={formData.lastName}
              />
              {!formData.lastName && (
                <p className={styles.error}>Please enter a value</p>
              )}

              <label htmlFor="phoneNumber" className={styles.label}>Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className={styles.input}
                onChange={handleInputChange}
                value={formData.phoneNumber}
              />
              {!formData.phoneNumber && (
                <p className={styles.error}>Please enter a value</p>
              )}

              <label htmlFor="dateOfBirth" className={styles.label}>Date of Birth *</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className={styles.input}
                onChange={handleInputChange}
                value={formData.dateOfBirth}
              />
              {!formData.dateOfBirth && (
                <p className={styles.error}>Please select a date</p>
              )}

              <label htmlFor="email" className={styles.label}>Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className={styles.input}
                onChange={handleInputChange}
                value={formData.email}
              />
              {!formData.email && (
                <p className={styles.error}>Please enter a valid email</p>
              )}

              <label htmlFor="homeAddress" className={styles.label}>Home Address *</label>
              <input
                type="text"
                id="homeAddress"
                name="homeAddress"
                placeholder="Enter your home address"
                className={styles.input}
                onChange={handleInputChange}
                value={formData.homeAddress}
              />
              {!formData.homeAddress && (
                <p className={styles.error}>Please enter your address</p>
              )}

              <label htmlFor="cityStateZip" className={styles.label}>City, State, Zip Code *</label>
              <input
                type="text"
                id="cityStateZip"
                name="cityStateZip"
                placeholder="Enter City, State, Zip"
                className={styles.input}
                onChange={handleInputChange}
                value={formData.cityStateZip}
              />
              {!formData.cityStateZip && (
                <p className={styles.error}>Please enter a value</p>
              )}

              <label className={styles.label}>Gender *</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleRadioChange}
                  />
                  Male
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleRadioChange}
                  />
                  Female
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === 'other'}
                    onChange={handleRadioChange}
                  />
                  Other
                </label>
              </div>
              {!formData.gender && (
                <p className={styles.error}>Please select a gender</p>
              )}
            </>
          )}

          {step === 2 && (
            <>
              <h3>Available Course</h3>

              <label htmlFor="course" className={styles.label}>Course</label>
              <select
                id="course"
                name="course"
                className={styles.select}
                onChange={handleSelectChange}
                value={formData.course}
              >
                <option value="">Select a course</option>
                <option value="photography-basics">Photography Basics</option>
                <option value="advanced-techniques">Advanced Techniques</option>
                <option value="portrait-photography">Portrait Photography</option>
              </select>
              {!formData.course && (
                <p className={styles.error}>Please select a course</p>
              )}

              <label htmlFor="classTiming" className={styles.label}>Class Timing</label>
              <select
                id="classTiming"
                name="classTiming"
                className={styles.select}
                onChange={handleSelectChange}
                value={formData.classTiming}
              >
                <option value="">Select timing</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
              {!formData.classTiming && (
                <p className={styles.error}>Please select a class timing</p>
              )}
            </>
          )}

          {/* Navigation Buttons */}
          <div className={styles.buttons}>
            {step > 1 && (
              <button
                type="button"
                className={styles.backButton}
                onClick={handleBack}
              >
                Back
              </button>
            )}
            <button
              type="button"
              className={styles.nextButton}
              onClick={handleNext}
            >
              {step === 2 ? 'Submit' : 'Next Page →'}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className={styles.loginLink}>
          Already have an account?{' '}
          <a href="/login" className={styles.link}>Login here</a>
        </p>
      </div>
    </div>
  );
}