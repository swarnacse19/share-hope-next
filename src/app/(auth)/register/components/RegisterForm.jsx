"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import SocialLogin from "../../login/components/SocialLogin";
import { registerUser } from "@/app/actions/registerUser";

const RegisterForm = () => {
  const router = useRouter();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(""); 
  const [imagePreview, setImagePreview] = useState(null);
  
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setImage(""); 
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in all required fields (Name, Email, Password).");
      return;
    }
    
    setLoading(true);
    toast("Submitting...");

    const userData = {
      name: name.trim(),
      email: email.trim(),
      password: password, 
      image: image.trim() === "" ? "https://37assets.37signals.com/svn/765-default-avatar.png" : image, 
      role: "user",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await registerUser(userData);
      
      if (res?.insertedId) {
        toast.success("Registration complete! Redirecting to login...");
        setName("");
        setEmail("");
        setPassword("");
        setImage("");
        setImagePreview(null);
        
        router.push("/login");
      } else {
        
        toast.error("Registration failed. A user with this email may already exist.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl border border-gray-100">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
        </div>

        {/* Google Sign-Up Button */}
        <SocialLogin />

        {/* Separator */}
        <div className="flex items-center justify-between">
          <div className="w-full border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500 font-medium bg-white">
            Or
          </span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img
                src={imagePreview || "/avatar.jpg"}
                alt="Profile Preview"
                className="w-28 h-28 rounded-full border-4 border-[#04b1ac] object-cover shadow-md"
              />
              <label
                htmlFor="photo"
                className="absolute bottom-0 right-0 bg-[#04b1ac] hover:bg-[#027874] text-white text-xs px-3 py-1.5 rounded-full cursor-pointer shadow-md transition duration-300"
              >
                Upload
              </label>
              <input
                id="photo"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={loading} 
              className="group relative cursor-pointer w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out disabled:opacity-50"
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#04b1ac] hover:text-[#027874]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;