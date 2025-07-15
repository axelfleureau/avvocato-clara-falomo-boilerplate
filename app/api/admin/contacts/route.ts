import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { getContacts } from "@/lib/contacts"

function verifyAuth(request: NextRequest) {
  const token = request.cookies.get("admin-token")?.value

  if (!token) {
    throw new Error("Token non trovato")
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    return decoded
  } catch (error) {
    throw new Error("Token non valido")
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verifica autenticazione
    verifyAuth(request)

    // Ottieni contatti da Firestore
    const contacts = await getContacts()

    return NextResponse.json({ contacts })
  } catch (error: any) {
    console.error("Error in contacts API:", error)
    return NextResponse.json(
      { message: error.message || "Errore interno del server" },
      { status: error.message === "Token non trovato" || error.message === "Token non valido" ? 401 : 500 },
    )
  }
}
