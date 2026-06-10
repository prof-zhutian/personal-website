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
    <section id="books" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
        {t("books.title")}
      </h2>
      <div className="w-10 h-0.5 bg-primary/40 mb-6" />
      <p className="text-muted-foreground text-xs sm:text-sm mb-8">
        {t("books.subtitle")}
      </p>

      <div className="grid gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {filteredBooks.map((book) => {
          const title = lang === "zh" ? book.titleZh : (book.titleEn || book.titleZh);
          const description = lang === "zh" ? book.descriptionZh : book.descriptionEn;
          return (
            <Card
              key={book.id}
              className="group border border-border/60 bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Cover image — responsive aspect ratio */}
              <div className="aspect-[2/3] sm:aspect-[3/4] w-full bg-muted/40 flex items-center justify-center overflow-hidden">
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

              <CardContent className="p-4 sm:p-5 space-y-2.5 sm:space-y-3">
                {/* Language badge + year */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded-full bg-muted">
                    {book.language === "en" ? t("books.lang.en") : t("books.lang.zh")}
                  </span>
                  {book.publishYear && <span>{book.publishYear}</span>}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-sm sm:text-base leading-snug">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {description}
                </p>

                <Separator className="!my-2 sm:!my-3" />

                {/* Purchase links */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
                        className="gap-1.5 text-xs rounded-full min-h-[36px]"
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
