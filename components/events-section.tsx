import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EventsSection() {
  const events = [
    {
      title: "Grand Opening Greenpark Residence",
      date: "15 Januari 2024",
      time: "09:00 - 17:00 WIB",
      location: "Greenpark Residence, Bogor",
      attendees: "200+ peserta",
      description: "Acara pembukaan resmi proyek terbaru dengan berbagai doorprize menarik dan diskon khusus.",
      image: "/grand-opening-event-real-estate.jpg",
    },
    {
      title: "Property Investment Seminar",
      date: "28 Januari 2024",
      time: "13:00 - 16:00 WIB",
      location: "Hotel Santika, Jakarta",
      attendees: "150+ peserta",
      description: "Seminar investasi properti dengan pembicara ahli dan tips memilih hunian yang tepat.",
      image: "/property-investment-seminar.jpg",
    },
    {
      title: "Family Fun Day",
      date: "10 Februari 2024",
      time: "08:00 - 15:00 WIB",
      location: "Greenpark Valley, Depok",
      attendees: "300+ keluarga",
      description: "Acara keluarga dengan berbagai permainan, bazaar kuliner, dan tur keliling proyek.",
      image: "/family-fun-day-real-estate-event.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-serif">Event & Kegiatan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ikuti berbagai event menarik dan dapatkan kesempatan emas untuk menjadi bagian dari komunitas Greenpark
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3 font-serif">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {event.attendees}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Daftar Sekarang</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
