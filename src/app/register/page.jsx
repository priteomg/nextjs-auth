import React from 'react'
import Navbar from '../components/Navbar'

function RegisterPage() {
    return (
        <div>
            <Navbar />
            <div className='container m-auto py-5'>
                <h3>Register</h3>
                <hr className='my-3' />
                <form action=''>
                    <input className='block bg-gray-200 my-2 p-2 rounded-md' type='text' placeholder='Enter your name' />
                    <input className='block bg-gray-200 my-2 p-2 rounded-md' type='email' placeholder='Enter your email' />
                    <input className='block bg-gray-200 my-2 p-2 rounded-md' type='password' placeholder='Enter your password' />
                    <input className='block bg-gray-200 my-2 p-2 rounded-md' type='password' placeholder='Confirm your password' />
                    <button type='submit' className='bg-green-600 p-2 text-white rounded-md'>Sign up</button>
                </form>
            </div>

        </div>
    )
}

export default RegisterPage
