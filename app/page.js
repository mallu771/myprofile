import About from "@/components/About";
import AnimatedBackground from "@/components/AnimatedBackground";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero1 from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar1 from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";
import Aurora from "@/components/background/Aurora";
import CursorGlow from "@/components/background/CursorGlow";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
export default function Home() {
  return (
    <Loader>
      <ScrollProgress />
  <Aurora />
      <CursorGlow />

      <main className="relative bg-[#070B18] text-white min-h-screen overflow-x-hidden">
        <Navbar1 />
        <Hero1 />
       <AnimatedBackground />
        <Navbar />

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
      <main className="bg-[#070B18] min-h-screen text-white overflow-x-hidden">
        
      </main>
    </Loader>
  );
}