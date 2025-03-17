import { signIn } from 'next-auth/react'
import React from 'react'

export default function () {
    const handleSocialLogin = async(providerName) => {
        const result = await signIn(providerName, {redirect: false})
        console.log(result);
    }
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
