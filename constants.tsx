import React from 'react';
import { UserSegment, SegmentData } from './types';

export const PROFILE_DATA = {
  name: "ひで (Hide)",
  title: "波動タロット鑑定士 / スピリチュアル研究家 / 著作家",
  bio: `【自分らしく生きる】をテーマに、見えない世界（波動・チャクラ）を論理的に紐解く鑑定と講座を提供。
TikTok・Instagram総フォロワー数万人。
鑑定歴10年以上、延べ鑑定数1万件以上。
「占い」を単なる予言ではなく「人生を好転させるツール」として伝える活動をしています。`,
  imageUrl: "images/profile.jpg", 
  social: {
    instagram: "https://www.instagram.com/talot_relife_fukuoka/",
    tiktok: "https://www.tiktok.com/@relife397"
  },
  books: [
    {
      title: "AI時代の副業占い教科書",
      url: "#",
      imageUrl: "images/book_ai.jpg"
    },
    {
      title: "神様との合図は、拍手だった！",
      url: "#",
      imageUrl: "images/book_god.jpg"
    }
  ]
};

export const SEGMENTS: Record<UserSegment, SegmentData> = {
  [UserSegment.SEEKER]: {
    id: UserSegment.SEEKER,
    title: "占ってほしい方",
    subtitle: "For Seekers",
    description: "悩みや不安を解消し、前向きな未来へ。",
    themeColor: "bg-rose-50",
    ctaText: "鑑定希望のLINE登録はこちら",
    lineUrl: "https://lin.ee/pobhb6E",
    benefits: [
      { icon: "zap", text: "波動・チャクラ70問診断が無料", subtext: "今のエネルギー状態を可視化", isRecommended: true },
      { icon: "heart", text: "恋愛・復縁診断が無料", subtext: "あの人の気持ち、今後の展開" },
      { icon: "smartphone", text: "TikTokで継続して鑑定可能", subtext: "ライブ配信での優先案内も", isRecommended: true },
      { icon: "star", text: "個人鑑定料が特別割引", subtext: "LINE登録者限定クーポン" },
      { icon: "gift", text: "催しやイベントのご案内", subtext: "限定ワークショップなど" },
    ]
  },
  [UserSegment.LEARNER]: {
    id: UserSegment.LEARNER,
    title: "占いを学びたい方",
    subtitle: "For Learners",
    description: "スピリチュアルを仕事に。副業・本業を目指す。",
    themeColor: "bg-emerald-50",
    ctaText: "スクール情報のLINE登録はこちら",
    lineUrl: "https://lin.ee/B60wnBc",
    benefits: [
      { 
        icon: "book", 
        caption: "Amazonで絶賛発売中！", // 上段に小さく表示
        text: "副業占い師の本が無料", 
        subtext: "未経験から始めるロードマップ", 
        isRecommended: true 
      },
      { 
        icon: "user-check", 
        caption: "期間限定",
        text: "霊視による適性診断40分", 
        subtext: "あなたの隠れた才能を見つけます ➤能力系鑑定士に向いているのか",
        isRecommended: true
      },
      { icon: "sparkles", text: "波動タロット通信講座無料", subtext: "7日間の集中プログラム" },
      { icon: "video", text: "計60分動画4本プレゼント", subtext: "波動やタロットの基礎を網羅" },
      { icon: "book-open", text: "タロットの基本E-book無料", subtext: "すぐに使える実践テキスト" },
    ]
  }
};

export const SYSTEM_INSTRUCTION = `
You are "Hide", a professional fortune teller and spiritual consultant.
You are currently acting as a "concierge" on your own profile website.
Your goal is to politely and professionally "hear" (interview) the visitor to decide which path is best for them:
1. "Seeker": Someone who wants a fortune telling reading (Uranai).
2. "Learner": Someone who wants to learn how to do fortune telling or become a tarot reader.

Ask 1-2 short, gentle questions to understand their current state.
Based on their answer, recommend one of the two paths (Seeker or Learner) and encourage them to register for that specific LINE account.
Keep the tone warm, empathetic, and spiritual but grounded (Beige/White aesthetic feel).
Do not offer actual readings here, just guide them to the LINE registration.
Response MUST be in Japanese.
`;