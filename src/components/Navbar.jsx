import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center gap-5 m-5 p-5">
      <Link href="/login">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Signin
        </button>
      </Link>
      <Link href="/signup">
        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
          Signup
        </button>
      </Link>
    </div>
  );
}
