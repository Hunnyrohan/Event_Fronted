// import React, { useState } from 'react';
// import './Auth.css'; // Use a common CSS file for both Login and Signup

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle signup logic here
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <section className="auth">
//       <h1 className="heading">Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="inputBox">
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="inputBox">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="inputBox">
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <input type="submit" value="Sign Up" className="btn" />
//       </form>
//     </section>
//   );
// };

// export default Signup;