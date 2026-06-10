import { journalPapers } from "@/data/papers";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SquareArrowOutUpRight, Trophy } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export default function Papers() {
  const { t } = useI18n();

  return (
    <section id="papers" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
        {t("papers.title")}
      </h2>
      <div className="w-10 h-0.5 bg-primary/40 mb-6" />
      <p className="text-muted-foreground text-xs sm:text-sm mb-8">
        {t("papers.subtitle")}
      </p>

      <div className="space-y-4 sm:space-y-5">
        {journalPapers.map((paper) => (
          <Card
            key={paper.id}
            className="border border-border/60 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
          >
            <CardContent className="p-4 sm:p-5 space-y-2.5 sm:space-y-3">
              {/* Year + Journal */}
              <div className="flex items-center gap-2 sm:gap-3 text-xs text-muted-foreground flex-wrap">
                <Badge variant="secondary" className="text-xs font-normal bg-primary/10 text-primary border-primary/20">
                  {paper.year === "forthcoming" ? t("papers.forthcoming") : paper.year}
                </Badge>
                <span className="text-muted-foreground/70">{paper.journal}</span>
                {paper.volume && (
                  <span className="text-muted-foreground/50">
                    Vol. {paper.volume}{paper.pages ? `, pp. ${paper.pages}` : ""}
                  </span>
                )}
                {paper.note && (
                  <Badge variant="outline" className="text-xs font-normal border-amber-300 text-amber-700 bg-amber-50 gap-1">
                    <Trophy className="w-3 h-3" />
                    {paper.note}
                  </Badge>
                )}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-sm sm:text-base leading-snug">
                {paper.doi ? (
                  <a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary/70 transition-colors inline-flex items-start gap-1.5"
                  >
                    {paper.title}
                    <SquareArrowOutUpRight className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                  </a>
                ) : paper.link ? (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary/70 transition-colors inline-flex items-start gap-1.5"
                  >
                    {paper.title}
                    <SquareArrowOutUpRight className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                  </a>
                ) : (
                  paper.title
                )}
              </h3>

              {/* Authors */}
              <p className="text-xs text-muted-foreground">
                {paper.authors}
              </p>

              {/* Abstract */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {paper.abstract}
              </p>

              {/* DOI link */}
              {paper.doi && (
                <>
                  <Separator className="!my-2" />
                  <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
                    <span>DOI:</span>
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-mono break-all"
                    >
                      {paper.doi}
                    </a>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
