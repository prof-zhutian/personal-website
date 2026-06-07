import type { Book } from "@/types";

// Zhu Tian's Books
// 朱天著作
// Covers downloaded to public/covers/
export const books: Book[] = [
  {
    id: 1,
    titleZh: "赶超的逻辑：文化、制度与中国的崛起",
    titleEn: "The Logic of Catching Up: Culture, Institutions, and China's Rise",
    authorZh: "朱天",
    authorEn: "Zhu Tian",
    descriptionZh: `过去四十多年来的经济高速增长彻底改变了中国的经济面貌。哪些因素导致了中国经济的高速增长？本书提出，真正的"中国增长之谜"不是中国的经济增长为什么比发达国家快很多，而是为什么比其他发展中国家快很多。基于翔实的数据和全球比较分析，作者分析并反驳了几种流行的解释，提出中国的崛起是东亚经济增长奇迹的一部分，而造成中国与其他发展中国家之间差异化表现的主要因素，是文化因素，即儒家文化所倡导的对储蓄和教育的重视。`,
    descriptionEn: `Over the past four decades, China's rapid economic growth has fundamentally transformed its economic landscape. What factors have driven this growth? This book argues that the real "China growth puzzle" is not why China grew faster than developed countries, but why it grew faster than other developing countries. Drawing on comprehensive data and global comparative analysis, the author examines and refutes several popular explanations, proposing that China's rise is part of the East Asian growth miracle. The key differentiating factor is culture — specifically, the Confucian emphasis on savings and education.`,
    coverImage: "/covers/gancao-luoji.jpg",
    purchaseLinks: [
      { labelZh: "当当购买", labelEn: "Dangdang", url: "https://product.dangdang.com/29646613.html" },
      { labelZh: "北京大学出版社", labelEn: "Peking University Press", url: "https://www.pup.cn/" },
    ],
    language: "zh",
    publishYear: 2024,
  },
  {
    id: 2,
    titleZh: "中国式增长",
    titleEn: "Chinese-Style Growth",
    authorZh: "朱天",
    authorEn: "Zhu Tian",
    descriptionZh: "本书通过区分中长期经济增长和短期经济波动，区分增长的直接动因和根本动因，为读者层层剖析中国式增长的特征和动力。作者从全球比较的角度，阐明了中国经济增长的比较优势，回答了中国经济增长为什么这么快这一核心问题。",
    descriptionEn: "This book distinguishes between medium-to-long-term economic growth and short-term economic fluctuations, differentiating between the proximate and fundamental drivers of growth. The author, from a global comparative perspective, illuminates the unique characteristics and driving forces of China's growth, clarifying China's comparative advantages and answering the core question of why China's economy has grown so fast.",
    coverImage: "/covers/zhongguoshi-zengzhang.jpg",
    purchaseLinks: [
      { labelZh: "当当购买", labelEn: "Dangdang", url: "http://product.dangdang.com/28479190.html" },
      { labelZh: "京东购买", labelEn: "JD.com", url: "https://item.jd.com/12590077.html" },
    ],
    language: "zh",
    publishYear: 2019,
  },
  {
    id: 3,
    titleZh: "中国增长之谜",
    titleEn: "The China Growth Puzzle",
    authorZh: "朱天",
    authorEn: "Zhu Tian",
    descriptionZh: "朱天教授从全球比较的视角，层层揭开中国增长之谜。作者认为重视储蓄和重视教育是东亚儒家文化圈经济增长的核心原因，能解释中国、日本和亚洲四小龙近60年来的经济腾飞。本书在大量数据分析的基础上，从体制和文化两个角度为中国经济增长之谜提供了全新的解释框架。",
    descriptionEn: "From a global comparative perspective, Professor Zhu Tian unravels the mystery of China's growth. The author argues that the Confucian emphasis on savings and education is the core reason behind the economic takeoff of China, Japan, and the Four Asian Tigers over the past six decades. Based on extensive data analysis, this book provides a new explanatory framework for China's growth miracle from both institutional and cultural perspectives.",
    coverImage: "/covers/zhongguo-zengzhang-mi.jpg",
    purchaseLinks: [
      { labelZh: "当当购买", labelEn: "Dangdang", url: "https://product.dangdang.com/24007261.html" },
      { labelZh: "京东购买", labelEn: "JD.com", url: "https://item.jd.com/10172690804679.html" },
    ],
    language: "zh",
    publishYear: 2016,
  },
  {
    id: 4,
    titleZh: "Catching Up to America",
    titleEn: "Catching Up to America",
    authorZh: "朱天",
    authorEn: "Zhu Tian",
    descriptionZh: "什么导致了中国经济的快速崛起？本书从全球比较的视角出发，反驳了关于中国增长的几种流行解释——廉价劳动力、出口促进、人口红利、强政府、重商主义及知识产权侵权等。相反，作者证明了过去四十年中使中国增长快于其他发展中国家的关键差异化因素是儒家文化——即对储蓄和教育的重视。本书还探讨了中国何时会超过美国、中美冲突是否会阻碍进一步增长，以及中国的发展模式是否可被复制。",
    descriptionEn: "What has led to China's rapid economic rise? Taking a global comparative approach, this book refutes common explanations for China's growth — cheap labor, export promotion, demographic dividend, strong government, mercantilism, and IP theft. Instead, it demonstrates that the key differentiating factor making China grow faster than other developing countries over the past four decades is Confucian culture, which prioritizes savings and education. The book also addresses when China will overtake the US, how US-China conflict might derail further growth, and whether China's development model can be replicated.",
    coverImage: "/covers/catching-up-america.jpg",
    purchaseLinks: [
      { labelZh: "Amazon", labelEn: "Amazon", url: "https://www.amazon.com/Catching-Up-America-Culture-Institutions/dp/1316510611" },
      { labelZh: "Cambridge University Press", labelEn: "Cambridge University Press", url: "https://www.cambridge.org/core/books/catching-up-to-america/14AC14B98EC04AA8378F16A06870261B" },
    ],
    language: "en",
    publishYear: 2021,
  },
];
