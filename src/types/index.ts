export interface Book {
  id: number;
  titleZh: string;
  titleEn?: string;
  authorZh: string;
  authorEn: string;
  descriptionZh: string;
  descriptionEn: string;
  coverImage: string; // 封面图片路径，放入 public/covers/ 目录
  purchaseLinks: {
    labelZh: string;
    labelEn: string;
    url: string;
  }[];
  language: "zh" | "en";
  publishYear?: number;
}

export interface Article {
  id: number;
  titleZh: string;
  titleEn: string;
  excerptZh: string;
  excerptEn: string;
  date: string;
  sourceZh?: string; // 发表媒体
  sourceEn?: string;
  sourceUrl?: string; // 原文链接
  content?: string; // 原文内容
  coverImage?: string;
  language: "zh" | "en"; // 文章主要语言
}

export interface MediaInterview {
  id: number;
  titleZh: string;
  titleEn: string;
  date: string;
  sourceZh: string;
  sourceEn: string;
  descriptionZh: string;
  descriptionEn: string;
  url?: string;
  language: "zh" | "en";
}

// 确保 esbuild 不会把这个模块当作空模块
export default {};
