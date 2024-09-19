import React from 'react'
import Navbar from '../components/Navbar'

function LoginPage() {
    return (
        <div>
            <Navbar />
            <div className='container m-auto py-5'>
                <h3>Login</h3>
                <hr className='my-3' />
                <form action=''>
                    <input className='block bg-gray-200 my-2 p-2 rounded-md' type='text' placeholder='Enter your name' />
                    <input className='block bg-gray-200 my-2 p-2 rounded-md' type='password' placeholder='Enter your password' />
                    <button type='submit' className='bg-green-600 p-2 text-white rounded-md'>Sign in</button>
                </form>
            </div>

        </div>
    )
}

export default LoginPage
