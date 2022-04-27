/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { VERIFY_USER } from '../graphql/queries';

export default function AuthGuard({
  children,
}: {
  children: any;
}): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const { error, data } = useQuery(VERIFY_USER);

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
}
