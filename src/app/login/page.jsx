"use client"

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await signIn('credentials', {
                email, password, redirect: false
            })

            if (res.error) {
                setError('Invalid credentials')
                return
            }
            console.log("🚀 ~ handleSubmit ~ res:", res)

            router.replace('/welcome')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="container m-auto mx-16 py-5">
                <h3>Login</h3>
                <hr className="my-3" />

                {error && (
                    <div className="bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <input
                        className="block bg-gray-200 my-2 p-2 rounded-md"
                        type="text"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="block bg-gray-200 my-2 p-2 rounded-md"
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-green-600 p-2 text-white rounded-md"
                    >
                        Sign in
                    </button>
                </form>
                <hr className="my-3" />
                <p>
                    don't have an account?{" "}
                    <Link href="/register" className="text-blue-500 hover:underline">
                        Register here!
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
