import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './components/SideBar';
import HomePage from './Pages/HomePage/HomePage';
import ProjectList from './Pages/ProjectList';
import Admin from './Pages/Admin';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

const AppContainer = styled.div`
display: flex;
`

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <AppContainer>
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage name="greenteam" />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/projectdetails" element={<ProjectDetails />} />
          </Routes>
        </AppContainer>
      </Router>
    </div>
  );
}

export default App;
