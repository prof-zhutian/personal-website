import { useI18n } from "@/i18n/I18nContext";

type EduEntry = {
  year: string;
  degreeZh: string;
  degreeEn: string;
  schoolZh: string;
  schoolEn: string;
  location: string;
};

type WorkEntry = {
  periodZh: string;
  periodEn: string;
  titleZh: string;
  titleEn: string;
  institutionZh: string;
  institutionEn: string;
};

const education: EduEntry[] = [
  {
    year: "1995",
    degreeZh: "经济学博士",
    degreeEn: "PhD in Economics",
    schoolZh: "西北大学",
    schoolEn: "Northwestern University",
    location: "美国",
  },
  {
    year: "1989",
    degreeZh: "经济学硕士",
    degreeEn: "MA in Economics",
    schoolZh: "北京大学",
    schoolEn: "Peking University",
    location: "中国",
  },
  {
    year: "1986",
    degreeZh: "管理信息系统学士",
    degreeEn: "BSc in Management Information System",
    schoolZh: "清华大学",
    schoolEn: "Tsinghua University",
    location: "中国",
  },
];

const workExperience: WorkEntry[] = [
  {
    periodZh: "2026年1月 – 至今",
    periodEn: "January 2026 – Present",
    titleZh: "代理院长 · 副校长兼联席院长 · 经济学教授",
    titleEn: "Interim Dean · Vice President & Co-Dean · Professor of Economics",
    institutionZh: "中欧国际工商学院（CEIBS）",
    institutionEn: "China Europe International Business School (CEIBS)",
  },
  {
    periodZh: "2017年1月 – 2025年3月",
    periodEn: "January 2017 – March 2025",
    titleZh: "副教务长兼EMBA课程主任 · 经济学教授",
    titleEn: "Associate Dean & Director of EMBA Programme · Professor of Economics",
    institutionZh: "中欧国际工商学院（CEIBS）",
    institutionEn: "China Europe International Business School (CEIBS)",
  },
  {
    periodZh: "2011年 – 2016年",
    periodEn: "2011 – 2016",
    titleZh: "经济学与决策科学系主任 · 经济学教授",
    titleEn: "Department Chair of Economics and Decision Science · Professor of Economics",
    institutionZh: "中欧国际工商学院（CEIBS）",
    institutionEn: "China Europe International Business School (CEIBS)",
  },
  {
    periodZh: "1995年 – 2005年",
    periodEn: "1995 – 2005",
    titleZh: "经济学系教授",
    titleEn: "Faculty Member, Department of Economics",
    institutionZh: "香港科技大学",
    institutionEn: "Hong Kong University of Science and Technology (HKUST)",
  },
  {
    periodZh: "1994年 – 1995年",
    periodEn: "1994 – 1995",
    titleZh: "行业分析师",
    titleEn: "Industry Analyst",
    institutionZh: "第一芝加哥银行，美国",
    institutionEn: "First Chicago Bank, USA",
  },
];

export default function About() {
  const { t, lang } = useI18n();
  const isZh = lang === "zh";

  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      {/* 标题 */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          {t("about.title")}
        </h2>
        <p className="text-muted-foreground text-sm tracking-wide uppercase">
          {t("about.subtitle")}
        </p>
      </div>

      {/* 当前职务 */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full inline-block" />
          {t("about.current_title")}
        </h3>
        <div className="ml-3 space-y-1 text-sm leading-relaxed text-muted-foreground">
          {isZh ? (
            <>
              <p>中欧国际工商学院（CEIBS）副校长兼联席院长</p>
              <p>中欧国际工商学院桑坦德经济学讲席教授</p>
              <p>经济学教授</p>
            </>
          ) : (
            <>
              <p>Vice President & Co-Dean, CEIBS</p>
              <p>Santander Chair in Economics, CEIBS</p>
              <p>Professor of Economics, CEIBS</p>
            </>
          )}
        </div>
      </div>

      {/* 教育背景 */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full inline-block" />
          {t("about.education_title")}
        </h3>
        <ul className="ml-3 space-y-3">
          {education.map((edu) => (
            <li key={edu.year} className="flex gap-4 text-sm">
              <span className="text-muted-foreground w-14 shrink-0 font-mono text-xs pt-0.5">
                {edu.year}
              </span>
              <div>
                <p className="font-medium text-foreground">
                  {isZh ? edu.degreeZh : edu.degreeEn}
                </p>
                <p className="text-muted-foreground">
                  {isZh ? edu.schoolZh : edu.schoolEn}, {edu.location}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 工作经历 */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full inline-block" />
          {t("about.experience_title")}
        </h3>
        <ul className="ml-3 space-y-4">
          {workExperience.map((job) => (
            <li key={job.periodEn} className="flex gap-4 text-sm">
              <span className="text-muted-foreground w-44 shrink-0 font-mono text-xs pt-0.5">
                {isZh ? job.periodZh : job.periodEn}
              </span>
              <div>
                <p className="font-medium text-foreground">
                  {isZh ? job.titleZh : job.titleEn}
                </p>
                <p className="text-muted-foreground">
                  {isZh ? job.institutionZh : job.institutionEn}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
