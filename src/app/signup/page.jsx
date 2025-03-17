import RegisterForm from "./components/RegisterForm";

export default function Signup() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-5">Sign Up</h2>
          <RegisterForm></RegisterForm>
          {/* Google Sign Up Button */}
          <div className="mt-4">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-400 py-2 rounded-lg hover:bg-gray-200 transition">
              <span>Sign up with Google</span>
            </button>
          </div>
  
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
  