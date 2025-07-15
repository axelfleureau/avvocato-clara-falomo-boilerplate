"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Download,
  Upload,
  LogOut,
  Mail,
  Calendar,
  Users,
  MoreHorizontal,
  Eye,
  Trash2,
  FileText,
  Send,
  Plus,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import EmailComposer from "./email-composer"

interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
  status: "new" | "read" | "replied"
  source: string
}

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [emailComposer, setEmailComposer] = useState<{
    isOpen: boolean
    contact?: Contact | null
  }>({ isOpen: false, contact: null })

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/admin/contacts", { credentials: "include" })
      if (response.ok) {
        const data = await response.json()
        setContacts(data.contacts)
      }
    } catch (error) {
      console.error("Error fetching contacts:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateContactStatus = async (contactId: string, status: Contact["status"]) => {
    try {
      const response = await fetch(`/api/admin/contacts/${contactId}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        setContacts(contacts.map((contact) => (contact.id === contactId ? { ...contact, status } : contact)))
        showAlert("success", "Status aggiornato con successo")
      }
    } catch (error) {
      showAlert("error", "Errore nell'aggiornamento dello status")
    }
  }

  const deleteContact = async (contactId: string) => {
    if (!confirm("Sei sicuro di voler eliminare questo contatto?")) return

    try {
      const response = await fetch(`/api/admin/contacts/${contactId}`, {
        method: "DELETE",
        credentials: "include",
      })

      if (response.ok) {
        setContacts(contacts.filter((contact) => contact.id !== contactId))
        showAlert("success", "Contatto eliminato con successo")
      }
    } catch (error) {
      showAlert("error", "Errore nell'eliminazione del contatto")
    }
  }

  const openEmailComposer = (contact?: Contact) => {
    setEmailComposer({ isOpen: true, contact })
  }

  const closeEmailComposer = () => {
    setEmailComposer({ isOpen: false, contact: null })
  }

  const handleEmailSent = () => {
    if (emailComposer.contact) {
      updateContactStatus(emailComposer.contact.id, "replied")
    }
    showAlert("success", "Email inviata con successo!")
  }

  const exportToCSV = () => {
    const headers = ["Nome", "Email", "Oggetto", "Messaggio", "Data", "Status", "Fonte"]
    const csvContent = [
      headers.join(","),
      ...filteredContacts.map((contact) =>
        [
          `"${contact.name}"`,
          `"${contact.email}"`,
          `"${contact.subject}"`,
          `"${contact.message.replace(/"/g, '""')}"`,
          `"${new Date(contact.timestamp).toLocaleString("it-IT")}"`,
          `"${contact.status}"`,
          `"${contact.source}"`,
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `contatti_${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleImportCSV = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/admin/contacts/import", {
        method: "POST",
        credentials: "include",
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        showAlert("success", `Importati ${result.imported} contatti`)
        fetchContacts()
      } else {
        showAlert("error", "Errore nell'importazione del file")
      }
    } catch (error) {
      showAlert("error", "Errore nell'importazione del file")
    }

    // Reset input
    event.target.value = ""
  }

  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ type, message })
    setTimeout(() => setAlert(null), 5000)
  }

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || contact.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = {
    total: contacts.length,
    new: contacts.filter((c) => c.status === "new").length,
    read: contacts.filter((c) => c.status === "read").length,
    replied: contacts.filter((c) => c.status === "replied").length,
  }

  const getStatusBadge = (status: Contact["status"]) => {
    const variants = {
      new: "destructive",
      read: "secondary",
      replied: "default",
    } as const

    const labels = {
      new: "Nuovo",
      read: "Letto",
      replied: "Risposto",
    }

    return <Badge variant={variants[status]}>{labels[status]}</Badge>
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-pearl-gray">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-cormorant font-light text-primary">Dashboard Amministratore</h1>
              <p className="text-sm text-gray-600">Gestione contatti - Avv. Clara Falomo</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => openEmailComposer()} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Nuova Email
              </Button>
              <Button onClick={onLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Esci
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Alert */}
        {alert && (
          <Alert
            className={`mb-6 ${alert.type === "error" ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}
          >
            <AlertDescription className={alert.type === "error" ? "text-red-800" : "text-green-800"}>
              {alert.message}
            </AlertDescription>
          </Alert>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Totale Contatti</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nuovi</CardTitle>
              <Mail className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.new}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Letti</CardTitle>
              <Eye className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.read}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risposti</CardTitle>
              <Calendar className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.replied}</div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Gestione Contatti</CardTitle>
            <CardDescription>Visualizza, filtra ed esporta i contatti ricevuti dal sito web</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1">
                <Label htmlFor="search">Cerca</Label>
                <Input
                  id="search"
                  placeholder="Cerca per nome, email o oggetto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="status">Filtra per status</Label>
                <select
                  id="status"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="all">Tutti</option>
                  <option value="new">Nuovi</option>
                  <option value="read">Letti</option>
                  <option value="replied">Risposti</option>
                </select>
              </div>

              <div className="flex gap-2">
                <Button onClick={exportToCSV} variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Esporta CSV
                </Button>

                <div className="relative">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleImportCSV}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Importa CSV
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contacts Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Oggetto</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Azioni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell className="font-medium">{contact.name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell className="max-w-xs truncate">{contact.subject}</TableCell>
                      <TableCell>{new Date(contact.timestamp).toLocaleDateString("it-IT")}</TableCell>
                      <TableCell>{getStatusBadge(contact.status)}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setSelectedContact(contact)}>
                              <Eye className="h-4 w-4 mr-2" />
                              Visualizza
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => openEmailComposer(contact)}>
                              <Send className="h-4 w-4 mr-2" />
                              Rispondi via Email
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateContactStatus(contact.id, "read")}>
                              <FileText className="h-4 w-4 mr-2" />
                              Segna come letto
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateContactStatus(contact.id, "replied")}>
                              <Mail className="h-4 w-4 mr-2" />
                              Segna come risposto
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => deleteContact(contact.id)} className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Elimina
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {filteredContacts.length === 0 && (
          <div className="text-center py-8 text-gray-500">Nessun contatto trovato con i filtri selezionati.</div>
        )}
      </div>

      {/* Contact Detail Modal */}
      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Dettagli Contatto</DialogTitle>
            <DialogDescription>Informazioni complete del messaggio ricevuto</DialogDescription>
          </DialogHeader>

          {selectedContact && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Nome</Label>
                  <p className="text-sm text-gray-900">{selectedContact.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <p className="text-sm text-gray-900">{selectedContact.email}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Oggetto</Label>
                <p className="text-sm text-gray-900">{selectedContact.subject}</p>
              </div>

              <div>
                <Label className="text-sm font-medium">Messaggio</Label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Data</Label>
                  <p className="text-sm text-gray-900">{new Date(selectedContact.timestamp).toLocaleString("it-IT")}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Status</Label>
                  <div className="mt-1">{getStatusBadge(selectedContact.status)}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={() => updateContactStatus(selectedContact.id, "read")} variant="outline" size="sm">
                  Segna come letto
                </Button>
                <Button onClick={() => updateContactStatus(selectedContact.id, "replied")} variant="outline" size="sm">
                  Segna come risposto
                </Button>
                <Button onClick={() => openEmailComposer(selectedContact)} size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Rispondi via Email
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Email Composer */}
      <EmailComposer
        contact={emailComposer.contact}
        isOpen={emailComposer.isOpen}
        onClose={closeEmailComposer}
        onEmailSent={handleEmailSent}
      />
    </div>
  )
}
