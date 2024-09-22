"use client"

import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";

export default function Home() {

  const { data: session } = useSession()

  return (
    <main>
      <Navbar session={session} />
      <div className="container m-auto px-3">
        <h3 className='text-lg my-3'>Welcome Home</h3>
        <hr className='my-3' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          perspiciatis sint eos illum reiciendis fugit esse deleniti dolor nobis
          nihil et itaque quo rerum, nam atque placeat reprehenderit
          voluptatibus iure.
        </p>
      </div>
    </main>
  );
}
