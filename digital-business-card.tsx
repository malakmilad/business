"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function DigitalBusinessCard() {
  return (
    <div
      className="min-h-screen flex flex-col items-center p-4 bg-gray-100 relative"
      style={{
        backgroundImage: "url('sama-bg.jpg')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/20 z-0"></div>
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Header */}
        <div className="w-full max-w-2xl bg-[#2593CE] text-center text-white py-16 rounded-t-xl mt-8 flex justify-center items-center">
          <Image
            src="sama.png"
            alt="Sama Logo"
            className="mx-auto h-24 w-auto object-contain"
            width={120}
            height={96}
            draggable="false"
            priority
          />
        </div>

        <Card
          className="w-full max-w-2xl overflow-hidden rounded-b-xl shadow-xl relative"
        >
          <div className="p-6 space-y-6">
            {/* Phone Section */}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full group cursor-pointer mt-1">
                <Phone className="h-5 w-5 text-[#2593CE] transition-transform duration-200 group-hover:scale-110" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 transition-colors duration-200 hover:text-[#2593CE] cursor-pointer mb-1">Business</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:+966920010232" className="font-medium transition-all duration-200 hover:scale-105 hover:text-[#2593CE] cursor-pointer">+966 920 010 232</a>
                  <a href="tel:+966540212403" className="font-medium transition-all duration-200 hover:scale-105 hover:text-[#2593CE] cursor-pointer">+966 540 212 403</a>
                  <a href="tel:+966555821884" className="font-medium transition-all duration-200 hover:scale-105 hover:text-[#2593CE] cursor-pointer">+966 555 821 884</a>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Email Section */}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full group cursor-pointer mt-1">
                <Mail className="h-5 w-5 text-[#2593CE] transition-transform duration-200 group-hover:scale-110" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 transition-colors duration-200 hover:text-[#2593CE] cursor-pointer mb-1">Mail</p>
                <div className="flex flex-col gap-1">
                  <a href="mailto:Sales@samajf.com" className="font-medium transition-all duration-200 hover:scale-105 hover:text-[#2593CE] cursor-pointer">Sales@samajf.com</a>
                  <a href="mailto:a.eid@samajf.com" className="font-medium transition-all duration-200 hover:scale-105 hover:text-[#2593CE] cursor-pointer">a.eid@samajf.com</a>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Address Section */}
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full group cursor-pointer mt-1">
                <MapPin className="h-5 w-5 text-[#2593CE] transition-transform duration-200 group-hover:scale-110" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 transition-colors duration-200 hover:text-[#2593CE] cursor-pointer mb-1">Address</p>
                <div className="font-medium leading-snug mb-2">
                  Sama aljazeera<br/>
                  AlMusfah District - Industrial Gate City<br/>
                  Riyadh, Saudi Arabia
                </div>
                <a
                  href="https://www.google.com/maps?q=24.491393,46.89676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2593CE] font-semibold transition-all duration-200 cursor-pointer transition-transform hover:scale-110"
                >
                  Click Here to Open Location Map
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
