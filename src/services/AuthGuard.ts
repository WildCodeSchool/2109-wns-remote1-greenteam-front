import { Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import React, { FC, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { VERIFY_USER } from '../graphql/queries';

const AuthGuard = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(VERIFY_USER);

  useEffect(() => {
    if (error) {
      navigate('/');
      return;
    }
    if (!data) {
      return;
    }

    localStorage.setItem('user', data.verifyUser);
  }, [location.pathname, data, error]);
  return children;
};

export default AuthGuard;
