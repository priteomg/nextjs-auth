import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='bg-slate-500 text-white p-5 '>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <Link href='/'>Next Auth</Link>
                    <div>
                        <ul className='flex'>
                            <li className='mx-3'>
                                <Link href='/login'>Sign in</Link>
                            </li>
                            <li className='mx-3'>
                                <Link href='/register'>Sign up </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav >
    )
}

export default Navbar
