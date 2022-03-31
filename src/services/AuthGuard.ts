import { Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import React, { FC, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { VERIFY_USER } from '../graphql/queries';

const AuthGuard = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(VERIFY_USER);

  useEffect(() => {
    if (!data) return;
    console.log(data);

    if (data.user) {
      console.log(data);
      localStorage.setItem('user', data.user);
    } else {
      navigate('/');
    }
  }, [location.pathname, data]);
  return children;
};

export default AuthGuard;
