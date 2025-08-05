import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { ProductGallery } from "@/components/product-gallery"
import { VideoShowcase } from "@/components/video-showcase"
import { IngredientBreakdown } from "@/components/ingredient-breakdown"
import { CertificationsSection } from "@/components/certifications-section"
import { PricingSection } from "@/components/pricing-section"
import { UsageInstructions } from "@/components/usage-instructions"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ReviewsSection } from "@/components/reviews-section"
import { InternationalMarket } from "@/components/international-market"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <ProductGallery />
        <VideoShowcase />
        <IngredientBreakdown />
        <CertificationsSection />
        <PricingSection />
        <UsageInstructions />
        <TestimonialsSection />
        <ReviewsSection />
        <InternationalMarket />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
