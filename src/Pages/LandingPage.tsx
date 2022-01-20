import React from 'react';
import SignIn from '../components/SignIn';
import AppLogo from '../assets/icons/app-logo.svg';

export default function LandingPage(): JSX.Element {
  return (
  <div className="bg-cyan w-full h-screen flex">
    
    <div className="w-1/2 flex items-center flex-col justify-center">
      <img className="w-36" src={AppLogo} alt="collabee-logo" />

      <div className="px-10">
      <h1 className="text-white text-center text-3xl xl:text-4xl leading-normal">Organizing your projects and collaborating with your team have never been so easy</h1>
      </div>

    </div>

  <div className="border w-1/2">
  <SignIn />
  </div>
  
  </div>
  );
}
