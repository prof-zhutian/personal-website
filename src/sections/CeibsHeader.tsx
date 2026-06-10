import { useI18n } from "@/i18n/I18nContext";

export default function CeibsHeader() {
  const { lang } = useI18n();

  return (
    <header className="absolute top-0 left-0 z-20 flex items-center px-4 sm:px-6 py-3 sm:py-4 pointer-events-none">
      {/* CEIBS Logo Mark */}
      <a
        href="https://www.ceibs.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 sm:gap-4 group pointer-events-auto"
        aria-label="CEIBS"
      >
        <img
          src="/ceibs-logo-en.png"
          alt="CEIBS"
          className="h-8 sm:h-10 md:h-14 w-auto flex-shrink-0"
        />

        {/* Divider */}
        <div className="w-px h-6 sm:h-8 md:h-10 bg-primary/50 flex-shrink-0" />

        {/* School Name — responsive */}
        <div className="flex flex-col leading-tight">
          {lang === "zh" ? (
            <span
              className="font-bold tracking-[0.06em] sm:tracking-[0.1em] text-primary whitespace-nowrap"
              style={{
                fontFamily:
                  '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Hiragino Sans GB", sans-serif',
                fontSize: "clamp(18px, 5vw, 44px)",
              }}
            >
              中欧国际工商学院
            </span>
          ) : (
            <span
              className="font-bold tracking-[0.04em] sm:tracking-[0.06em] text-primary whitespace-nowrap"
              style={{
                fontFamily:
                  '"Helvetica Neue", "Arial", "Gotham", "Segoe UI", "Lucida Grande", sans-serif',
                fontSize: "clamp(13px, 3.5vw, 30px)",
                fontWeight: 700,
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
