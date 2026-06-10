import { useI18n } from "@/i18n/I18nContext";

export default function Hero() {
  const { t, lang, toggleLang } = useI18n();

  return (
    <section
      id="hero"
      className="min-h-[55vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 sm:pt-32 pb-8 sm:pb-10 relative"
    >
      {/* Language Switcher */}
      <button
        onClick={toggleLang}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 text-xs font-medium px-3 py-1.5 rounded-full border border-border/60 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all text-muted-foreground min-h-[36px] min-w-[44px]"
        aria-label="Switch language"
      >
        {lang === "zh" ? "EN" : "中文"}
      </button>

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4 px-2">
        {t("hero.name")}
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-muted-foreground max-w-md mb-8 sm:mb-10 leading-relaxed px-2">
        {t("hero.subtitle")}
      </p>

      {/* Nav links */}
      <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm flex-wrap justify-center px-2">
        <a
          href="#about"
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 min-h-[44px] flex items-center"
        >
          {t("hero.nav.about")}
        </a>
        <span className="text-border hidden sm:inline">·</span>
        <a
          href="#books"
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 min-h-[44px] flex items-center"
        >
          {t("hero.nav.books")}
        </a>
        <span className="text-border hidden sm:inline">·</span>
        <a
          href="#articles"
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 min-h-[44px] flex items-center"
        >
          {t("hero.nav.articles")}
        </a>
        <span className="text-border hidden sm:inline">·</span>
        <a
          href="#interviews"
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 min-h-[44px] flex items-center"
        >
          {t("hero.nav.interviews")}
        </a>
        <span className="text-border hidden sm:inline">·</span>
        <a
          href="#papers"
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 min-h-[44px] flex items-center"
        >
          {t("hero.nav.papers")}
        </a>
        <span className="text-border hidden sm:inline">·</span>
        <a
          href="#contact"
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5 min-h-[44px] flex items-center"
        >
          {t("hero.nav.contact")}
        </a>
      </nav>
    </section>
  );
}
