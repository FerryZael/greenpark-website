"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Phone, Mail, MessageCircle, Home, CheckCircle } from "lucide-react"
import type { Project } from "@/lib/projects-data"

interface ProjectDetailContentProps {
  project: Project
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/#projects">
          <Button variant="outline" className="mb-6 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Proyek
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <Image
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.name} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 relative w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? "border-primary" : "border-border"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.name} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                {project.name}
              </h1>
              <div className="leading-relaxed text-black font-Thin">
                <MapPin className="leading-relaxed text-black font-semibold" />
                <span>{project.location}</span>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2 font-semibold">
                {project.price}
              </Badge>
            </div>

            <p className="leading-relaxed text-black font-semibold">{project.description}</p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <a
                  href={`https://wa.me/${project.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild className="flex-1 bg-transparent">
                <a href={`tel:${project.contact.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Telepon
                </a>
              </Button>
              <Button variant="outline" asChild className="flex-1 bg-transparent">
                <a href={`mailto:${project.contact.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="container mx-auto px-4 pb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center font-[family-name:var(--font-poppins)]">
              <Home className="w-5 h-5 mr-2" />
              Spesifikasi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(project.specifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-muted-foreground">{key}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Amenities */}
      <section className="container mx-auto px-4 pb-12">
        <Card>
          <CardHeader>
            <CardTitle className="font-[family-name:var(--font-poppins)]">Fasilitas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center p-3 bg-muted rounded-lg">
                  <CheckCircle className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 pb-16">
        <Card>
          <CardHeader>
            <CardTitle className="font-[family-name:var(--font-poppins)]">Hubungi Kami</CardTitle>
            <p className="text-muted-foreground">
              Tertarik dengan proyek ini? Hubungi tim kami untuk informasi lebih lanjut.
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Masukkan alamat email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              <Button type="submit" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
