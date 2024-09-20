import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'

function LoginPage() {
    return (
        <div>
            <Navbar />
            <div className='container m-auto mx-16 py-5'>
                <h3>Login</h3>
                <hr className='my-3' />
                <form action=''>
                    <input className='block bg-gray-200 my-2 p-2 rounded-md' type='text' placeholder='Enter your name' />
                    <input className='block bg-gray-200 my-2 p-2 rounded-md' type='password' placeholder='Enter your password' />
                    <button type='submit' className='bg-green-600 p-2 text-white rounded-md'>Sign in</button>
                </form>
                <hr className='my-3' />
                <p>don't have an account? <Link href='/register' className='text-blue-500 hover:underline'>Register here!</Link></p>
            </div>

        </div>
    )
}

export default LoginPage
