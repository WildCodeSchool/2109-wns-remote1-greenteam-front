/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export default function AuthFormsToggle(): JSX.Element {

  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="max-w-md w-full bg-white rounded-large pb-16 px-4 sm:px-6 lg:px-8">

      {!showSignUp ? <SignIn /> : <SignUp />}

    <div className="text-sm flex justify-center mt-6">
    {!showSignUp ? "No account?" : "Already have an account?"}<p className="font-medium underline text-orange hover:text-darkOrange ml-1"><span onClick={() => setShowSignUp(!showSignUp)} className="cursor-pointer">{!showSignUp ? "Sign up !" : "Sign in !"}</span>
  </p>
  </div>

</div>
  );
};
