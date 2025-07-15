import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { jwtVerify } from "jose"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-here")

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin-token")?.value

    if (!token) {
      return NextResponse.json({ message: "Token non trovato" }, { status: 401 })
    }

    // Verify JWT token
    await jwtVerify(token, JWT_SECRET)

    return NextResponse.json({ message: "Token valido" })
  } catch (error) {
    console.error("Token verification error:", error)
    return NextResponse.json({ message: "Token non valido" }, { status: 401 })
  }
}
