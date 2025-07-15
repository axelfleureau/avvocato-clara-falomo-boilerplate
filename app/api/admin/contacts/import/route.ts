import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { jwtVerify } from "jose"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-here")

async function verifyAuth(request: NextRequest) {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin-token")?.value

  if (!token) {
    throw new Error("Token non trovato")
  }

  await jwtVerify(token, JWT_SECRET)
}

export async function POST(request: NextRequest) {
  try {
    await verifyAuth(request)

    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ message: "Nessun file fornito" }, { status: 400 })
    }

    const text = await file.text()
    const lines = text.split("\n").filter((line) => line.trim())

    if (lines.length < 2) {
      return NextResponse.json({ message: "File CSV non valido" }, { status: 400 })
    }

    // Skip header row and process data
    const dataLines = lines.slice(1)
    let imported = 0

    for (const line of dataLines) {
      const columns = line.split(",").map((col) => col.replace(/"/g, "").trim())

      if (columns.length >= 4) {
        // In a real app, save to database
        console.log("Importing contact:", {
          name: columns[0],
          email: columns[1],
          subject: columns[2],
          message: columns[3],
        })
        imported++
      }
    }

    return NextResponse.json({
      message: "Importazione completata",
      imported,
    })
  } catch (error) {
    console.error("Error importing contacts:", error)
    return NextResponse.json({ message: "Errore nell'importazione" }, { status: 500 })
  }
}
