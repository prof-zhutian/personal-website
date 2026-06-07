import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Books from "@/sections/Books";
import Articles from "@/sections/Articles";
import Interviews from "@/sections/Interviews";
import Footer from "@/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans antialiased">
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
