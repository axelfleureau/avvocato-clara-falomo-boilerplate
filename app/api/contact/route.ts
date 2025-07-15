import { type NextRequest, NextResponse } from "next/server"
import { createContact } from "@/lib/contacts"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validazione base
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "Tutti i campi sono obbligatori" }, { status: 400 })
    }

    // Salva il contatto in Firestore
    const contactId = await createContact({
      name,
      email,
      subject,
      message,
      source: "website_contact_form",
    })

    if (contactId) {
      return NextResponse.json({ message: "Messaggio inviato con successo", id: contactId })
    } else {
      return NextResponse.json({ message: "Errore nell'invio del messaggio" }, { status: 500 })
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ message: "Errore interno del server" }, { status: 500 })
  }
}
