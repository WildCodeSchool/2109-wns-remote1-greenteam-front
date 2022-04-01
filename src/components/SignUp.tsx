/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../graphql/generated';

export default function SignUp(): JSX.Element {
  const navigate = useNavigate();

  const [firstnameInput, setFirstname] = useState<string>('');
  const [lastnameInput, setLastname] = useState<string>('');
  const [emailInput, setEmail] = useState<string>('');
  const [passwordInput, setPassword] = useState<string>('');
  const [confirmPasswordInput, setConfirmPassword] = useState<string>('');

  const [register, { loading }] = useRegisterMutation({
    variables: {
      firstname: firstnameInput,
      lastname: lastnameInput,
      email: emailInput,
      password: passwordInput,
    },
    context: {
      headers: {
        'api-authorization': process.env.REACT_BACKEND_API_AUTHORIZATION_TOKEN,
      },
    },
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (passwordInput === confirmPasswordInput) {
      const signup = await register();
      if (signup?.data?.register.statusCode === 201) {
        navigate('/homepage');
      }
    }
  };

  return (
    <div>
      <h2 className="mt-10 mb-10 text-center text-5xl font-extrabold text-orange">
        Sign up
      </h2>

      <form className="mt-8" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              value={firstnameInput}
              name="name"
              onChange={(e) => setFirstname(e.target.value)}
              type="name"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="sr-only">
              Last name
            </label>
            <input
              id="lastname"
              value={lastnameInput}
              name="lastname"
              onChange={(e) => setLastname(e.target.value)}
              type="lastname"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email
            </label>
            <input
              id="email-address"
              value={emailInput}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              value={passwordInput}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="sr-only">
              Confirm password
            </label>
            <input
              id="confirm-password"
              value={confirmPasswordInput}
              name="confirm-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="confirm-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div className="text-sm mb-6 m-1.5">
          {passwordInput !== confirmPasswordInput && (
            <p className="font-medium">Passwords does not match</p>
          )}
        </div>

        <div className="text-sm mb-6 m-1.5">
          {loading && <p className="font-medium">Loading ...</p>}
        </div>

        <div className="mt-6 space-y-6">
          <button
            type="submit"
            onClick={onSubmit}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-bold rounded-md text-white bg-orange hover:bg-darkOrange focus:outline-none "
          >
            Sign me up !
          </button>
        </div>
      </form>
    </div>
  );
}
