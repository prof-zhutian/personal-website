import { useI18n } from "@/i18n/I18nContext";
import { type Lang } from "@/i18n/translations";
import { interviews } from "@/data/interviews";
import { englishInterviews } from "@/data/interviews-en";
import { SquareArrowOutUpRight } from "lucide-react";

function formatDate(dateStr: string, lang: Lang): string {
  const date = new Date(dateStr);
  if (lang === "zh") {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Interviews() {
  const { t, lang } = useI18n();

  const allInterviews = lang === "zh" ? interviews : englishInterviews;

  return (
    <section id="interviews" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold tracking-tight mb-2">
        {t("interviews.title")}
      </h2>
      <p className="text-muted-foreground text-sm mb-12">
        {t("interviews.subtitle")}
      </p>

      <div className="space-y-6">
        {allInterviews.map((interview) => (
          <div
            key={interview.id}
            className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs text-muted-foreground">
                    {formatDate(interview.date, lang)}
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs font-medium text-primary">
                    {lang === "zh" ? interview.sourceZh : interview.sourceEn}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                  {lang === "zh" ? interview.titleZh : interview.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "zh"
                    ? interview.descriptionZh
                    : interview.descriptionEn}
                </p>
              </div>
              {interview.url && (
                <a
                  href={interview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors mt-1"
                >
                  <span className="hidden sm:inline">
                    {t("interviews.view")}
                  </span>
                  <SquareArrowOutUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
