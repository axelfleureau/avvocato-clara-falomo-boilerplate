import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"

export async function POST(request: NextRequest) {
  try {
    // Verifica autenticazione
    const token = request.cookies.get("admin-token")?.value

    if (!token) {
      return NextResponse.json({ error: "Token non trovato" }, { status: 401 })
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET!)
    } catch (error) {
      return NextResponse.json({ error: "Token non valido" }, { status: 401 })
    }

    const body = await request.json()
    const { to, subject, message, replyTo } = body

    if (!to || !subject || !message) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 })
    }

    // Configura il transporter per l'invio delle email
    const transporter = nodemailer.createTransporter({
      host: "smtp.gmail.com", // o il tuo provider SMTP
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // clara.falomo@gmail.com
        pass: process.env.EMAIL_PASSWORD, // App password di Gmail
      },
    })

    // Template email professionale
    const emailTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Risposta da Avv. Clara Falomo</title>
        <style>
          body { font-family: 'Georgia', serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 28px; font-weight: 300; }
          .header p { margin: 5px 0 0 0; opacity: 0.9; }
          .content { background: white; padding: 30px; border-left: 4px solid #8B4513; }
          .message { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
          .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
          .contact-info { margin-top: 15px; font-size: 14px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Avv. Clara Falomo</h1>
            <p>Studio Legale</p>
          </div>
          
          <div class="content">
            <div class="message">
              ${message.replace(/\n/g, "<br>")}
            </div>
            
            <div class="signature">
              <strong>Avv. Clara Falomo</strong><br>
              <div class="contact-info">
                Studio Legale<br>
                Email: clara.falomo@gmail.com<br>
                Sito web: www.clarafalomo.it
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p>Questa email è stata inviata dallo Studio Legale dell'Avv. Clara Falomo</p>
            <p>Se non desideri più ricevere comunicazioni, ti preghiamo di contattarci.</p>
          </div>
        </div>
      </body>
    </html>
    `

    const mailOptions = {
      from: '"Avv. Clara Falomo" <clara.falomo@gmail.com>',
      to: to,
      subject: subject,
      replyTo: replyTo || "clara.falomo@gmail.com",
      html: emailTemplate,
    }

    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Email inviata con successo",
      messageId: info.messageId,
    })
  } catch (error) {
    console.error("Errore nell'invio dell'email:", error)
    return NextResponse.json(
      {
        error: "Errore nell'invio dell'email",
        details: error instanceof Error ? error.message : "Errore sconosciuto",
      },
      { status: 500 },
    )
  }
}
