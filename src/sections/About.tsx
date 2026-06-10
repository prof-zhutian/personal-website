import { useI18n } from "@/i18n/I18nContext";

const bioZh = `朱天是中欧国际工商学院副院长兼中方教务长、经济学教授、桑坦德经济学教席教授。他于2005年加入中欧，担任经济学教授，2011-2016年担任经济学和决策科学系系主任，2017年1月至2025年3月，担任副教务长兼EMBA课程主任。加盟中欧之前，朱教授在香港科技大学任教十年。1994-1995年，他在美国第一芝加哥银行（后并入摩根大通银行）任产业分析师。朱天先后在中国和美国接受教育，获清华大学管理信息系统学士（1986）、北京大学经济学硕士（1989）和美国西北大学经济学博士（1995）学位。`;

const bioEn = `Prof. Zhu Tian is Vice President and Co-Dean, Professor of Economics, and Santander Chair in Economics at CEIBS. He joined CEIBS in 2005 as Professor of Economics and was the Department Chair of Economics and Decision Science between 2011 and 2016. From January 2017 to March 2025, Prof. Zhu held the position of Associate Dean and Director of EMBA Programme at CEIBS. Before joining CEIBS, Professor Zhu taught at the Hong Kong University of Science and Technology (HKUST) for ten years. From 1994 to 1995, prior to his academic career, Professor Zhu worked as an Industry Analyst for the First Chicago Bank in the United States. Educated in China and the US, he received his BSc from Tsinghua University (1986), MA from Peking University (1989), and PhD in Economics from Northwestern University, United States (1995).`;

export default function About() {
  const { t, lang } = useI18n();
  const isZh = lang === "zh";

  return (
    <section id="about" className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-5 sm:mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          {t("about.title")}
        </h2>
        <div className="w-10 h-0.5 bg-primary/40 mx-auto" />
      </div>

      <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
        <p className="text-sm sm:text-base text-foreground/90">
          {isZh ? bioZh : bioEn}
        </p>
      </div>
    </section>
  );
}
