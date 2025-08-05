"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Shield, Clock, Leaf } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background with honeycomb pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-yellow-900/20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFD700' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-400">
                  <Leaf className="w-3 h-3 mr-1" />
                  100% Natural
                </Badge>
                <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                  <Shield className="w-3 h-3 mr-1" />
                  Turkish Made
                </Badge>
                <Badge className="bg-green-600 text-white hover:bg-green-700">
                  <Clock className="w-3 h-3 mr-1" />
                  2-Year Shelf Life
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-yellow-400">48 Hours Plus</span>
                <br />
                <span className="text-white">Herbal Honey</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 font-medium">Natural Male Enhancement Revolution</p>

              <p className="text-lg text-gray-400 max-w-lg">
                Premium Turkish Herbal Formula with 9 Powerful Natural Ingredients. Honey-based delivery system for
                maximum absorption and 48-hour effectiveness.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 h-auto transition-all duration-300 hover:scale-105"
                onClick={() => {
                  window.open(
                    "https://wa.me/9231944059354?text=Hi, I want to order 48 Hours Plus Herbal Honey from 48hoursplus",
                    "_blank",
                  )
                }}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Order Now via WhatsApp
              </Button>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>✓ 16g Premium Sachets</span>
                <span>✓ 12 Sachets per Box</span>
                <span>✓ Starting from 999 PKR</span>
              </div>
            </div>
          </div>

          {/* Right Content - Updated Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/product-main.png"
                alt="48 Hours Plus Herbal Honey - Premium Turkish Product"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-500 text-black p-4 rounded-full shadow-lg animate-pulse">
              <span className="font-bold text-sm">48H</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
