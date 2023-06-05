import User from "@/models/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    const { name, email, password } = await req.json()
    await connect()

    const newUser = new User()

    try {

    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        })

    }
}