/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function SignUp(): JSX.Element {
  return (
    <div>
      
      <h2 className="mt-10 mb-10 text-center text-5xl font-extrabold text-orange">
        Sign up
      </h2>

    <form className="mt-8" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm space-y-6">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input id="name" name="name" type="name" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="lastname" className="sr-only">Last name</label>
          <input id="lastname" name="lastname" type="lastname" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Last Name" />
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">Email</label>
          <input id="email-address" name="email" type="email" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Email address" />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Password" />
        </div>
        <div>
          <label htmlFor="confirm-password" className="sr-only">Confirm password</label>
          <input id="confirm-password" name="confirm-password" type="confirm-password" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Confirm Password" />
        </div>
      </div>
    
      <div className="mt-6 space-y-6">
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-bold rounded-md text-white bg-orange hover:bg-darkOrange focus:outline-none ">
          Sign me up !
        </button>
        </div>
    </form>
  </div>
  
    );
}
