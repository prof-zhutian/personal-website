import { useI18n } from "@/i18n/I18nContext";

export default function CeibsHeader() {
  const { lang } = useI18n();

  return (
    <header className="absolute top-0 left-0 z-20 flex items-center gap-4 px-6 py-4">
      {/* CEIBS Logo Mark */}
      <a
        href="https://www.ceibs.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 group"
        aria-label="CEIBS"
      >
        <img
          src="/ceibs-logo-en.png"
          alt="CEIBS"
          className="h-14 w-auto flex-shrink-0"
        />

        {/* Divider */}
        <div className="w-px h-10 bg-primary/50 flex-shrink-0" />

        {/* School Name */}
        <div className="flex flex-col leading-tight">
          {lang === "zh" ? (
            <span
              className="font-bold tracking-[0.1em] text-primary whitespace-nowrap"
              style={{
                fontFamily:
                  '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", "Hiragino Sans GB", sans-serif',
                fontSize: "44px",
              }}
            >
              中欧国际工商学院
            </span>
          ) : (
            <span
              className="font-bold tracking-[0.06em] text-primary whitespace-nowrap"
              style={{
                fontFamily:
                  '"Helvetica Neue", "Arial", "Gotham", "Segoe UI", "Lucida Grande", sans-serif',
                fontSize: "30px",
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
