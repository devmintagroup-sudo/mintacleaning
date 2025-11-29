import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>
        <section id="services" className="border-t border-slate-100">
          <Services />
        </section>
        {/* <section id="process" className="border-t border-slate-100">
          <Process />
        </section> */}
        <section id="why-us" className="border-t border-slate-100">
          <WhyUs />
        </section>
        <section id="testimonials" className="border-t border-slate-100">
          <Testimonials />
        </section>
        <section id="stats" className="border-t border-slate-100">
          <Stats />
        </section>
        <section id="team" className="border-t border-slate-100">
          <Team />
        </section>
        <section id="contact" className="border-t border-slate-100">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
