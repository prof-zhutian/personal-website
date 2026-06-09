import { useI18n } from "@/i18n/I18nContext";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="border-t border-border/60 mt-8">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("footer.title")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("footer.email_text")}
          <a
            href="mailto:ztian@ceibs.edu"
            className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
          >
            ztian@ceibs.edu
          </a>
        </p>
        <Separator className="!my-8 max-w-xs mx-auto" />
        <p className="text-xs text-muted-foreground/60 space-x-2">
          <span className="font-medium text-foreground/40">中欧国际工商学院</span>
          <span className="text-border/60">|</span>
          <span className="font-medium text-foreground/40">CEIBS</span>
        </p>
        <p className="text-xs text-muted-foreground/60">
          {t("footer.copyright", { year: String(new Date().getFullYear()) })}
        </p>
      </div>
    </footer>
  );
}

function Separator({ className = "" }: { className?: string }) {
  return <hr className={`border-t border-border/50 ${className}`} />;
}
