// import Navbar from '../components/Navbar';
// import { useState } from 'react';

// const LoginPage = () => {
//   const [form, setForm] = useState({ email: '', password: '' });

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = e => {
//     e.preventDefault();
//     // You would send login request here
//     alert(`Logging in with ${form.email}`);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="form-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default LoginPage;






import Navbar from '../components/Navbar';
import { useState } from 'react';
import './FormStyles.css'; // Import the CSS file

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Logging in with ${form.email}`);
  };

  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Login to Your Account</h2>
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Login</button>
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
