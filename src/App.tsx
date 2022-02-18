import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SideBar from './components/SideBar';
import HomePage from './Pages/HomePage';
import ProjectList from './Pages/ProjectList';
import Admin from './Pages/Admin';
import LandingPage from './Pages/LandingPage';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
  cache: new InMemoryCache()
});

// const GET_ALL_CURRENT_PROJECTS = gql`
//   query GetAllCurrentProjects {
//     project {
//       id
//       title
//       description
//       picture
//       start_date
//       end_date
//       tickets
//     }
//   }
// `;

function App(): JSX.Element {

  const location = window.location.pathname

  return (
    <ApolloProvider client={client}>
      <div className="App">
      <Router>
        <div className="flex">
        {location !== '/' && <SideBar />}
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage name="greenteam" />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />
        </Routes>

        </div>
      </Router>
    </div>
    </ApolloProvider>
    
  );
}

export default App;
