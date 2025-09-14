export default function AwardsSection() {
  const awards = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award-9-LITnmrzAYtGjwJiPaAyUxt73XOlFf5.webp",
      title: "Apresiasi BTN Syariah",
      organization: "Bank BTN KCS Jakarta Harmoni",
      year: "2024",
      description: "Terimakasih atas kerjasama dan loyalitasnya dalam menyalurkan KPR Non Subsidi",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award-1-Py56NKNoPm6Q8WKrXdUGFUVOLybssz.webp",
      title: "Piagam Penghargaan BSI",
      organization: "Bank Syariah Indonesia",
      year: "2024",
      description: "Developer Non Nasional dengan Booking Terbanyak Triwulan 1 Tahun 2024",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award-11-8wbkvaCwTul1YG9h4Uxx8FS6u7NWXm.webp",
      title: "Terbaik III BTN Syariah",
      organization: "Bank Tabungan Negara (Persero) Tbk",
      year: "2024",
      description: "Kategori Realisasi Terbanyak KPR Non Subsidi Tahun 2023",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award-10-oS1SF510UyvmNfcTzTZWsiH97WBU0d.webp",
      title: "BTN Syariah Developer Award",
      organization: "BTN Syariah",
      year: "2024",
      description: "Apresiasi kepada Green Park Group sebagai Developer Non Subsidi Terbaik",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award-5-New-e1750326476752-juUr2WlL1UczZWgmsd30PSAphDuQvt.webp",
      title: "Piagam Penghargaan BTN",
      organization: "PT Bank Tabungan Negara (Persero) Tbk",
      year: "2024",
      description: "Developer Non Subsidi Terbaik Tahun 2023",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Award-4-rBuw7v9aUIIS9pM8yYi38UuDMlMYce.webp",
      title: "Sertifikat Apresiasi BTN",
      organization: "BTN KCS Jakarta Harmoni",
      year: "2024",
      description: "Terimakasih atas kerjasama dan kontribusi terbanyak dalam penyaluran KPR Non Subsidi",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-serif">Penghargaan & Sertifikasi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kepercayaan dan pengakuan dari berbagai institusi membuktikan komitmen kami dalam memberikan yang terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
                <img
                  src={award.image || "/placeholder.svg"}
                  alt={award.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2 font-serif line-clamp-2">{award.title}</h3>
                <p className="text-primary font-medium mb-1 text-sm">{award.organization}</p>
                <p className="text-xs text-gray-500 mb-3">{award.year}</p>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
