import Navbar       from "@/components/sections/Navbar";
import Hero         from "@/components/sections/Hero";
import About        from "@/components/sections/About";
import Menu         from "@/components/sections/Menu";
import Gallery      from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Location     from "@/components/sections/Location";
import Footer       from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
