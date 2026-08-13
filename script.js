// ============================================================
// 다국어 콘텐츠 (일본어 / 한국어 / 영어)
// 외부 JSON을 쓰지 않고 여기 객체에 직접 보관합니다.
// 파일을 file:// 로 열어도(로컬 더블클릭) fetch/CORS 문제 없이 동작합니다.
// ============================================================
const translations = {
  ja: {
    meta: { title: "ハン・ユンス | Portfolio" },
    nav: { about: "自己紹介", projects: "プロジェクト", contact: "お問い合わせ" },
    hero: {
      name: "ハン・ユンス",
      role: "システムエンジニア志望 ・ 2027年卒業予定",
      quote: "「誰かの困りごとを、自分の工夫や技術で少しだけ軽くすること。」",
    },
    about: {
      heading: "自己紹介",
      bio: [
        "人が動きやすいように場を整える役割にやりがいを感じています。K-Move日本Java専門家育成課程で、漢字暗記に苦労する研修生の声をきっかけに、単語帳アプリをゼロから開発しました。",
        "早く役に立ちたいという気持ちが先に立ち、使う人の状況を確認する前に作り始めてしまうのが自分の課題です。今は、作り始める前に「いつ・どこで・何で使うか」を必ず確認するようにしています。",
      ],
      eduTitle: "学歴・現在",
      eduList: [
        "江南大学校 人工知能融合工学部 データサイエンス専攻（2020.03 – 2027.02 卒業見込み）",
        "K-Move 日本Java専門家育成課程 受講中（2026）",
      ],
      skillsTitle: "スキル",
      skillCats: { lang: "言語", ai: "AI・ML", data: "データ分析", tool: "ツール" },
      awardsTitle: "受賞・資格",
      awardsList: [
        "学内データサイエンスモデリングコンテスト 優秀賞（2位）— KoBERTによる論文分野分類モデル（2025.11）",
        "Google Analytics（GA4）修了（2025.11）",
      ],
      contactTitle: "Contact",
      contactEmailLabel: "メール",
      contactGithubLabel: "GitHub",
    },
    p1: {
      label: "プロジェクト 01",
      title: "学術論文 研究分野自動分類モデル",
      period: "2025.10 – 2025.11",
      desc: "論文タイトルと要旨だけで5つの研究分野（農学・社会福祉学・社会学・電子情報通信工学・工学一般）を自動分類するKoBERTベースのテキスト分類モデル。2人チームのリーダーとして、手法を比較しながら選び直す進め方を主導しました。",
      achievements: [
        "title + [SEP] + abstract 入力によるマルチクラス分類",
        "クラス不均衡補正（重み付き損失）＋ Macro-F1基準のEarly Stopping",
        "系列長384/512の二重学習をsoft-voteアンサンブル",
        "Val Accuracy 0.9691 / Macro-F1 0.956",
        "学内データサイエンス学術祭 優秀賞（2位）",
      ],
      linkGithub: "コードを見る →",
    },
    p2: {
      label: "プロジェクト 02",
      title: "KMOVE単語アプリ — 忘却曲線ベースの暗記Webアプリ",
      period: "2026",
      desc: "K-Move研修の同期が漢字暗記に苦労している姿を見て作ったStreamlitアプリ。GitHubリポジトリをそのままデータベースとして使い、専用サーバーなしで単語帳の追加・進捗保存まで処理します。",
      achievements: [
        "自己評価4段階に応じて再出題位置が変わる「忘却曲線キュー」",
        "GitHub Contents APIをデータ層に採用（サーバーレス構成）",
        "学習・練習・試験・単語帳追加・文章暗記の5モード",
        "キーボードショートカット、90秒セッションkeep-alive、フォント調整などUX改善",
      ],
      note: "実際に使ってくれた研修生から「文字が小さい」「ボタンの位置が毎回変わる」という声をもらい、フォント調整機能と固定アクションバーを追加しました。作る前に使う人の環境を確認する大切さを学んだプロジェクトです。",
      linkGithub: "コードを見る →",
      linkDemo: "デモを見る →",
    },
    skillsSection: { title: "主要技術スタック" },
    contact: { title: "Contact" },
    footer: { name: "ハン・ユンス", rights: "All rights reserved." },
  },

  ko: {
    meta: { title: "한윤수 | Portfolio" },
    nav: { about: "소개", projects: "프로젝트", contact: "연락처" },
    hero: {
      name: "한윤수",
      role: "시스템엔지니어 지망 · 2027년 졸업예정",
      quote: "\"누군가의 어려움을, 나의 궁리나 기술로 조금이나마 가볍게 하는 것.\"",
    },
    about: {
      heading: "소개",
      bio: [
        "주위가 움직이기 쉽도록 자리를 정돈하는 역할에 보람을 느낍니다. K-Move 일본 Java 전문가 육성과정에서 한자 암기에 어려움을 겪는 연수생들의 목소리를 계기로, 단어장 앱을 처음부터 직접 개발했습니다.",
        "빨리 도움이 되고 싶은 마음이 앞서 사용자의 상황을 확인하기 전에 만들기 시작하는 것이 저의 과제입니다. 지금은 만들기 전에 \"언제·어디서·무엇으로 쓰는지\"를 반드시 먼저 확인합니다.",
      ],
      eduTitle: "학력 · 현재",
      eduList: [
        "강남대학교 인공지능융합공학부 데이터사이언스전공 (2020.03 ~ 2027.02 졸업예정)",
        "K-Move 일본 Java 전문가 육성과정 수강 중 (2026)",
      ],
      skillsTitle: "보유 기술",
      skillCats: { lang: "언어", ai: "AI · ML", data: "데이터 분석", tool: "도구" },
      awardsTitle: "수상 및 자격증",
      awardsList: [
        "교내 데이터사이언스 모델링 경진대회 우수상(2위) — KoBERT 논문 분야 분류 모델 (2025.11)",
        "Google Analytics(GA4) 수료 (2025.11)",
      ],
      contactTitle: "Contact",
      contactEmailLabel: "이메일",
      contactGithubLabel: "GitHub",
    },
    p1: {
      label: "프로젝트 01",
      title: "학술논문 연구분야 자동분류 모델",
      period: "2025.10 – 2025.11",
      desc: "논문 제목과 초록만으로 5개 연구분야(농학·사회복지학·사회학·전자정보통신공학·공학일반)를 자동 분류하는 KoBERT 기반 텍스트 분류 모델. 2인 팀 리더로서 방법을 비교하고 다시 선택하는 진행 방식을 주도했습니다.",
      achievements: [
        "title + [SEP] + abstract 입력 기반 다중 클래스 분류",
        "클래스 불균형 보정(가중 손실) + Macro-F1 기준 Early Stopping",
        "시퀀스 길이 384/512 이중 학습 후 soft-vote 앙상블",
        "Val Accuracy 0.9691 / Macro-F1 0.956",
        "교내 데이터사이언스 학술제 우수상(2위)",
      ],
      linkGithub: "코드 보기 →",
    },
    p2: {
      label: "프로젝트 02",
      title: "KMOVE 단어장 앱 — 망각곡선 기반 암기 웹앱",
      period: "2026",
      desc: "K-Move 연수 동기들이 한자 암기에 어려움을 겪는 모습을 보고 만든 Streamlit 앱. GitHub 저장소를 그대로 데이터베이스로 사용해, 별도 서버 없이 단어장 추가부터 진행 상황 저장까지 처리합니다.",
      achievements: [
        "자기평가 4단계에 따라 재출제 위치가 달라지는 '망각곡선 큐'",
        "GitHub Contents API를 데이터 계층으로 사용(서버리스 구조)",
        "학습·연습·시험·단어장추가·지문암기 5개 모드",
        "키보드 단축키, 90초 세션 keep-alive, 폰트 조절 등 UX 개선",
      ],
      note: "실제로 사용한 연수생들에게 '글자가 작다', '버튼 위치가 매번 바뀐다'는 피드백을 받고 폰트 조절 기능과 하단 고정 액션바를 추가했습니다. 만들기 전에 사용자의 환경을 먼저 확인하는 것의 중요성을 배운 프로젝트입니다.",
      linkGithub: "코드 보기 →",
      linkDemo: "데모 보기 →",
    },
    skillsSection: { title: "주요 기술 스택" },
    contact: { title: "Contact" },
    footer: { name: "한윤수", rights: "All rights reserved." },
  },

  en: {
    meta: { title: "Han Yoonsu | Portfolio" },
    nav: { about: "About", projects: "Projects", contact: "Contact" },
    hero: {
      name: "Han Yoonsu",
      role: "Aspiring System Engineer · Class of 2027",
      quote: "\"To make someone's difficulty a little lighter, through my own ideas and skills.\"",
    },
    about: {
      heading: "About",
      bio: [
        "I find purpose in creating an environment where people around me can move more easily. During the K-Move Japan Java Expert Training Program, I heard trainees struggle to memorize kanji and built a vocabulary app from scratch to help.",
        "My challenge is that eagerness to help comes first, and I sometimes start building before checking how it will actually be used. Now I always confirm \"when, where, and on what device\" before writing the first line of code.",
      ],
      eduTitle: "Education & Current",
      eduList: [
        "Kangnam University — B.S. in Data Science, AI Convergence Engineering (Mar 2020 – Feb 2027, expected)",
        "K-Move Japan Java Expert Training Program (2026)",
      ],
      skillsTitle: "Skills",
      skillCats: { lang: "Languages", ai: "AI & ML", data: "Data Analysis", tool: "Tools" },
      awardsTitle: "Awards & Certifications",
      awardsList: [
        "Runner-up, In-house Data Science Modeling Contest — KoBERT paper-topic classifier (Nov 2025)",
        "Google Analytics (GA4) Certified (Nov 2025)",
      ],
      contactTitle: "Contact",
      contactEmailLabel: "Email",
      contactGithubLabel: "GitHub",
    },
    p1: {
      label: "PROJECT 01",
      title: "Academic Paper Topic Classifier",
      period: "Oct 2025 – Nov 2025",
      desc: "A KoBERT-based text classifier that predicts one of 5 academic fields (agriculture, social welfare, sociology, electronics/telecom engineering, general engineering) from a paper's title and abstract alone. As the 2-person team lead, I drove an iterative process of comparing methods and re-deciding based on results.",
      achievements: [
        "Multi-class classification from title + [SEP] + abstract input",
        "Class-imbalance correction (weighted loss) + Macro-F1-based early stopping",
        "Soft-vote ensemble of models trained at sequence lengths 384 and 512",
        "Val Accuracy 0.9691 / Macro-F1 0.956",
        "Runner-up, in-house Data Science Festival",
      ],
      linkGithub: "View Code →",
    },
    p2: {
      label: "PROJECT 02",
      title: "KMOVE Vocabulary App — Forgetting-Curve Study Tool",
      period: "2026",
      desc: "A Streamlit app I built after watching K-Move classmates struggle to memorize kanji. It uses a GitHub repository as its database, handling everything from adding word lists to saving progress without a dedicated server.",
      achievements: [
        "A \"forgetting-curve queue\" that reorders upcoming words based on a 4-level self-assessment",
        "GitHub Contents API as the data layer — fully serverless",
        "5 study modes: learn, practice, exam, add-wordlist, and passage memorization",
        "UX polish: keyboard shortcuts, a 90s session keep-alive ping, adjustable font size",
      ],
      note: "After trainees told me the text was too small and the button position kept shifting on their phones, I added font-size controls and a sticky action bar. This project taught me to check how people will actually use something before I start building.",
      linkGithub: "View Code →",
      linkDemo: "Live Demo →",
    },
    skillsSection: { title: "Core Tech Stack" },
    contact: { title: "Contact" },
    footer: { name: "Han Yoonsu", rights: "All rights reserved." },
  },
};

const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LANG = "ja";

// ------------------------------------------------------------
// 텍스트 렌더링 헬퍼
// ------------------------------------------------------------
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setList(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    el.appendChild(li);
  });
}

function setParagraphs(id, paragraphs) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = "";
  paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    el.appendChild(p);
  });
}

function render(lang) {
  const t = translations[lang] || translations[DEFAULT_LANG];

  document.documentElement.lang = lang;
  document.title = t.meta.title;
  setText("doc-title", t.meta.title);

  setText("nav-about", t.nav.about);
  setText("nav-projects", t.nav.projects);
  setText("nav-contact", t.nav.contact);

  setText("hero-name", t.hero.name);
  setText("hero-role", t.hero.role);
  setText("hero-quote", t.hero.quote);

  setText("about-heading", t.about.heading);
  setParagraphs("about-bio", t.about.bio);
  setText("about-edu-title", t.about.eduTitle);
  setList("about-edu-list", t.about.eduList);
  setText("about-skills-title", t.about.skillsTitle);
  setText("skill-cat-lang", t.about.skillCats.lang);
  setText("skill-cat-ai", t.about.skillCats.ai);
  setText("skill-cat-data", t.about.skillCats.data);
  setText("skill-cat-tool", t.about.skillCats.tool);
  setText("about-awards-title", t.about.awardsTitle);
  setList("about-awards-list", t.about.awardsList);
  setText("about-contact-title", t.about.contactTitle);
  setText("about-contact-email-label", t.about.contactEmailLabel);
  setText("about-contact-github-label", t.about.contactGithubLabel);

  setText("p1-label", t.p1.label);
  setText("p1-title", t.p1.title);
  setText("p1-period", t.p1.period);
  setText("p1-desc", t.p1.desc);
  setList("p1-achievements", t.p1.achievements);
  setText("p1-link-github", t.p1.linkGithub);

  setText("p2-label", t.p2.label);
  setText("p2-title", t.p2.title);
  setText("p2-period", t.p2.period);
  setText("p2-desc", t.p2.desc);
  setList("p2-achievements", t.p2.achievements);
  setText("p2-note", t.p2.note);
  setText("p2-link-github", t.p2.linkGithub);
  setText("p2-link-demo", t.p2.linkDemo);

  setText("skills-title", t.skillsSection.title);
  setText("contact-title", t.contact.title);
  setText("footer-name", t.footer.name);
  setText("footer-rights", t.footer.rights);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* 시크릿 모드 등에서 localStorage가 막혀 있어도 렌더링은 계속되도록 무시합니다. */
  }
}

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch (e) {
    /* localStorage 접근 불가 시 기본값 사용 */
  }
  return DEFAULT_LANG;
}

// ------------------------------------------------------------
// 초기화
// ------------------------------------------------------------
render(getInitialLang());

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => render(btn.dataset.lang));
});

document.getElementById("year").textContent = new Date().getFullYear();

// 부드러운 스크롤 (앵커 클릭 시)
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// 카드가 스크롤을 내릴 때 부드럽게 등장하는 효과 (모션 최소화를 선호하는 사용자는 건너뜁니다)
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  import("animejs")
    .then(({ animate, onScroll }) => {
      animate(".card, .info-card", {
        y: [40, 0],
        opacity: [0, 1],
        duration: 900,
        delay: (_, i) => i * 60,
        ease: "outExpo",
        autoplay: onScroll({
          container: ".scroll-container",
        }),
      });
    })
    .catch(() => {
      /* CDN 로드 실패 시에도 콘텐츠는 이미 보이는 상태이므로 조용히 무시합니다. */
    });
}
