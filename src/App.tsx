import React from 'react';
import './App.css';
import { useLocation, useRoutes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import SideBar from './components/SideBar';
import client from './services/apollo-config';
import HomePage from './Pages/HomePage';
import ProjectList from './Pages/ProjectList/ProjectList';
import Admin from './Pages/Admin';
import LandingPage from './Pages/LandingPage';
import ProjectDetails from './Pages/ProjectDetails';
import Backlog from './Pages/Backlog';

function App(): JSX.Element {
  const location = useLocation();
  const Routes = () =>
    useRoutes([
      { path: '/', element: <LandingPage /> },
      { path: '/homepage', element: <HomePage name="greenteam" /> },
      { path: '/projects', element: <ProjectList /> },
      { path: '/admin', element: <Admin /> },
      { path: '/projectdetails', element: <ProjectDetails /> },
      { path: '/backlog', element: <Backlog /> },
    ]);

  return (
    <ApolloProvider client={client}>
      <div className="flex">
        {location.pathname !== '/' && <SideBar />}
        <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;
