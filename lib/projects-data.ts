export interface Project {
  id: string
  name: string
  location: string
  price: string
  description: string
  images: string[]
  amenities: string[]
  specifications: Record<string, string>
  contact: {
    phone: string
    email: string
    whatsapp: string
  }
}

export const projectsData: Record<string, Project> = {
  "the-hauz-cilodong": {
    id: "the-hauz-cilodong", 
    name: "The Hauz Cilodong",
    location: "Jl. H. Syarif, Kalibaru Cilodong Depok",
    price: "(COMING SOON)",
    description:
      "Hunian modern dengan konsep green living di kawasan strategis Cilodong. Dilengkapi dengan fasilitas lengkap dan akses mudah ke berbagai tempat penting.",
    images: [
      "/thehauzcilodong.webp",
      "/parkingcilodong.webp",
      "/Seatingcilodong.webp",
      "/Playgroundcilodong.webp",
    ],
    amenities: ["Kolam Renang", "Taman Bermain", "Security 24 Jam", "Masjid", "Jogging Track", "Parkir Luas"],
    specifications: {
      "Luas Tanah": "72 - 120 m²",
      "Luas Bangunan": "45 - 90 m²",
      "Kamar Tidur": "2 - 3",
      "Kamar Mandi": "1 - 2",
      Carport: "1 - 2 mobil",
    },
    contact: {
      phone: "+62 21-8765-4321",
      email: "official@greenparkgroup.co.id",
      whatsapp: "+62 21-8765-4321",
    },
  },
  "LeHauz-Cibubur": {
    id: "LeHauz-Cibubur",
    name: "LeHauz Cibubur",
    location: "Jl. Leuwinanggung Tapos Depok",
    price: "Coming Soon",
    description:
      "Konsep village modern dengan suasana asri dan tenang. Cocok untuk keluarga yang menginginkan hunian nyaman dengan harga terjangkau.",
    images: [
      "/lehauzcibubur.webp",
      "/lehauzcibuburmasjid.webp",
      "/playgroundcibubur.webp",
      "/parkingcibubur.webp",
    ],
    amenities: ["Taman Komunal", "Playground", "Security 24 Jam", "Musholla", "Area Olahraga", "Parkir Luas"],
    specifications: {
      "Luas Tanah": "60 - 100 m²",
      "Luas Bangunan": "36 - 75 m²",
      "Kamar Tidur": "2 - 3",
      "Kamar Mandi": "1 - 2",
      Carport: "1 mobil",
    },
    contact: {
      phone: "+62 21-8765-4321",
      email: "official@greenparkgroup.co.id",
      whatsapp: "+62 21-8765-4321",
    },
  },
  "the-hauz-pancoran-mas": {
    id: "the-hauz-pancoran-mas",
    name: "The Hauz Pancoran Mas",
    location: "The Hauz Pancoran Mas Berlokasi di Jl. Muhasyim 2, Pancoran Mas Depok Diapit Dengan 2 Exit Tol (Limo dan Sawangan)",
    price: "Comingsoon",
    description:
      "Hunian eksklusif di pancoran mas dengan pemandangan alam yang menakjubkan. Udara sejuk dan lingkungan yang asri.",
    images: [
      "/thehauzpancoranmas.webp",
      "/parkingpancoranmas.webp",
      "/seatingpancoranmas.webp",
      "/gerbangpancoranmas.webp",
    ],
    amenities: ["Kolam Renang Infinity", "Clubhouse", "Security 24 Jam", "Masjid", "Hiking Trail", "Parkir Luas"],
    specifications: {
      "Luas Tanah": "100 - 200 m²",
      "Luas Bangunan": "70 - 150 m²",
      "Kamar Tidur": "3 - 4",
      "Kamar Mandi": "2 - 3",
      Carport: "2 mobil",
    },
    contact: {
      phone: "+62 21-8765-4321",
      email: "official@greenparkgroup.co.id",
      whatsapp: "+62 21-8765-4321",
    },
  },
  "lehauz-limo": {
    id: "lehauz-limo",
    name: "LeHauz Limo",
    location: "Jl. Kp. Grogol Sebrang, Grogol, Limo, Depok",
    price: "Mulai dari Rp 800 juta",
    description:
      "More Than 17 Units Perumahan baru di Limo Depok Dengan smarthome system dekat Tol Limo & Sawangan.",
    images: [
      "/lehauzlimo.webp",
      "/lehauzseatinglimo.webp",
      "/gerbanglehauzlimo.webp",
      "/LeHauzLimoPlayground.webp",
    ],
    amenities: ["Taman Pribadi", "Kolam Renang", "Security 24 Jam", "Musholla", "Jogging Track", "Parkir Luas"],
    specifications: {
      "Luas Tanah": "80 - 150 m²",
      "Luas Bangunan": "50 - 120 m²",
      "Kamar Tidur": "2 - 4",
      "Kamar Mandi": "2 - 3",
      Carport: "1 - 2 mobil",
    },
    contact: {
      phone: "+62 21-8765-4321",
      email: "official@greenparkgroup.co.id",
      whatsapp: "+62 21-8765-4321",
    },
  },
  "Vertihauz-Cibubur": {
    id: "Vertihauz-Cibubur",
    name: "Vertihauz Cibubur",
    location: "Jl. Leuwinanggung Tapos Depok",
    price: "Comingsoon",
    description:
      "More than 42 Units Vertihauz Cibubur Berada di Pinggir Jalan Raya Dekat dengan LRT Harjamukti dan Diapit 3 Exit Tol.",
    images: [
      "/Vertihauz-Cibubur-Ruby.webp",
      "/badmintoncibubur.webp",
      "/Maingate-Vertihauz-Cibubur.webp",
      "/public/musholla_2.webp",
    ],
    amenities: ["Kolam Renang Premium", "Gym & Spa", "Security 24 Jam", "Masjid", "Business Center", "Parkir Basement"],
    specifications: {
      "Luas Tanah": "90 - 180 m²",
      "Luas Bangunan": "65 - 140 m²",
      "Kamar Tidur": "3 - 4",
      "Kamar Mandi": "2 - 3",
      Carport: "2 mobil",
    },
    contact: {
      phone: "+62 21-8765-4321",
      email: "official@greenparkgroup.co.id",
      whatsapp: "+62 21-8765-4321",
    },
  },
  "Vertihome-Serua": {
    id: "Vertihome-Serua",
    name: "Vertihome Serua",
    location: "Jalan Pinang Raya, Serua, Depok",
    price: "Comingsoon",
    description:
      "Cluster ekslusif 30 unit terbaik berada di lokasi premium kemudahan lokasi dan kenyamanan lingkungan Dekat dengan Tol Pamulang, MRT Lebak Bulus.",
    images: [
      "/Vertihome-Serua-Amethst.webp",
      "/Vertihome-Serua-Facilty-Playground-scaled.webp",
      "/Vertihome-Serua-Facilty-Communal-Space-scaled.webp",
      "/Maingate-Vertihome-Serua-scaled.webp",
    ],
    amenities: ["Taman Lembah", "Kolam Renang Natural", "Security 24 Jam", "Musholla", "Area Piknik", "Parkir Luas"],
    specifications: {
      "Luas Tanah": "70 - 140 m²",
      "Luas Bangunan": "45 - 100 m²",
      "Kamar Tidur": "2 - 3",
      "Kamar Mandi": "1 - 2",
      Carport: "1 - 2 mobil",
    },
    contact: {
      phone: "+62 21-8765-4321",
      email: "official@greenparkgroup.co.id",
      whatsapp: "+62 21-8765-4321",
    },
  },
  "Vertihauz-Limo-3": {
    id: "Vertihauz-Limo-3",
    name: "Vertihauz Limo 3",
    location: "Jl. Pendowo III, Limo Depok",
    price: "comingsoon",
    description: "vertihauz Limo 3 Dengan konsep Type terbaru, Fasilitas super lengkap Lokasi hanya 3 Menit dari Pintu Tol Limo (Depok – Antasari).",
    images: [
      "/Verlim-3-Jade.webp",
      "/gym.webp",
      "/joggingtrack.webp",
      "/lapanganbasket.webp",
    ],
    amenities: ["Taman Harmoni", "Kolam Renang", "Security 24 Jam", "Masjid", "Playground", "Parkir Luas"],
    specifications: {
      "Luas Tanah": "75 - 130 m²",
      "Luas Bangunan": "50 - 95 m²",
      "Kamar Tidur": "2 - 3",
      "Kamar Mandi": "2",
      Carport: "1 - 2 mobil",
    },
    contact: {
      phone: "+62 21-8765-4321",
      email: "official@greenparkgroup.co.id",
      whatsapp: "+62 21-8765-4321",
    },
  },
  "Vertihome-Serpong": {
    id: "Vertihome-Serpong",
    name: "Vertihome Serpong",
    location: "Jl. Salem 2, Serpong Tangerang Selatan",
    price: "Comingsoon",
    description:
      "Hunian modern dengan konsep green living di kawasan strategis Serpong.",
    images: [
      "/Vertihome-Serpong-Amarilis.webp",
      "/Vertihome-Serpong-Maingate.webp",
      "/Vertihome-Serpong-Ashoka.webp",
      "/REV_Tipe-Kemuning-Fasad.webp",
    ],
    amenities: [
      "Kolam Renang Elite",
      "Clubhouse Mewah",
      "Security 24 Jam",
      "Masjid",
      "Tennis Court",
      "Parkir Basement",
    ],
    specifications: {
      "Luas Tanah": "120 - 250 m²",
      "Luas Bangunan": "90 - 200 m²",
      "Kamar Tidur": "3 - 5",
      "Kamar Mandi": "3 - 4",
      Carport: "2 - 3 mobil",
    },
    contact: {
      phone: "+62 21-8765-4321",
      email: "official@greenparkgroup.co.id",
      whatsapp: "+62 21-8765-4321",
    },
  },
  "Cirimekar-Green-Park": {
    id: "Cirimekar-Green-Park",
    name: "Cirimekar Green Park",
    location: "Jl. Kayumanis, Cirimekar Cibinong Bogor",
    price: "Comingsoon",
    description:
      "Design scandinavian berada dilokasi strategis pinggir jalan raya 5 Menit dari Stasiun Cibinong & 7 Menit dari Tol Citeureup.",
    images: [
      "/CMGP-Type-38.webp",
      "/RUKO-CMGP-.webp",
      "/CMGP-Type-50.webp",
      "/CMGP-Type-38-2.webp",
    ],
    amenities: ["Taman Serenity", "Kolam Renang Alami", "Security 24 Jam", "Musholla", "Nature Walk", "Parkir Luas"],
    specifications: {
      "Luas Tanah": "85 - 160 m²",
      "Luas Bangunan": "55 - 110 m²",
      "Kamar Tidur": "2 - 4",
      "Kamar Mandi": "2 - 3",
      Carport: "1 - 2 mobil",
    },
    contact: {
      phone: "+62 21-8765-4321",
      email: "official@greenparkgroup.co.id",
      whatsapp: "+62 21-8765-4321",
    },
  },
}

export function getProjectBySlug(slug: string): Project | null {
  return projectsData[slug] || null
}

export function getAllProjects(): Project[] {
  return Object.values(projectsData)
}
