// import Navbar from '../components/Navbar';
// import { useState } from 'react';

// const RegisterPage = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = e => {
//     e.preventDefault();
//     // You would send register request here
//     alert(`Registering ${form.name}`);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="form-container">
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default RegisterPage;



import Navbar from '../components/Navbar';
import { useState } from 'react';
import './FormStyles.css';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Registering ${form.name}`);
  };

  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Create a New Account</h2>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Register</button>
          <p>Already have an account? <a href="/login">Login here</a></p>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;

