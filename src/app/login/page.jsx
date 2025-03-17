"use client"

import LoginForm from "./conponents/LoginForm";
import SocialLogin from "./conponents/SocialLogin";

export default function Signin() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-5">Sign In</h2>
        <LoginForm></LoginForm>
        {/* Google Sign In Button */}
        <SocialLogin></SocialLogin>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
    
  );
}
