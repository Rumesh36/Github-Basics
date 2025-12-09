import React, { useState } from "react";
import './Form.css';

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    console.log(form);
  };

  return (
    <div className="form-container">
      <h2>User Details Form</h2>

      <form className="user-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={form.age}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <textarea
          name="address"
          placeholder="Enter full address"
          value={form.address}
          onChange={handleChange}
          rows="3"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
