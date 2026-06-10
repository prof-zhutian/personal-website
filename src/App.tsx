import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Books from "@/sections/Books";
import Papers from "@/sections/Papers";
import Articles from "@/sections/Articles";
import Interviews from "@/sections/Interviews";
import Footer from "@/sections/Footer";
import CeibsHeader from "@/sections/CeibsHeader";

function App() {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans antialiased">
      <CeibsHeader />
      <Hero />
      <About />
      <Books />
      <Articles />
      <Interviews />
      <Papers />
      <Footer />
    </div>
  );
}

export default App;
