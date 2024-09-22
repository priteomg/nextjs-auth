"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

function Navbar({ session }) {

    return (
        <nav className="bg-slate-500 text-white p-5 ">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Link href="/">Next Auth</Link>
                    <div>
                        <ul className="flex">
                            {!session ? (
                                <>
                                    <li className="mx-3">
                                        <Link href="/login">Sign in</Link>
                                    </li>
                                    <li className="mx-3">
                                        <Link href="/register">Sign up</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="mx-3">
                                        <a
                                            href='/welcome'
                                            className="bg-gray-500 border py-2 px-3 rounded-md text-lg my-2 hover:cursor-pointer"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li className="mx-3">
                                        <a
                                            onClick={() => signOut()}
                                            className="text-white bg-red-500 border py-2 px-3 rounded-md text-lg my-2 hover:cursor-pointer"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
