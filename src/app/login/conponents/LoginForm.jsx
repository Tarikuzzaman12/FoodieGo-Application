"use client"
import React from 'react'
import { signIn } from "next-auth/react"
import Swal from 'sweetalert2'

function LoginForm() {
    const handleLoginSubmit = async(e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        try{
            await signIn("credentials", { email, password, callbackUrl: '/' })
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }catch(e){
            console.log(e.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
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
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default LoginForm