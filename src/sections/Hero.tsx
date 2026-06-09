import { useI18n } from "@/i18n/I18nContext";

export default function Hero() {
  const { t, lang, toggleLang } = useI18n();

  return (
    <section
      id="hero"
      className="min-h-[55vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-10 relative"
    >
      {/* Language Switcher */}
      <button
        onClick={toggleLang}
        className="absolute top-6 right-6 text-xs font-medium px-3 py-1.5 rounded-full border border-border/60 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all text-muted-foreground"
        aria-label="Switch language"
      >
        {lang === "zh" ? "EN" : "中文"}
      </button>

      {/* 姓名 */}
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
        {t("hero.name")}
      </h1>

      {/* 副标题 */}
      <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
        {t("hero.subtitle")}
      </p>

      {/* 导航链接 */}
      <nav className="flex items-center gap-6 text-sm flex-wrap justify-center">
        <a
          href="#about"
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
        >
          {t("hero.nav.about")}
        </a>
        <span className="text-border">·</span>
        <a
          href="#books"
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
        >
          {t("hero.nav.books")}
        </a>
        <span className="text-border">·</span>
        <a
          href="#articles"
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
        >
          {t("hero.nav.articles")}
        </a>
        <span className="text-border">·</span>
        <a
          href="#interviews"
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
        >
          {t("hero.nav.interviews")}
        </a>
        <span className="text-border">·</span>
        <a
          href="#contact"
          className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
        >
          {t("hero.nav.contact")}
        </a>
      </nav>
    </section>
  );
}
