import { NextResponse } from "next/server";


export async function POST(req) {

    try {

        const {name , email , password} = await req.json()
        console.log("🚀 ~ Post ~ name:", name)
        console.log("🚀 ~ Post ~ email:", email)
        console.log("🚀 ~ Post ~ password:", password)

        return NextResponse.json({message: 'User registered'}, {status: 200})

    } catch (error) {
        NextResponse.json({ message: 'An error occur during registration' }, { status: 500 })
    }

}