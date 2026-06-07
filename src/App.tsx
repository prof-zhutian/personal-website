import Hero from "@/sections/Hero";
import Books from "@/sections/Books";
import Articles from "@/sections/Articles";
import Footer from "@/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans antialiased">
      <Hero />
      <Books />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
