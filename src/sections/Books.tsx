import { books } from "@/data/books";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SquareArrowOutUpRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export default function Books() {
  const { t, lang } = useI18n();

  // 按语言过滤：中文版显示全部书籍，英文版只显示英文书
  const filteredBooks = lang === "zh"
    ? books
    : books.filter((b) => b.language === "en");

  return (
    <section id="books" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-semibold tracking-tight mb-2">
        {t("books.title")}
      </h2>
      <p className="text-muted-foreground text-sm mb-12">
        {t("books.subtitle")}
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {filteredBooks.map((book) => {
          const title = lang === "zh" ? book.titleZh : (book.titleEn || book.titleZh);
          const description = lang === "zh" ? book.descriptionZh : book.descriptionEn;
          return (
            <Card
              key={book.id}
              className="group border border-border/60 bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* 封面 */}
              <div className="aspect-[3/4] w-full bg-muted/40 flex items-center justify-center overflow-hidden">
                <img
                  src={book.coverImage}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml," +
                      encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" fill="#f5f5f5"><rect width="300" height="400" fill="#f5f5f5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="#999">${title.slice(0, 10)}</text></svg>`
                      );
                  }}
                />
              </div>

              <CardContent className="p-5 space-y-3">
                {/* 语言标签 + 年份 */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded-full bg-muted">
                    {book.language === "en" ? t("books.lang.en") : t("books.lang.zh")}
                  </span>
                  {book.publishYear && <span>{book.publishYear}</span>}
                </div>

                {/* 书名 */}
                <h3 className="font-semibold text-base leading-snug">
                  {title}
                </h3>

                {/* 简介 */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {description}
                </p>

                <Separator className="!my-3" />

                {/* 购买链接 */}
                <div className="flex flex-wrap gap-2">
                  {book.purchaseLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 text-xs rounded-full"
                      >
                        <SquareArrowOutUpRight className="w-3 h-3" />
                        {lang === "zh" ? link.labelZh : link.labelEn}
                      </Button>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
