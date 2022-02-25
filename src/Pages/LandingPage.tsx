import React from 'react';
import AppLogo from '../assets/icons/app-logo.svg';
import AuthFormsToggle from './AuthFormsToggle';

export default function LandingPage(): JSX.Element {
  return (
    <div className="bg-cyan w-full h-screen flex items-center">
      <div className="w-1/2 flex items-center flex-col justify-center">
        <img className="w-36 2xl:w-40" src={AppLogo} alt="collabee-logo" />

        <div className="px-10">
          <h1 className="text-white text-center text-3xl 2xl:text-5xl xl:leading-normal 2xl:leading-relaxed">
            Organizing your projects and collaborating with your team have never
            been so easy
          </h1>
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
        <AuthFormsToggle />
      </div>
    </div>
  );
}
