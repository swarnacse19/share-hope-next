"use client";
import { registerUser } from '@/app/actions/registerUser';
import Link from 'next/link';
import SocialLogin from '../../login/components/SocialLogin';

const RegisterForm = () => {
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.photo.value;
        const password = form.password.value;
        const role = "user";
        const createdAt = new Date().toISOString();
        registerUser({name, email, image, password, role, createdAt});
    }
  return (
    <div className="min-h-screen flex mb-20 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl border border-gray-100">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
        </div>

        {/* Google Sign-Up Button */}
        <SocialLogin></SocialLogin>

        {/* Separator */}
        <div className="flex items-center justify-between">
          <div className="w-full border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500 font-medium bg-white">
            Or
          </span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-3">
            {/* Name Field */}
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            {/* Photo Url */}
            <div>
              <label htmlFor="photo-url" className="sr-only">
                Photo Url
              </label>
              <input
                id="photo-url"
                name="photo"
                type="url"
                autoComplete="photo"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Photo Url"
              />
            </div>
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-teal-600 hover:text-teal-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;