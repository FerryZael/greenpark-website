"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, MapPin, Phone, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ScheduleTourSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    date: "",
    time: "",
    message: "",
  })

  const projects = [
    "Greenpark Residence",
    "Greenpark Valley",
    "Greenpark Hills",
    "Greenpark Garden",
    "Greenpark Vista",
    "Greenpark Harmony",
    "Greenpark Elite",
    "Greenpark Nature",
    "Greenpark Serenity",
  ]

  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Tour scheduled:", formData)
    alert("Terima kasih! Kami akan menghubungi Anda segera untuk konfirmasi jadwal tour.")
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-serif">Jadwalkan Tour Proyek</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lihat langsung keindahan dan kualitas hunian impian Anda. Atur jadwal kunjungan dengan tim ahli kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-6 font-serif">Isi Form Reservasi</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Proyek *</label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Pilih proyek yang ingin dikunjungi</option>
                    {projects.map((project, index) => (
                      <option key={index} value={project}>
                        {project}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Kunjungan *</label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Waktu Kunjungan *</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Pilih waktu</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>
                          {slot} WIB
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan Tambahan</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full"
                    placeholder="Ada pertanyaan khusus atau permintaan tertentu?"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg">
                  Jadwalkan Tour Sekarang
                </Button>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-6 font-serif">Mengapa Tour Bersama Kami?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Panduan Ahli</h4>
                      <p className="text-gray-600 text-sm">
                        Tim sales berpengalaman akan memandu Anda mengelilingi proyek
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Lokasi Strategis</h4>
                      <p className="text-gray-600 text-sm">Lihat langsung akses transportasi dan fasilitas sekitar</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fleksibel</h4>
                      <p className="text-gray-600 text-sm">Jadwal tour dapat disesuaikan dengan waktu Anda</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h4 className="font-semibold text-secondary mb-4">Informasi Kontak</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">0812 2001 2225</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">official@greenparkgroup.co.id</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-primary w-20 h-16 mb-0 mt-0" />
                    <span className="text-gray-700 font-normal">{"(Office)\nRuko Saladdin Square Blok B17, Jl. Margonda Raya No 39 Pancoran Mas Depok\n(Head Office)\nCipinang Bali IV Block C Cipinang Muara Jakarta Timur"}</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 p-6 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">Jam Operasional Tour</h4>
                <p className="text-gray-700 text-sm mb-2">Senin - Jumat: 09:00 - 17:00 WIB</p>
                <p className="text-gray-700 text-sm">Sabtu - Minggu: 09:00 - 16:00 WIB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
