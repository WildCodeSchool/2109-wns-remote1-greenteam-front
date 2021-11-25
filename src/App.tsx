import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideBar from './components/SideBar';
import HomePage from './Pages/HomePage';
import ProjectList from './Pages/ProjectList';
import Admin from './Pages/Admin';

function App(): JSX.Element {
  return (
    <div className="App">
      <SideBar />
      <Router>
      <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/projects' element={<ProjectList />} />
      <Route path='/admin' element={<Admin />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
