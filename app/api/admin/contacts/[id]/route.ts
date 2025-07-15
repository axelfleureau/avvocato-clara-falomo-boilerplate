import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { updateContactStatus, deleteContact } from "@/lib/contacts"

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

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verifica autenticazione
    verifyAuth(request)

    const { status } = await request.json()
    const success = await updateContactStatus(params.id, status)

    if (success) {
      return NextResponse.json({ message: "Status aggiornato con successo" })
    } else {
      return NextResponse.json({ message: "Errore nell'aggiornamento" }, { status: 500 })
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Errore interno del server" },
      { status: error.message === "Token non trovato" || error.message === "Token non valido" ? 401 : 500 },
    )
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verifica autenticazione
    verifyAuth(request)

    const success = await deleteContact(params.id)

    if (success) {
      return NextResponse.json({ message: "Contatto eliminato con successo" })
    } else {
      return NextResponse.json({ message: "Errore nell'eliminazione" }, { status: 500 })
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Errore interno del server" },
      { status: error.message === "Token non trovato" || error.message === "Token non valido" ? 401 : 500 },
    )
  }
}
