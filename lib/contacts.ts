import { db } from "./firebase"
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore"

export interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
  status: "new" | "read" | "replied"
  source: string
}

export async function getContacts(): Promise<Contact[]> {
  try {
    const contactsRef = collection(db, "contacts")
    const q = query(contactsRef, orderBy("timestamp", "desc"))
    const snapshot = await getDocs(q)

    const contacts: Contact[] = []
    snapshot.forEach((docSnap) => {
      const data = docSnap.data()
      contacts.push({
        id: docSnap.id,
        name: data.name || "",
        email: data.email || "",
        subject: data.subject || "",
        message: data.message || "",
        timestamp: data.timestamp?.toDate?.()?.toISOString() || data.timestamp || new Date().toISOString(),
        status: data.status || "new",
        source: data.source || "website_contact_form",
      })
    })

    return contacts
  } catch (error) {
    console.error("Error fetching contacts from Firestore:", error)
    return []
  }
}

export async function updateContactStatus(contactId: string, status: Contact["status"]): Promise<boolean> {
  try {
    const contactRef = doc(db, "contacts", contactId)
    await updateDoc(contactRef, {
      status,
      updatedAt: serverTimestamp(),
    })
    return true
  } catch (error) {
    console.error("Error updating contact status:", error)
    return false
  }
}

export async function deleteContact(contactId: string): Promise<boolean> {
  try {
    const contactRef = doc(db, "contacts", contactId)
    await deleteDoc(contactRef)
    return true
  } catch (error) {
    console.error("Error deleting contact:", error)
    return false
  }
}

export async function createContact(contactData: Omit<Contact, "id" | "timestamp" | "status">): Promise<string | null> {
  try {
    const contactsRef = collection(db, "contacts")
    const docRef = await addDoc(contactsRef, {
      ...contactData,
      timestamp: serverTimestamp(),
      status: "new",
      createdAt: serverTimestamp(),
    })
    return docRef.id
  } catch (error) {
    console.error("Error creating contact:", error)
    return null
  }
}
