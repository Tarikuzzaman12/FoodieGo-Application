import SocialLogin from "../login/conponents/SocialLogin";
import RegisterForm from "./components/RegisterForm";

export default function Signup() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-5">Sign Up</h2>
          <RegisterForm></RegisterForm>
          {/* Google Sign Up Button */}
          <SocialLogin></SocialLogin>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    );
  }
  