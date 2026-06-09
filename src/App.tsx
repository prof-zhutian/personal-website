import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Books from "@/sections/Books";
import Articles from "@/sections/Articles";
import Interviews from "@/sections/Interviews";
import Footer from "@/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans antialiased">
      {/* CEIBS branding: subtle top accent bar */}
      <div className="h-1 bg-primary" />
      <Hero />
      <About />
      <Books />
      <Articles />
      <Interviews />
      <Footer />
    </div>
  );
}

export default App;
