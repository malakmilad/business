"use client"

import { useState } from "react"
import { Phone, Mail, Globe, Briefcase} from "lucide-react"
import { Card } from "@/components/ui/card"

export default function DigitalBusinessCard() {
  const [copied, setCopied] = useState<string | null>(null)

  const contactInfo = {
    name: "Senior Graphic Designer",
    fullName: "George Faheem Faheem",
    phone: "01277503400",
    email: "george.faheem90@gmail.com",
    website: "www.behance.net",
    title: "Senior Graphic Designer",
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      {/* Full width header */}
      <div className="fixed top-0 left-0 right-0 bg-[#2593CE] text-center text-white py-8">
        <h1 className="text-2xl font-bold mb-2">{contactInfo.fullName}</h1>
        <p className="text-lg">{contactInfo.name}</p>
      </div>

      <Card className="w-full max-w-md overflow-hidden bg-white rounded-xl shadow-xl mt-40">
        {/* Contact details with icons */}
        <div className="p-6 space-y-6">
          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-4 group cursor-pointer">
              <Phone className="h-5 w-5 text-[#2593CE] transition-transform duration-200 group-hover:scale-110" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Business</p>
              <p className="font-medium">{contactInfo.phone}</p>
            </div>
            <button onClick={() => copyToClipboard(contactInfo.phone, "phone")} className="text-blue-500">
              {copied === "phone" ? "Copied!" : ""}
            </button>
          </div>

          <hr className="border-gray-200" />

          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-4 group cursor-pointer">
              <Mail className="h-5 w-5 text-[#2593CE] transition-transform duration-200 group-hover:scale-110" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{contactInfo.email}</p>
            </div>
            <button onClick={() => copyToClipboard(contactInfo.email, "email")} className="text-blue-500">
              {copied === "email" ? "Copied!" : ""}
            </button>
          </div>

          <hr className="border-gray-200" />

          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-4 group cursor-pointer">
              <Globe className="h-5 w-5 text-[#2593CE] transition-transform duration-200 group-hover:scale-110" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Website</p>
              <p className="font-medium">{contactInfo.website}</p>
            </div>
            <button onClick={() => copyToClipboard(contactInfo.website, "website")} className="text-blue-500">
              {copied === "website" ? "Copied!" : ""}
            </button>
          </div>

          <hr className="border-gray-200" />

          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-full mr-4 group cursor-pointer">
              <Briefcase className="h-5 w-5 text-[#2593CE] transition-transform duration-200 group-hover:scale-110" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Sama</p>
              <p className="font-medium">{contactInfo.title}</p>
            </div>
          </div>
        </div>

      </Card>
    </div>
  )
}
