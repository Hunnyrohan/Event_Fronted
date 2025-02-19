// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css'; // Import the CSS file for styling

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here (e.g., API call, validation, etc.)
//     console.log('Email:', email, 'Password:', password);

//     // For now, just navigate to the home page after "login"
//     navigate('/');
//   };

//   return (
//     <section className="login">
//       <h1 className="heading">Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="inputBox">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <input type="submit" value="Login" className="btn" />
//       </form>
//     </section>
//   );
// };

// export default Login;