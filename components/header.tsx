"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Account for fixed header height
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image src="/images/logo-new.png" alt="48 Hours Plus Logo" width={48} height={48} className="rounded-lg" />
          <div>
            <h1 className="text-xl font-bold text-yellow-400">48hoursplus</h1>
            <p className="text-xs text-gray-400">Herbal Honey</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("product-showcase")}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("ingredients")}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Ingredients
          </button>
          <button
            onClick={() => scrollToSection("certificates")}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Certificates
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() =>
              window.open("https://wa.me/923194405935?text=Hi, I'm interested in 48 Hours Plus Herbal Honey", "_blank")
            }
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  )
}
