import React, { useState } from "react";

const Form1 = ({ handleNext }) => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [emailIdError, setEmailIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmailId = () => {
    if (!emailId) {
      setEmailIdError("Email ID is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(emailId)) {
      setEmailIdError("Invalid email ID");
      return false;
    }
    setEmailIdError("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    if (!/(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d)(?=.*\W.*\W).{8,}/.test(password)) {
      setPasswordError("Invalid password. Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSaveAndNext = () => {
    if (validateEmailId() && validatePassword()) {
      handleNext({ emailId, password });
    }
  };

  return (
    <div>
      <h2>Form 1</h2>
      <div>
        <label>Email ID:</label>
        <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} onBlur={validateEmailId} />
        {emailIdError && <span>{emailIdError}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} />
        {passwordError && <span>{passwordError}</span>}
      </div>
      <button disabled>Back</button>
      <button onClick={handleSaveAndNext}>Save and Next</button>
    </div>
  );
};

const Form2 = ({ formData, handleNext, handlePrevious }) => {
  const [firstName, setFirstName] = useState(formData.firstName || "");
  const [lastName, setLastName] = useState(formData.lastName || "");
  const [address, setAddress] = useState(formData.address || "");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [addressError, setAddressError] = useState("");

  const validateFirstName = () => {
    if (!firstName) {
      setFirstNameError("First Name is required");
      return false;
    }
    if (!/^[a-zA-Z ]{2,50}$/.test(firstName)) {
      setFirstNameError("Invalid First Name. Only alphabets are allowed with minimum 2 characters and maximum 50 characters.");
      return false;
    }
    setFirstNameError("");
    return true;
  };

  const validateLastName = () => {
    if (!lastName) {
      setLastNameError("");
      return true;
    }
    if (!/^[a-zA-Z ]+$/.test(lastName)) {
      setLastNameError("Invalid Last Name. Only alphabets are allowed.");
      return false;
    }
    setLastNameError("");
    return true;
  };

  const validateAddress = () => {
    if (!address) {
      setAddressError("Address is required");
      return false;
    }}
