import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string, vars?: Record<string, string>) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

function getInitialLang(): Lang {
  if (typeof window !== 'undefined') {
    if (/^\/en(\/.*)?$/.test(window.location.pathname)) return 'en';
  }
  return 'zh';
}

function getPathForLang(lang: Lang): string {
  return lang === 'en' ? '/en' : '/';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const isEnglish = lang === "en";
    const canonicalUrl = isEnglish
      ? "https://zhutian.ceibs.edu/en"
      : "https://zhutian.ceibs.edu/";
    const title = isEnglish
      ? "Tian Zhu | CEIBS Professor of Economics"
      : "朱天 | 中欧国际工商学院经济学教授";
    const description = isEnglish
      ? "Tian Zhu, Vice President and Co-Dean, Professor of Economics at CEIBS (China Europe International Business School)."
      : "朱天，中欧国际工商学院副院长兼中方教务长、经济学教授、桑坦德经济学教席教授。";

    document.documentElement.lang = isEnglish ? "en" : "zh-CN";
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", canonicalUrl);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", canonicalUrl);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute("content", isEnglish ? "en_US" : "zh_CN");
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "zh" ? "en" : "zh";
      if (typeof window !== 'undefined') {
        const newPath = getPathForLang(next);
        if (window.location.pathname !== newPath) {
          history.pushState(null, '', newPath);
        }
      }
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string>) => {
      let text = translations[lang][key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          text = text.replace(`{${k}}`, v);
        }
      }
      return text;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
