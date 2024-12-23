import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from './components/auth/LoginForm';
import { MainPage } from './pages/MainPage';
import { useAuth } from './hooks/useAuth';

// Protected route wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  // if (!user) return <Navigate to="/" replace />;
  // return <>{children}</>;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
        <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/main"
            element={
                <MainPage />
            }
          />
        </Routes>
      </Router>
      </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import YourComponent from "./YourComponent";
// import HomePage from "./HomePage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/other" element={<YourComponent />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;