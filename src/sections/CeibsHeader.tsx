import { useI18n } from "@/i18n/I18nContext";

export default function CeibsHeader() {
  const { lang } = useI18n();

  return (
    <header className="absolute top-0 left-0 z-20 flex items-center gap-3 px-6 py-4">
      {/* CEIBS Logo Mark */}
      <a
        href="https://www.ceibs.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 group"
        aria-label="CEIBS"
      >
        <img
          src="/ceibs-logo-en.png"
          alt="CEIBS"
          className="h-9 w-auto flex-shrink-0"
        />

        {/* Divider */}
        <div className="w-px h-7 bg-primary/50 flex-shrink-0" />

        {/* School Name */}
        <div className="flex flex-col leading-tight">
          {lang === "zh" ? (
            <span
              className="font-serif text-lg tracking-[0.15em] text-primary whitespace-nowrap"
              style={{
                fontFamily:
                  '"STSong", "Songti SC", "Noto Serif SC", "SimSun", "宋体", serif',
              }}
            >
              中欧国际工商学院
            </span>
          ) : (
            <span
              className="font-serif text-sm tracking-[0.1em] text-primary whitespace-nowrap"
              style={{
                fontFamily:
                  '"Garamond", "Georgia", "Times New Roman", serif',
              }}
            >
              China Europe International Business School
            </span>
          )}
        </div>
      </a>
    </header>
  );
}
