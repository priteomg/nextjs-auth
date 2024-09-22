"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

function WelcomePage() {
    const { data: session, status } = useSession();


    const router = useRouter()

    if (status == "unauthenticated") router.replace("/login");

    return (
        <div>
            <Navbar session={session} />
            <div className="container mx-3 my-3">
                <h3 className="text-xl">Welcome {session?.user?.name}</h3>
                <p> {session?.user?.email}</p>

                <hr className="my-3" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
                    ipsa quo atque perferendis non ipsam quas quam dolorum sequi vel
                    quaerat omnis nihil iure, mollitia tempora. Mollitia debitis
                    voluptatem quam.
                </p>
            </div>
        </div>
    );
}

export default WelcomePage;
