import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Books from "@/sections/Books";
import Papers from "@/sections/Papers";
import Articles from "@/sections/Articles";
import Interviews from "@/sections/Interviews";
import Footer from "@/sections/Footer";
import CeibsHeader from "@/sections/CeibsHeader";
import { useI18n } from "@/i18n/I18nContext";

function App() {
  const { lang } = useI18n();

  // English: Interviews between Books and Articles
  // Chinese: Articles → Interviews → Papers (original order)
  const afterBooks = lang === "en" ? (
    <>
      <Interviews />
      <Articles />
      <Papers />
    </>
  ) : (
    <>
      <Articles />
      <Interviews />
      <Papers />
    </>
  );

  return (
    <div className="min-h-screen bg-white text-foreground font-sans antialiased">
      <CeibsHeader />
      <Hero />
      <About />
      <Books />
      {afterBooks}
      <Footer />
    </div>
  );
}

export default App;
