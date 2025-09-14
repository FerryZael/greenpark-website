import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "The Hauz Cilodong",
      location: "Jl. H. Syarif, Kalibaru Cilodong Depok",
      image: "/thehauzcilodong.webp",
      description: "Hunian modern dengan konsep green living di kawasan strategis Cilodong. Dilengkapi dengan fasilitas lengkap dan akses mudah ke berbagai tempat penting.",
      link: "/projects/the-hauz-cilodong",
    },
    {
      id: 2,
      name: "LeHauz Cibubur",
      location: "Tangerang",
      image: "/lehauzcibubur.webp",
      description: "Konsep village modern dengan suasana asri dan tenang",
      link: "/projects/LeHauz-Cibubur",
    },
    {
      id: 3,
      name: "The Hauz Pancoran Mas",
      location: "The Hauz Pancoran Mas Berlokasi di Jl. Muhasyim 2, Pancoran Mas Depok Diapit Dengan 2 Exit Tol (Limo dan Sawangan)",
      image: "/thehauzpancoranmas.webp",
      description: "Hunian eksklusif di pancoran mas dengan pemandangan alam yang menakjubkan",
      link: "/projects/the-hauz-pancoran-mas",
    },
    {
      id: 4,
      name: "LeHauz Limo",
      location: "Jl. Kp. Grogol Sebrang, Grogol, Limo, Depok",
      image: "/lehauzlimo.webp",
      description: "More Than 17 Units Available Now! Hunian modern dengan konsep green living di kawasan strategis Limo",
      link: "/projects/lehauz-limo",
    },
    {
      id: 5,
      name: "Vertihauz Cibubur",
      location: "Jl. Leuwinanggung Tapos Depok",
      image: "/Vertihauz-Cibubur-Ruby.webp",
      description: "More than 42 Units Vertihauz Cibubur Berada di Pinggir Jalan Raya Dekat dengan LRT Harjamukti dan Diapit 3 Exit Tol.",
      link: "/projects/Vertihauz-Cibubur",
    },
    {
      id: 6,
      name: "Vertihome Serua",
      location: "Jalan Pinang Raya, Serua, Depok",
      image: "Vertihome-Serua-Amethst.webp",
      description: "Cluster ekslusif 30 unit terbaik berada di lokasi premium kemudahan lokasi dan kenyamanan lingkungan Dekat dengan Tol Pamulang, MRT Lebak Bulus",
      link: "/projects/Vertihome-Serua",
    },
    {
      id: 7,
      name: "Vertihauz Limo 3",
      location: "Jl. Pendowo III, Limo Depok",
      image: "/Verlim-3-Jade.webp",
      description: "Vertihauz Limo 3 Dengan konsep Type terbaru, Fasilitas super lengkap Lokasi hanya 3 Menit dari Pintu Tol Limo (Depok – Antasari)",
      link: "/projects/Vertihauz-Limo-3",
    },
    {
      id: 8,
      name: "Vertihome Serpong",
      location: "Jl. Salem 2, Serpong Tangerang Selatan",
      image: "/Vertihome-Serpong-Amarilis.webp",
      description: "Miliki hunian 2 lantai hanya 5 Menit Ke Stasiun Serpong & 10 menit ke Tol Serpong",
      link: "/projects/Vertihome-Serpong",
    },
    {
      id: 9,
      name: "Cirimekar Green Park",
      location: "Jl. Kayumanis, Cirimekar Cibinong Bogor",
      image: "/CMGP-Type-38.webp",
      description: "Design scandinavian berada dilokasi strategis pinggir jalan raya 5 Menit dari Stasiun Cibinong & 7 Menit dari Tol Citeureup.",
      link: "/projects/Cirimekar-Green-Park",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6 font-[family-name:var(--font-poppins)]">
            Proyek Perumahan
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto text-pretty px-4">
            Temukan berbagai pilihan hunian berkualitas dengan lokasi strategis dan fasilitas modern
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 font-[family-name:var(--font-poppins)] line-clamp-1">
                  {project.name}
                </h3>
                <div className="flex items-center text-muted mb-3">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm line-clamp-1">{project.location}</span>
                </div>
                <p className="text-muted text-sm text-pretty line-clamp-2">{project.description}</p>
              </CardContent>
              <CardFooter className="p-4 md:p-6 pt-0">
                <Link href={project.link} className="w-full">
                  <Button variant="outline" className="w-full group bg-transparent text-sm md:text-base">
                    Detail Proyek
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
