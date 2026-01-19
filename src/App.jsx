import React, { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFirstNameInputChange = (event) =>{
    setValues({...values, firstName: event.target.value});
  };

  const handleLastNameInputChange = (event) =>{
    setValues({...values, lastName: event.target.value});
  };

  const handleEmailInputChange = (event) =>{
    setValues({...values, email: event.target.value});
  };

  const handlePhoneNumberInputChange = (event) =>{
    setValues({...values, phone: event.target.value});
  };

  const handlePasswordInputChange = (event) =>{
    setValues({...values, password: event.target.value});
  };

  const hadleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email && values.phone && values.password) {
      setIsValid(true);
    }
    setIsSubmitted(true);
  }

  return (
    <div className="form-container">
      <h1 className='form-heading'>Basic Form</h1>
      <form className='register-form' onSubmit={hadleSubmit}>
        <h2 className='form-subheading'>Register</h2>

        <p className='form-description'>Please fill in the form below to register.</p>
        {isSubmitted && isValid ? <div className='success-message'>Success! Thank You For Registering!</div>: null}

        <label htmlFor='firstName'>
          First Name:
        </label>
        <input
            id='firstName'
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            className='form-field'
            type="text"
            name="firstName"
            placeholder='First Name'
        />
        {isSubmitted && !values.firstName ? <span>Please Enter a First Name</span> : null}

        <label htmlFor='lastName'>
          Last Name:
        </label>
        <input
            id='lastName'
            onChange={handleLastNameInputChange}
            value={values.lastName}
            className='form-field'
            type="text"
            name="lastName"
            placeholder='Last Name'
        />
        {isSubmitted && !values.lastName ? <span>Please Enter a Last Name</span> : null}

        <label htmlFor='email'>
          Email:
        </label>
        <input
            id='email'
            onChange={handleEmailInputChange}
            value={values.email}
            className='form-field'
            type="email"
            name="email"
            placeholder='Email'
        />
        {isSubmitted && !values.email ? <span>Please Enter a Valid Email</span> : null}

        <label htmlFor='phone'>
          Phone Number:
        </label>
        <input
            id='phone'
            onChange={handlePhoneNumberInputChange}
            value={values.phone}
            className='form-field'
            type="tel"
            name="phone"
            placeholder='Phone Number'
        />
        {isSubmitted && !values.phone ? <span>Please Enter a Valid Phone Number</span> : null}
  
        <label htmlFor='password'>
          Password:
        </label>
        <input
            id='password'
            onChange={handlePasswordInputChange}
            value={values.password}
            className='form-field'
            type="password"
            name="password"
            placeholder='Password'
        />
        {isSubmitted && !values.password ? <span>Please Enter a Valid Password</span> : null}
  
        <button className='form-field' type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
