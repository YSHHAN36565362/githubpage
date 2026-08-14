/* ==================================================================
   script.js — 한윤수 포트폴리오

   설계 원칙 (이전 버전에서 텍스트가 "..." 로 남고 언어 버튼이 죽었던
   사고를 다시 만들지 않기 위한 규칙):

   1) 이 파일은 <script type="module"> 이 아니라 **일반 script** 입니다.
      import map / esm.sh CDN 에 의존하면, 그 CDN 하나만 막혀도
      파일 전체가 실행되지 않아 페이지가 통째로 죽습니다. (이전 원인)
   2) anime.js 는 저장소에 직접 포함(anime.min.js)했고, **없어도 됩니다.**
      모든 애니메이션은 "자연 상태(보이는 상태)로 도착"하도록만 만들어서,
      애니메이션이 아예 실행되지 않아도 화면은 정상입니다.
   3) 언어 전환·본문 렌더링은 외부 의존성이 0 입니다.
   ================================================================== */

(function () {
  "use strict";

  // ==================================================================
  // 1. 다국어 콘텐츠 (일본어 / 한국어 / 영어)
  // ==================================================================
  var translations = {
    ja: {
      meta: { title: "ハン・ユンス | Portfolio" },
      nav: { about: "自己紹介", projects: "プロジェクト", contact: "お問い合わせ" },
      hero: {
        eyebrow: "Data Science × System Engineer",
        name: "ハン・ユンス",
        role: "システムエンジニア志望 ・ 2027年卒業予定",
        quote: "「誰かの困りごとを、自分の工夫や技術で少しだけ軽くすること。」",
        ctaProjects: "プロジェクトを見る",
        ctaContact: "連絡する",
      },
      about: {
        heading: "自己紹介",
        tagline: "誰かの困りごとを、自分の工夫や技術で少しだけ軽くする人。",
        chips: ["データ分析", "AI・ML", "Webアプリ開発"],
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
        contactEmailLabel: "メール",
        contactGithubLabel: "GitHub",
      },
      projectsHeading: "プロジェクト",
      p1: {
        title: "学術論文 研究分野自動分類モデル",
        period: "2025.10 – 2025.11",
        desc: "論文タイトルと要旨だけで5つの研究分野（農学・社会福祉学・社会学・電子情報通信工学・工学一般）を自動分類するKoBERTベースのテキスト分類モデル。2人チームのリーダーとして、手法を比較しながら選び直す進め方を主導しました。",
        stats: [
          { value: "96.9%", label: "Val Accuracy" },
          { value: "0.956", label: "Macro F1" },
          { value: "2位", label: "学内学術祭" },
        ],
        achievements: [
          "title + [SEP] + abstract 入力によるマルチクラス分類",
          "クラス不均衡補正（重み付き損失）＋ Macro-F1基準のEarly Stopping",
          "系列長384/512の二重学習をsoft-voteアンサンブル",
        ],
        linkGithub: "コードを見る",
      },
      p2: {
        title: "KMOVE単語アプリ — 忘却曲線ベースの暗記Webアプリ",
        period: "2026",
        desc: "K-Move研修の同期が漢字暗記に苦労している姿を見て作ったStreamlitアプリ。GitHubリポジトリをそのままデータベースとして使い、専用サーバーなしで単語帳の追加・進捗保存まで処理します。",
        stats: [
          { value: "5", label: "学習モード" },
          { value: "4段階", label: "自己評価" },
          { value: "¥0", label: "サーバー費用" },
        ],
        achievements: [
          "自己評価4段階に応じて再出題位置が変わる「忘却曲線キュー」",
          "GitHub Contents APIをデータ層に採用（サーバーレス構成）",
          "キーボードショートカット、90秒セッションkeep-alive、フォント調整などUX改善",
        ],
        note: "実際に使ってくれた研修生から「文字が小さい」「ボタンの位置が毎回変わる」という声をもらい、フォント調整機能と固定アクションバーを追加しました。作る前に使う人の環境を確認する大切さを学んだプロジェクトです。",
        linkGithub: "コードを見る",
        linkDemo: "デモを見る",
      },
      skillsSection: { title: "主要技術スタック" },
      contact: {
        title: "Contact",
        lead: "ご連絡はこちらからお願いいたします。",
      },
      footer: { name: "ハン・ユンス", rights: "All rights reserved." },
    },

    ko: {
      meta: { title: "한윤수 | Portfolio" },
      nav: { about: "소개", projects: "프로젝트", contact: "연락처" },
      hero: {
        eyebrow: "Data Science × System Engineer",
        name: "한윤수",
        role: "시스템엔지니어 지망 · 2027년 졸업예정",
        quote: "“누군가의 어려움을, 나의 궁리나 기술로 조금이나마 가볍게 하는 것.”",
        ctaProjects: "프로젝트 보기",
        ctaContact: "연락하기",
      },
      about: {
        heading: "소개",
        tagline: "누군가의 어려움을 궁리와 기술로 조금 가볍게 만드는 사람.",
        chips: ["데이터 분석", "AI · ML", "웹 앱 개발"],
        bio: [
          "주위가 움직이기 쉽도록 자리를 정돈하는 역할에 보람을 느낍니다. K-Move 일본 Java 전문가 육성과정에서 한자 암기에 어려움을 겪는 연수생들의 목소리를 계기로, 단어장 앱을 처음부터 직접 개발했습니다.",
          "빨리 도움이 되고 싶은 마음이 앞서 사용자의 상황을 확인하기 전에 만들기 시작하는 것이 저의 과제입니다. 지금은 만들기 전에 “언제·어디서·무엇으로 쓰는지”를 반드시 먼저 확인합니다.",
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
        contactEmailLabel: "이메일",
        contactGithubLabel: "GitHub",
      },
      projectsHeading: "프로젝트",
      p1: {
        title: "학술논문 연구분야 자동분류 모델",
        period: "2025.10 – 2025.11",
        desc: "논문 제목과 초록만으로 5개 연구분야(농학·사회복지학·사회학·전자정보통신공학·공학일반)를 자동 분류하는 KoBERT 기반 텍스트 분류 모델. 2인 팀 리더로서 방법을 비교하고 다시 선택하는 진행 방식을 주도했습니다.",
        stats: [
          { value: "96.9%", label: "Val Accuracy" },
          { value: "0.956", label: "Macro F1" },
          { value: "2위", label: "교내 학술제" },
        ],
        achievements: [
          "title + [SEP] + abstract 입력 기반 다중 클래스 분류",
          "클래스 불균형 보정(가중 손실) + Macro-F1 기준 Early Stopping",
          "시퀀스 길이 384/512 이중 학습 후 soft-vote 앙상블",
        ],
        linkGithub: "코드 보기",
      },
      p2: {
        title: "KMOVE 단어장 앱 — 망각곡선 기반 암기 웹앱",
        period: "2026",
        desc: "K-Move 연수 동기들이 한자 암기에 어려움을 겪는 모습을 보고 만든 Streamlit 앱. GitHub 저장소를 그대로 데이터베이스로 사용해, 별도 서버 없이 단어장 추가부터 진행 상황 저장까지 처리합니다.",
        stats: [
          { value: "5", label: "학습 모드" },
          { value: "4단계", label: "자기평가" },
          { value: "0원", label: "서버 비용" },
        ],
        achievements: [
          "자기평가 4단계에 따라 재출제 위치가 달라지는 '망각곡선 큐'",
          "GitHub Contents API를 데이터 계층으로 사용(서버리스 구조)",
          "키보드 단축키, 90초 세션 keep-alive, 폰트 조절 등 UX 개선",
        ],
        note: "실제로 사용한 연수생들에게 '글자가 작다', '버튼 위치가 매번 바뀐다'는 피드백을 받고 폰트 조절 기능과 하단 고정 액션바를 추가했습니다. 만들기 전에 사용자의 환경을 먼저 확인하는 것의 중요성을 배운 프로젝트입니다.",
        linkGithub: "코드 보기",
        linkDemo: "데모 보기",
      },
      skillsSection: { title: "주요 기술 스택" },
      contact: {
        title: "Contact",
        lead: "연락은 아래로 부탁드립니다.",
      },
      footer: { name: "한윤수", rights: "All rights reserved." },
    },

    en: {
      meta: { title: "Han Yoonsu | Portfolio" },
      nav: { about: "About", projects: "Projects", contact: "Contact" },
      hero: {
        eyebrow: "Data Science × System Engineer",
        name: "Han Yoonsu",
        role: "Aspiring System Engineer · Class of 2027",
        quote: "“To make someone's difficulty a little lighter, through my own ideas and skills.”",
        ctaProjects: "View Projects",
        ctaContact: "Get in Touch",
      },
      about: {
        heading: "About",
        tagline: "Making someone's difficulty a little lighter, one build at a time.",
        chips: ["Data Analysis", "AI & ML", "Web Apps"],
        bio: [
          "I find purpose in creating an environment where people around me can move more easily. During the K-Move Japan Java Expert Training Program, I heard trainees struggle to memorize kanji and built a vocabulary app from scratch to help.",
          "My challenge is that eagerness to help comes first, and I sometimes start building before checking how it will actually be used. Now I always confirm “when, where, and on what device” before writing the first line of code.",
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
        contactEmailLabel: "Email",
        contactGithubLabel: "GitHub",
      },
      projectsHeading: "Projects",
      p1: {
        title: "Academic Paper Topic Classifier",
        period: "Oct 2025 – Nov 2025",
        desc: "A KoBERT-based text classifier that predicts one of 5 academic fields (agriculture, social welfare, sociology, electronics/telecom engineering, general engineering) from a paper's title and abstract alone. As the 2-person team lead, I drove an iterative process of comparing methods and re-deciding based on results.",
        stats: [
          { value: "96.9%", label: "Val Accuracy" },
          { value: "0.956", label: "Macro F1" },
          { value: "2nd", label: "Data Sci. Festival" },
        ],
        achievements: [
          "Multi-class classification from title + [SEP] + abstract input",
          "Class-imbalance correction (weighted loss) + Macro-F1-based early stopping",
          "Soft-vote ensemble of models trained at sequence lengths 384 and 512",
        ],
        linkGithub: "View Code",
      },
      p2: {
        title: "KMOVE Vocabulary App — Forgetting-Curve Study Tool",
        period: "2026",
        desc: "A Streamlit app I built after watching K-Move classmates struggle to memorize kanji. It uses a GitHub repository as its database, handling everything from adding word lists to saving progress without a dedicated server.",
        stats: [
          { value: "5", label: "Study Modes" },
          { value: "4-level", label: "Self-Assessment" },
          { value: "$0", label: "Server Cost" },
        ],
        achievements: [
          "A “forgetting-curve queue” that reorders upcoming words based on a 4-level self-assessment",
          "GitHub Contents API as the data layer — fully serverless",
          "UX polish: keyboard shortcuts, a 90s session keep-alive ping, adjustable font size",
        ],
        note: "After trainees told me the text was too small and the button position kept shifting on their phones, I added font-size controls and a sticky action bar. This project taught me to check how people will actually use something before I start building.",
        linkGithub: "View Code",
        linkDemo: "Live Demo",
      },
      skillsSection: { title: "Core Tech Stack" },
      contact: {
        title: "Contact",
        lead: "Feel free to reach out.",
      },
      footer: { name: "Han Yoonsu", rights: "All rights reserved." },
    },
  };

  var STORAGE_KEY = "portfolio-lang";
  var DEFAULT_LANG = "ja";

  // ==================================================================
  // 2. 렌더링 헬퍼 (외부 의존성 없음)
  // ==================================================================
  function byId(id) {
    return document.getElementById(id);
  }

  function setText(id, value) {
    var el = byId(id);
    if (el) el.textContent = value;
  }

  function fillList(id, items, tag, className) {
    var el = byId(id);
    if (!el) return;
    el.innerHTML = "";
    for (var i = 0; i < items.length; i++) {
      var node = document.createElement(tag);
      if (className) node.className = className;
      node.textContent = items[i];
      el.appendChild(node);
    }
  }

  function fillStats(id, stats) {
    var el = byId(id);
    if (!el) return;
    el.innerHTML = "";
    for (var i = 0; i < stats.length; i++) {
      var wrap = document.createElement("div");
      wrap.className = "stat";

      var value = document.createElement("span");
      value.className = "stat-value";
      value.textContent = stats[i].value;

      var label = document.createElement("span");
      label.className = "stat-label";
      label.textContent = stats[i].label;

      wrap.appendChild(value);
      wrap.appendChild(label);
      el.appendChild(wrap);
    }
  }

  function render(lang) {
    var t = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.lang = lang;
    document.title = t.meta.title;

    setText("nav-about", t.nav.about);
    setText("nav-projects", t.nav.projects);
    setText("nav-contact", t.nav.contact);

    setText("hero-eyebrow", t.hero.eyebrow);
    setText("hero-name", t.hero.name);
    setText("hero-role", t.hero.role);
    setText("hero-quote", t.hero.quote);
    setText("hero-cta-projects", t.hero.ctaProjects);
    setText("hero-cta-contact", t.hero.ctaContact);

    setText("about-heading", t.about.heading);
    setText("profile-name", t.hero.name);
    setText("profile-tagline", t.about.tagline);
    fillList("profile-chips", t.about.chips, "li");
    fillList("about-bio", t.about.bio, "p");
    setText("about-edu-title", t.about.eduTitle);
    fillList("about-edu-list", t.about.eduList, "li");
    setText("about-skills-title", t.about.skillsTitle);
    setText("skill-cat-lang", t.about.skillCats.lang);
    setText("skill-cat-ai", t.about.skillCats.ai);
    setText("skill-cat-data", t.about.skillCats.data);
    setText("skill-cat-tool", t.about.skillCats.tool);
    setText("about-awards-title", t.about.awardsTitle);
    fillList("about-awards-list", t.about.awardsList, "li");
    setText("about-contact-email-label", t.about.contactEmailLabel);
    setText("about-contact-github-label", t.about.contactGithubLabel);

    setText("projects-heading", t.projectsHeading);

    setText("p1-title", t.p1.title);
    setText("p1-period", t.p1.period);
    setText("p1-desc", t.p1.desc);
    fillStats("p1-stats", t.p1.stats);
    fillList("p1-achievements", t.p1.achievements, "li");
    setText("p1-link-github", t.p1.linkGithub);

    setText("p2-title", t.p2.title);
    setText("p2-period", t.p2.period);
    setText("p2-desc", t.p2.desc);
    fillStats("p2-stats", t.p2.stats);
    fillList("p2-achievements", t.p2.achievements, "li");
    setText("p2-note", t.p2.note);
    setText("p2-link-github", t.p2.linkGithub);
    setText("p2-link-demo", t.p2.linkDemo);

    setText("skills-title", t.skillsSection.title);
    setText("contact-title", t.contact.title);
    setText("contact-lead", t.contact.lead);
    setText("footer-name", t.footer.name);
    setText("footer-rights", t.footer.rights);

    var buttons = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute(
        "aria-pressed",
        String(buttons[i].getAttribute("data-lang") === lang)
      );
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* 시크릿 모드 등에서 localStorage가 막혀 있어도 렌더링은 계속됩니다. */
    }
  }

  function getInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) return saved;
    } catch (e) {
      /* localStorage 접근 불가 시 기본값 사용 */
    }
    return DEFAULT_LANG;
  }

  // ==================================================================
  // 3. anime.js 헬퍼
  //    - anime.min.js 가 로드되면 window.anime 에 v4 API가 들어옵니다.
  //    - 로드 실패 시 A() 가 null 을 돌려주고, 모든 애니메이션은 건너뜁니다.
  // ==================================================================
  function A() {
    if (window.anime && typeof window.anime.animate === "function") return window.anime;
    return null;
  }

  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function canAnimate() {
    return !reduceMotion && A() !== null;
  }

  // ------------------------------------------------------------------
  // 3-1. 히어로 타이틀: 글자 단위 등장
  //      animejs.com 의 Animation 예제(splitText + stagger + 키프레임)를
  //      포트폴리오 톤에 맞게 1회 재생 / 짧은 지속시간으로 조정했습니다.
  // ------------------------------------------------------------------
  function animateHeroName() {
    var anime = A();
    if (!anime || reduceMotion) return;
    var el = byId("hero-name");
    if (!el) return;

    try {
      var result = anime.splitText(el, { words: false, chars: true });
      var chars = result && result.chars ? result.chars : null;
      if (!chars || !chars.length) return;

      anime.animate(chars, {
        y: [
          { to: ["-0.55em", "0em"], ease: "outExpo", duration: 620 },
        ],
        opacity: [0, 1],
        delay: anime.stagger(38),
        ease: "outQuad",
      });
    } catch (e) {
      /* 실패해도 h1 은 이미 정상 텍스트 상태이므로 무해합니다. */
    }
  }

  // ------------------------------------------------------------------
  // 3-2. 히어로 나머지 요소 + 배경 노드
  // ------------------------------------------------------------------
  function animateHeroIntro() {
    var anime = A();
    if (!anime || reduceMotion) return;
    try {
      anime.animate(".hero-copy .eyebrow, .hero-copy .role, .hero-copy .quote, .hero-cta", {
        y: [14, 0],
        opacity: [0, 1],
        delay: anime.stagger(90, { start: 180 }),
        duration: 700,
        ease: "outQuad",
      });

      // 노드는 opacity 만 애니메이션합니다.
      // 떠다니는 움직임은 CSS 의 bob 키프레임(transform)이 담당하므로,
      // 여기서 scale/translate 를 건드리면 서로 덮어써서 깨집니다.
      anime.animate(".orbit-field .node", {
        opacity: [0, 1],
        delay: anime.stagger(55),
        duration: 620,
        ease: "outQuad",
      });

      anime.animate(".orbit-field .ring", {
        scale: [0.82, 1],
        opacity: [0, 1],
        duration: 900,
        delay: anime.stagger(120),
        ease: "outExpo",
      });
    } catch (e) {
      /* 무시 */
    }
  }

  // ------------------------------------------------------------------
  // 3-3. 섹션 스크롤 등장
  //      ※ 여기서 중요한 점: 요소의 "기본 상태는 보임" 입니다.
  //        JS가 살아 있을 때만 body.reveal-ready 를 붙여 숨김→등장을 켭니다.
  //        그래서 스크립트가 죽어도 콘텐츠가 사라지는 일은 없습니다.
  // ------------------------------------------------------------------
  function initScrollReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length || !("IntersectionObserver" in window) || reduceMotion) return;

    document.body.classList.add("reveal-ready");

    var anime = A();

    var io = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i];

          // 화면에 들어왔을 때뿐 아니라, "이미 위로 지나가 버린" 경우도 함께
          // 처리합니다. 앵커 링크(#projects)로 바로 점프하거나 Ctrl+End 로
          // 한 번에 내려가면, 중간 요소는 교차 상태를 건너뛰어 영영 숨은
          // 채로 남을 수 있기 때문입니다.
          var scrolledPast = entry.boundingClientRect.top < 0;
          if (!entry.isIntersecting && !scrolledPast) continue;

          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);

          // 프로젝트 행이 보이면 그 안의 지표 숫자를 순차적으로 강조
          if (anime && entry.isIntersecting && entry.target.classList.contains("project-row")) {
            var stats = entry.target.querySelectorAll(".stat");
            if (stats.length) {
              try {
                anime.animate(stats, {
                  y: [10, 0],
                  opacity: [0, 1],
                  scale: [0.94, 1],
                  delay: anime.stagger(80, { start: 160 }),
                  duration: 620,
                  ease: "outBack",
                });
              } catch (e) {
                /* 무시 */
              }
            }
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    for (var j = 0; j < items.length; j++) io.observe(items[j]);

    // --- 안전망 -------------------------------------------------------
    // IntersectionObserver 는 "교차 상태가 바뀔 때"만 콜백을 줍니다.
    // 그래서 앵커 점프처럼 한 프레임 만에 화면 아래 → 화면 위로 지나가면
    // 상태 변화가 감지되지 않아(계속 non-intersecting) 콜백이 아예 오지
    // 않고, 그 요소는 영영 opacity:0 으로 남습니다.
    // 스크롤할 때마다 "이미 지나간 요소"를 직접 확인해 드러냅니다.
    var pending = Array.prototype.slice.call(items);
    var ticking = false;

    function sweep() {
      ticking = false;
      var limit = window.innerHeight * 0.92;
      for (var k = pending.length - 1; k >= 0; k--) {
        var el = pending[k];
        if (el.classList.contains("is-visible")) {
          pending.splice(k, 1);
          continue;
        }
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add("is-visible");
          io.unobserve(el);
          pending.splice(k, 1);
        }
      }
      if (!pending.length) {
        window.removeEventListener("scroll", onScrollSweep);
        window.removeEventListener("resize", onScrollSweep);
      }
    }

    function onScrollSweep() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(sweep);
    }

    window.addEventListener("scroll", onScrollSweep, { passive: true });
    window.addEventListener("resize", onScrollSweep);
    onScrollSweep();
  }

  // ------------------------------------------------------------------
  // 3-4. 상단 스크롤 진행 바
  // ------------------------------------------------------------------
  function initScrollProgress() {
    var bar = byId("scroll-progress");
    if (!bar) return;

    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var ratio = max > 0 ? doc.scrollTop / max : 0;
      bar.style.transform = "scaleX(" + Math.min(1, Math.max(0, ratio)) + ")";
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  // ------------------------------------------------------------------
  // 3-5. 스크롤 위치에 따라 현재 섹션을 상단 메뉴에 표시
  // ------------------------------------------------------------------
  function initNavHighlight() {
    var links = document.querySelectorAll(".site-nav a");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href");
      if (href && href.charAt(0) === "#") map[href.slice(1)] = links[i];
    }

    var io = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (!entries[i].isIntersecting) continue;
          var id = entries[i].target.id;
          for (var key in map) {
            if (Object.prototype.hasOwnProperty.call(map, key)) {
              map[key].classList.toggle("is-active", key === id);
            }
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    for (var key in map) {
      if (Object.prototype.hasOwnProperty.call(map, key)) {
        var section = document.getElementById(key);
        if (section) io.observe(section);
      }
    }
  }

  // ==================================================================
  // 4. 기본 인터랙션 (anime.js 유무와 무관하게 항상 동작)
  // ==================================================================
  function initLangSwitch() {
    var buttons = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (e) {
        var lang = e.currentTarget.getAttribute("data-lang");
        render(lang);
        animateHeroName(); // 이름이 새 언어로 다시 그려지는 연출
      });
    }
  }

  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function (e) {
        var href = e.currentTarget.getAttribute("href");
        if (!href || href.length < 2) return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      });
    }
  }

  function initYear() {
    var el = byId("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  // ==================================================================
  // 5. 실행 (이 스크립트는 </body> 직전에 있어 DOM은 이미 준비 완료)
  // ==================================================================
  render(getInitialLang());
  initLangSwitch();
  initSmoothScroll();
  initYear();
  initScrollProgress();
  initNavHighlight();
  initScrollReveal();

  if (canAnimate()) {
    animateHeroName();
    animateHeroIntro();
  }
})();
