import { Card, CardContent } from "@/components/ui/card"
import { Home, Users, Award, Leaf } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Home,
      title: "Desain Modern",
      description: "Rumah dengan arsitektur kontemporer dan tata ruang yang optimal",
    },
    {
      icon: Leaf,
      title: "Lingkungan Hijau",
      description: "Konsep hunian ramah lingkungan dengan taman dan ruang terbuka hijau",
    },
    {
      icon: Users,
      title: "Komunitas Harmonis",
      description: "Lingkungan yang aman dan nyaman untuk keluarga berkembang",
    },
    {
      icon: Award,
      title: "Kualitas Terpercaya",
      description: "Pengalaman puluhan tahun dalam industri properti Indonesia",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 font-[family-name:var(--font-poppins)] font-light">
            Tentang GREENPARK GROUP 
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto text-pretty">
            {"Sejak awal berdiri hingga saat ini, Greenpark Group telah mengembangkan 48 proyek perumahan dengan lebih dari 1100 keluarga yang mempercayai kami.\n\nKami berkomitmen menghadirkan perumahan di lokasi strategis yang didukung oleh fasilitas publik yang memadai, sehingga menjadikan perumahan kami pilihan tepat untuk hunian keluarga maupun investasi."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
                  {feature.title}
                </h3>
                <p className="text-muted text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
