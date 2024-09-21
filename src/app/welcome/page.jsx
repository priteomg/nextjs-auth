"use cliet";

import React from "react";
import Navbar from "@/app/components/Navbar";

function WelcomePage() {
    return (
        <div>
            <Navbar />
            <div className="container mx-3 my-3">
                <h3 className='text-xl'>Welcome User</h3>
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
