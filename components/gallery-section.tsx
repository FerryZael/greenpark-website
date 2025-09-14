"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/Playgroundcilodong.webp",
      alt: "Eksterior Rumah Modern",
    },
    {
      src: "/gym.webp",
      alt: "Interior Ruang Tamu",
    },
    {
      src: "/jogtrack.webp",
      alt: "Taman Bermain",
    },
    {
      src: "/lehauzcibuburmasjid.webp",
      alt: "Kolam Renang",
    },
    {
      src: "/lapanganbasket.webp",
      alt: "Dapur Modern",
    },
    {
      src: "/playgroundcilodong.webp",
      alt: "Taman Hijau",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
            Galeri
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto text-pretty">
            Lihat suasana hunian, fasilitas, dan lingkungan hijau di proyek-proyek GREENPARK GROUP
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged view"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
