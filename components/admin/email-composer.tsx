"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Send, X } from "lucide-react"

interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
}

interface EmailComposerProps {
  contact?: Contact | null
  isOpen: boolean
  onClose: () => void
  onEmailSent: () => void
}

export default function EmailComposer({ contact, isOpen, onClose, onEmailSent }: EmailComposerProps) {
  const [formData, setFormData] = useState({
    to: contact?.email || "",
    subject: contact ? `Re: ${contact.subject}` : "",
    message: contact
      ? `Gentile ${contact.name},\n\nGrazie per avermi contattato riguardo "${contact.subject}".\n\n`
      : "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setAlert(null)

    try {
      const response = await fetch("/api/admin/send-email", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setAlert({ type: "success", message: "Email inviata con successo!" })
        setTimeout(() => {
          onEmailSent()
          onClose()
          setAlert(null)
        }, 2000)
      } else {
        setAlert({ type: "error", message: result.error || "Errore nell'invio dell'email" })
      }
    } catch (error) {
      setAlert({ type: "error", message: "Errore di connessione" })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Componi Email
          </DialogTitle>
          <DialogDescription>{contact ? `Rispondi a ${contact.name}` : "Invia una nuova email"}</DialogDescription>
        </DialogHeader>

        {alert && (
          <Alert className={`${alert.type === "error" ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}>
            <AlertDescription className={alert.type === "error" ? "text-red-800" : "text-green-800"}>
              {alert.message}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="to">Destinatario</Label>
            <Input
              id="to"
              type="email"
              value={formData.to}
              onChange={(e) => handleInputChange("to", e.target.value)}
              placeholder="email@esempio.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="subject">Oggetto</Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              placeholder="Oggetto dell'email"
              required
            />
          </div>

          <div>
            <Label htmlFor="message">Messaggio</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Scrivi il tuo messaggio qui..."
              rows={12}
              required
            />
          </div>

          {contact && (
            <Card className="bg-gray-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Messaggio originale</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-sm space-y-1">
                  <p>
                    <strong>Da:</strong> {contact.name} ({contact.email})
                  </p>
                  <p>
                    <strong>Oggetto:</strong> {contact.subject}
                  </p>
                  <div className="mt-2 p-2 bg-white rounded border">
                    <p className="whitespace-pre-wrap text-xs">{contact.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              <X className="h-4 w-4 mr-2" />
              Annulla
            </Button>
            <Button type="submit" disabled={isLoading}>
              <Send className="h-4 w-4 mr-2" />
              {isLoading ? "Invio..." : "Invia Email"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
