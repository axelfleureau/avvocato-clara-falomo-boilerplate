import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "Clara2024!Admin",
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Verifica credenziali
    if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
      return NextResponse.json({ message: "Credenziali non valide" }, { status: 401 })
    }

    // Genera JWT token
    const token = jwt.sign({ username, role: "admin" }, process.env.JWT_SECRET!, { expiresIn: "24h" })

    // Crea response con cookie
    const response = NextResponse.json({ message: "Login effettuato con successo" })

    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60, // 24 ore
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ message: "Errore interno del server" }, { status: 500 })
  }
}
