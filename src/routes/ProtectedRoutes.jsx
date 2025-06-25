// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import Dashboard from '../components/pages/Dashboard/Dashboard';
// import Profile from '../components/pages/Dashboard/Profile';
// import Settings from '../components/pages/Dashboard/Settings';

// const ProtectedRoute = ({ isAuthenticated }) => {
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
//   return <Outlet />;
// };

// const ProtectedRoutes = () => {
//   const isAuthenticated = false; // Replace with actual auth logic (e.g., from context or state)

//   return (
//     <Routes>
//       <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// };

// export default ProtectedRoutes;


import React from 'react'

const ProtectedRoutes = () => {
  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes