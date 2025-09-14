"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      location: "Greenpark Residence",
      image: "/professional-indonesian-man-portrait.jpg",
      rating: 5,
      comment:
        "Sangat puas dengan kualitas rumah dan pelayanan GREENPARK GROUP. Lingkungannya asri dan aman untuk keluarga.",
    },
    {
      id: 2,
      name: "Sari Dewi",
      location: "Greenpark Village",
      image: "/professional-indonesian-woman-portrait.jpg",
      rating: 5,
      comment:
        "Fasilitas lengkap dan desain rumah yang modern. Anak-anak senang bermain di taman yang luas dan bersih.",
    },
    {
      id: 3,
      name: "Ahmad Rahman",
      location: "Greenpark Hills",
      image: "/professional-indonesian-man-with-glasses-portrait.jpg",
      rating: 5,
      comment: "Lokasi strategis dengan akses mudah ke berbagai tempat. Investasi properti yang sangat menguntungkan.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
            Testimoni Penghuni
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto text-pretty">
            Dengarkan pengalaman langsung dari keluarga yang telah mempercayakan hunian impian mereka kepada kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-foreground mb-6 italic text-balance">
                  "{testimonials[currentIndex].comment}"
                </blockquote>

                <div>
                  <h4 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted">Penghuni {testimonials[currentIndex].location}</p>
                </div>
              </div>
            </CardContent>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-secondary" : "bg-border"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
