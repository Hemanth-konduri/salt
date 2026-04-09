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
      {/* Fixed top navigation for the home sections and contact route. */}
      <Navbar />
      {/* Cinematic landing section with the main message and entry CTAs. */}
      <Hero />
      {/* Story-driven introduction to the restaurant identity and atmosphere. */}
      <About />
      {/* Curated menu showcase with featured dishes and category switching. */}
      <Menu />
      {/* Editorial gallery that highlights ambiance, plating, and interiors. */}
      <Gallery />
      {/* Guest review section that adds social proof to the brand story. */}
      <Testimonials />
      {/* Visit information including address, hours, and map context. */}
      <Location />
      {/* Final brand footer with links, signup, and the large wordmark. */}
      <Footer />
    </main>
  );
}
