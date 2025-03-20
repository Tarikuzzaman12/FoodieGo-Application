"use client"
import { registerUser } from '@/app/action/auth/registerUser'
import { useRouter } from 'next/navigation'
import React from 'react'
import Swal from 'sweetalert2'

function RegisterForm() {
    const router = useRouter()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photoUrl = form.photoUrl.value
        const password = form.password.value
        const response = await registerUser({ name, email, photoUrl, password });

        if (response.success) {
            Swal.fire({
                title: "Success!",
                text: "Registration Successful!",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                router.push("/");
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: response.message || "Registration failed!",
                icon: "error",
                confirmButtonText: "Try Again",
            });
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name='name'
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name='email'
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Photo URL</label>
                    <input
                        type="text"
                        name='photoUrl'
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter photo URL"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name='password'
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default RegisterForm