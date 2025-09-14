import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-housing-development-with-green-landscape-an.jpg" alt="Modern Housing Development" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ring"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif text-balance">
            Hunian Nyaman dan Modern untuk Keluarga Anda
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-pretty text-card-foreground font-medium">
            Wujudkan impian memiliki rumah dengan desain modern, lingkungan asri, dan fasilitas lengkap bersama
            GREENPARK GROUP
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover:bg-primary/90 text-primary-foreground bg-secondary-foreground">
              Lihat Proyek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
