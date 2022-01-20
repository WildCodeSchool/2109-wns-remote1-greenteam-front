import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import HomePage from './Pages/HomePage';
import ProjectList from './Pages/ProjectList';
import Admin from './Pages/Admin';
import LandingPage from './Pages/LandingPage';


function App(): JSX.Element {

  const location = window.location.pathname

  return (
    <div className="App">
      <Router>
        <div className="flex">
        {location !== '/' && <SideBar />}
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
