"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function RegisterPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmpassword] = useState('')
    const [error, setError] = useState('')

    const onSubmitForm = async (event) => {
        event.preventDefault()

        console.log("🚀 ~ onSubmit ~ event:", event.target.value)

        if (password !== confirmPassword) {
            setError('Password not match')
            return
        }




        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill all input')
            return
        }

        try {

            const res = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })

            if (res.ok) {
                const form = event.target
                setError('')
                form.reset()
            } else {
                console.log('User registration failed')
            }

        } catch (error) {
            console.log('Error during registration', error)
        }

    }

    return (
        <div>
            <Navbar />
            <div className='container m-auto mx-16 py-5'>
                <h3>Register</h3>
                <hr className='my-3' />
                <form action='' onSubmit={onSubmitForm}>

                    {error && (
                        <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                            {error}
                        </div>
                    )}

                    <input onChange={(e) => setName(e.target.value)} id='name' className='block bg-gray-200 my-2 p-2 rounded-md' type='text' placeholder='Enter your name' />
                    <input onChange={(e) => setEmail(e.target.value)} id='email' className='block bg-gray-200 my-2 p-2 rounded-md' type='email' placeholder='Enter your email' />
                    <input onChange={(e) => setPassword(e.target.value)} id='password' className='block bg-gray-200 my-2 p-2 rounded-md' type='password' placeholder='Enter your password' />
                    <input onChange={(e) => setConfirmpassword(e.target.value)} id='confirmPassword' className='block bg-gray-200 my-2 p-2 rounded-md' type='password' placeholder='Confirm your password' />
                    <button type='submit' className='bg-green-600 p-2 text-white rounded-md'>Sign up</button>
                    <hr className='my-3' />
                    <p>Already have an account? <Link href='/login' className='text-blue-500 hover:underline'>Login here!</Link></p>
                </form>
            </div>

        </div>
    )
}

export default RegisterPage
