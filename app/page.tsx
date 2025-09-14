import Header from "@/components/header"
import AnimatedHeroSection from "@/components/animated-hero-section"
import AboutSection from "@/components/about-section"
import AwardsSection from "@/components/awards-section"
import ProjectsSection from "@/components/projects-section"
import EventsSection from "@/components/events-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import ScheduleTourSection from "@/components/schedule-tour-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AnimatedHeroSection />
      <AboutSection />
      <AwardsSection />
      <ProjectsSection />
      <EventsSection />
      <GallerySection />
      <TestimonialsSection />
      <ScheduleTourSection />
      <CTASection />
      <Footer />
    </main>
  )
}
