import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
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
