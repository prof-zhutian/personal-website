import { articles } from "@/data/articles";
import { englishArticles } from "@/data/articles-en";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SquareArrowOutUpRight, FileText } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export default function Articles() {
  const { t, lang } = useI18n();

  // 按语言过滤：中文版显示中文文章，英文版显示英文文章
  const allArticles = lang === "zh" ? articles : englishArticles;

  return (
    <section id="articles" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight mb-2">
        {t("articles.title")}
      </h2>
      <div className="w-10 h-0.5 bg-primary/40 mb-6" />
      <p className="text-muted-foreground text-sm mb-8">
        {t("articles.subtitle")}
      </p>

      <div className="space-y-6">
        {allArticles.map((article) => {
          const title = lang === "zh" ? article.titleZh : article.titleEn;
          const excerpt = lang === "zh" ? article.excerptZh : article.excerptEn;
          const source = lang === "zh" ? (article.sourceZh || article.sourceEn) : (article.sourceEn || article.sourceZh);

          return (
            <Card
              key={article.id}
              className="border border-border/60 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6 space-y-3">
                {/* 日期 + 媒体来源 */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>
                    {new Date(article.date).toLocaleDateString(
                      lang === "zh" ? "zh-CN" : "en-US",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </span>
                  {source && (
                    <>
                      <span>·</span>
                      <Badge variant="secondary" className="text-xs font-normal">
                        {source}
                      </Badge>
                    </>
                  )}
                </div>

                {/* 标题 */}
                <h3 className="font-semibold text-lg leading-snug">
                  {article.sourceUrl ? (
                    <a
                      href={article.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary/70 transition-colors inline-flex items-center gap-1.5"
                    >
                      {title}
                      <SquareArrowOutUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                    </a>
                  ) : (
                    title
                  )}
                </h3>

                {/* 摘要 或 全文 */}
                {article.content ? (
                  <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                    {article.content}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {excerpt}
                  </p>
                )}

                {/* 原文链接 */}
                {article.sourceUrl && (
                  <>
                    <Separator className="!my-3" />
                    <a
                      href={article.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
                        <FileText className="w-3 h-3" />
                        {t("articles.read_original")}
                      </span>
                    </a>
                  </>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
