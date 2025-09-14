import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
           <h3 className="mb-4">
  <img 
    src="/greenpark-logo-new.png" 
    alt="GREENPARK GROUP Logo" 
    className="w-[180px] h-auto" 
  />
</h3>

            <p className="text-secondary-foreground/90 mb-4 text-pretty">
              Perusahaan pengembang perumahan terpercaya dengan komitmen menghadirkan hunian berkualitas dan ramah
              lingkungan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[family-name:var(--font-poppins)]">Menu Utama</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Proyek
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-primary transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-primary transition-colors">
                  Testimoni
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[family-name:var(--font-poppins)]">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-5 w-5 text-background" />
                </div>
                <div className="text-sm">
                  Jl. Raya Bekasi No. 123
                  <br />
                  Jakarta Timur 13920
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-5 w-5 text-card" />
                </div>
                <div className="text-sm">+62 21 8765 4321</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-card" />
                </div>
                <div className="text-sm">official@greenparkgroup.co.id</div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[family-name:var(--font-poppins)]">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/80 text-sm">
            © 2025 GREENPARK GROUP. Semua hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  )
}
