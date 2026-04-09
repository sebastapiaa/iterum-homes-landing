import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import {
  TrustBar,
  Process,
  WhyUs,
  Testimonials,
  Situations,
  ServiceAreas,
  About,
  FAQ,
  CTA,
  Footer,
} from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <Process />
      <WhyUs />
      <Testimonials />
      <Situations />
      <ServiceAreas />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
