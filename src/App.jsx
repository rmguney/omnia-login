import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ParallaxScene from './components/ParallaxScene';
import Sidebar from './components/Sidebar';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Bir hata oluştu.</h1>;
    }

    return this.props.children; 
  }
}

const App = () => {

  return (
    <Router>
      <ParallaxScene />
      <div className="content-wrapper relative z-10">
        <div className="flex flex-col-reverse lg:flex-row min-h-screen">
          <Sidebar />
          <div className="flex-grow">
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Add other routes here */}
              </Routes>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;