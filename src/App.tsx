import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import SideBar from './components/SideBar';
import HomePage from './Pages/HomePage';
import ProjectList from './Pages/ProjectList';
import Admin from './Pages/Admin';
import LandingPage from './Pages/LandingPage';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import client from './services/apollo-config';

function App(): JSX.Element {
  const location = window.location.pathname;

  return (
    <ApolloProvider client={client}>
      <Router>
        {location !== '/' && <SideBar />}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage name="greenteam" />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
