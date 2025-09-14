import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 font-[family-name:var(--font-poppins)] text-balance">
            Miliki Rumah Impian Anda Bersama GREENPARK GROUP
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
            Jangan lewatkan kesempatan untuk memiliki hunian berkualitas dengan harga terjangkau. Konsultasikan
            kebutuhan hunian Anda dengan tim ahli kami sekarang juga!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Kami
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Konsultasi
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
