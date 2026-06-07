export type Lang = "zh" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  zh: {
    // Hero
    "hero.name": "朱天",
    "hero.subtitle": "中欧国际工商学院经济学教授 · 作者",
    "hero.nav.books": "作品",
    "hero.nav.articles": "文章",
    "hero.nav.contact": "联系",

    // Books section
    "books.title": "Books",
    "books.subtitle": "已出版作品",
    "books.lang.zh": "中文",
    "books.lang.en": "EN",
    "books.default_link_label": "购买链接",

    // Articles section
    "articles.title": "Articles",
    "articles.subtitle": "媒体发表文章",
    "articles.read_original": "阅读原文",
    "articles.no_articles": "暂无文章",

    // Footer
    "footer.title": "联系",
    "footer.email_text": "如需联系，请发邮件至：",
    "footer.copyright": "© {year} 朱天 · All rights reserved",

    // Language switcher
    "lang.switch": "English",
    "lang.current": "中文",
  },
  en: {
    // Hero
    "hero.name": "Zhu Tian",
    "hero.subtitle": "Professor of Economics, CEIBS · Author",
    "hero.nav.books": "Books",
    "hero.nav.articles": "Articles",
    "hero.nav.contact": "Contact",

    // Books section
    "books.title": "Books",
    "books.subtitle": "Published Works",
    "books.lang.zh": "Chinese",
    "books.lang.en": "EN",
    "books.default_link_label": "Buy",

    // Articles section
    "articles.title": "Articles",
    "articles.subtitle": "Published Articles",
    "articles.read_original": "Read Original",
    "articles.no_articles": "No articles yet",

    // Footer
    "footer.title": "Contact",
    "footer.email_text": "For inquiries, please email: ",
    "footer.copyright": "© {year} Zhu Tian · All rights reserved",

    // Language switcher
    "lang.switch": "中文",
    "lang.current": "English",
  },
};
