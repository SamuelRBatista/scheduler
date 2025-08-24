import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Schedule } from './pages/Schedule';
import { ServicesPage} from './pages/Services';
import { Login } from './pages/Login';
import { Navbar } from './pages/Navbar';
import { AuthProvider } from './contexts/AuthProvider';
import   PrivateRoute  from './routes/PrivateRoute';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                   <Home />
              </PrivateRoute>              
           
            }
          />
          <Route
            path="/services"
            element={
              <PrivateRoute>
                <ServicesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/schedule"
            element={
              <PrivateRoute>
                <Schedule />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
