"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'

export default function () {
    const session = useSession()
    const router = useRouter()
    const handleSocialLogin = (providerName) => {
        signIn(providerName)
    }

    useEffect(() => {
        if(session?.status == "authenticated"){
            router.push('/')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Google login successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }, [session?.status])

    return (
        <div>
            <div className="mt-4">
                <button onClick={() => handleSocialLogin("google")} className="w-full flex items-center justify-center gap-2 border border-gray-400 py-2 rounded-lg hover:bg-gray-200 transition">
                    <span>Sign in with Google</span>
                </button>
            </div>
        </div>
    )
}
