import React from 'react';
import './App.css';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import SideBar from './components/SideBar';
import HomePage from './Pages/HomePage';
import ProjectList from './Pages/ProjectList/ProjectList';
import Admin from './Pages/Admin';
import LandingPage from './Pages/LandingPage';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import client from './services/apollo-config';
import AuthGuard from './services/AuthGuard';

function App(): JSX.Element {
  const location = useLocation();

  const Routes = () =>
    useRoutes([
      { path: '/', element: <LandingPage /> },
      {
        path: '/homepage',
        element: (
          <AuthGuard>
            <HomePage name="greenteam" />
          </AuthGuard>
        ),
      },
      {
        path: '/projects',
        element: (
          <AuthGuard>
            <ProjectList />
          </AuthGuard>
        ),
      },
      { path: '/admin', element: <Admin /> },
      {
        path: '/projectdetails',
        element: (
          <AuthGuard>
            <ProjectDetails />
          </AuthGuard>
        ),
      },
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
