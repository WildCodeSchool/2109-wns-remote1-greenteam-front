/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function SignIn(): JSX.Element {
  return (
    <div>
      <h2 className="mt-16 mb-16 text-center text-5xl font-extrabold text-orange">
        Sign in
      </h2>
    
    <form className="mt-8" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm space-y-6">
        <div>
          <label htmlFor="email-address" className="sr-only">Email</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Email address" />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Password" />
        </div>
      </div>


        <div className="text-sm mb-6 m-1.5">
          <a href="/" className="font-medium hover:underline">
            Forgot your password?
          </a>
        </div>
    

      <div className="space-y-6">
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-bold rounded-md text-white bg-orange hover:bg-darkOrange focus:outline-none ">
          Log me in !
        </button>
  
        </div>
    </form>
  </div>
  );
}
