/* ==================================================================
   script.js — 한윤수 포트폴리오

   ★ 절대 규칙 (2026-08-13 실제 사고에서 나온 것) ★
   1) 이 파일은 <script type="module"> 이 아니라 **일반 script** 입니다.
      import map / 외부 CDN 에 의존하면 그 CDN 하나만 막혀도 파일 전체가
      실행되지 않아 페이지가 통째로 죽습니다. (본문이 "..." 로 남았던 원인)
   2) 외부 라이브러리를 아예 쓰지 않습니다. jQuery, anime.js, waypoints 모두
      없습니다. 필요한 동작은 IntersectionObserver 로 직접 구현했습니다.
   3) 모든 연출은 "자연 상태(보이는 상태)로 도착"만 합니다.
      스크립트가 실행되지 않아도 화면은 정상입니다.
   ================================================================== */

(function () {
  "use strict";

  /* ================================================================
     1. 다국어 콘텐츠
        ※ 문구를 고칠 때는 ja / ko / en 세 곳을 모두 고쳐야 합니다.
     ================================================================ */
  var translations = {

    ja: {
      title: "ハン・ユンス | Portfolio",
      side: { name: "ハン・ユンス", position: "Data Science × System Engineer" },
      nav: { home: "Home", about: "About", skills: "Skills", work: "Work", history: "History", contact: "Contact" },
      hero: {
        eyebrow: "Hello, I'm",
        name: "ハン・ユンス",
        role: "誰かの困りごとを、自分の工夫や技術で少しだけ軽くする。",
        desc: "システムエンジニア志望 ・ 2027年卒業予定",
        ctaWork: "プロジェクトを見る",
        ctaContact: "連絡する",
      },
      about: {
        meta: "About Me",
        heading: "自己紹介",
        bio: [
          "人の前に立って引っ張るよりも、周りが動きやすくなるように場を整える役割にやりがいを感じてきました。目立つ成果よりも、誰かに「これがあって助かった」と言ってもらえる瞬間のほうが手応えがあります。",
          "K-Move日本Java専門家育成課程で、漢字暗記に苦労する研修生の声をきっかけに単語帳アプリをゼロから開発しました。触ったことのない仕組みも、必要になった時点で調べながら一つずつ組み込んでいます。",
          "はじめから完成形を設計できたわけではありません。まず形にしてみて、使う人の声を聞きながら直していく。この進め方を大切にしています。",
        ],
        traits: [
          { t: "課題から出発する", d: "身近な困りごとを起点に、必要な技術をその都度学んで形にします。" },
          { t: "まず報告、それから対処", d: "想定外の場面ほど一人で抱え込まず、早く共有することを徹底します。" },
          { t: "データで判断する", d: "手法に固執せず、条件を変えて結果を記録し、比べたうえで選び直します。" },
          { t: "使う人に先に聞く", d: "「いつ・どこで・何で使うか」を作り始める前に必ず確認します。" },
        ],
      },
      counters: ["Val Accuracy", "Macro F1", "学内学術祭", "学習モード"],
      skills: { meta: "My Specialty", heading: "スキル", analysis: "データ分析" },
      work: {
        meta: "My Work",
        heading: "プロジェクト",
        p1: {
          title: "学術論文 研究分野自動分類モデル",
          period: "2025.10 – 2025.11",
          tag: "KoBERT ・ PyTorch ・ Accuracy 96.9%",
          link: "GitHub",
        },
        p2: {
          title: "KMOVE単語アプリ",
          period: "2026",
          tag: "Streamlit ・ GitHub API ・ 忘却曲線",
          link: "GitHub",
          demo: "Live Demo",
        },
        d1: {
          title: "学術論文 研究分野自動分類モデル",
          meta: "2025.10 – 2025.11 ・ 2人チーム（リーダー）",
          desc: "論文タイトルと要旨だけで5つの研究分野（農学・社会福祉学・社会学・電子情報通信工学・工学一般）を自動分類するKoBERTベースのテキスト分類モデルです。当初の手法では文脈を捉えられず精度が伸びなかったため、条件を変えながら結果を記録して比べ、選び直す進め方に切り替えることを提案しました。",
          list: [
            "title + [SEP] + abstract を入力とするマルチクラス分類",
            "クラス不均衡の補正（重み付き損失）と Macro-F1 基準の Early Stopping",
            "系列長 384 / 512 の二重学習を soft-vote でアンサンブル",
            "Validation Accuracy 0.9691 / Macro-F1 0.9562 を達成",
            "学内データサイエンス学術祭 2位（優秀賞）",
          ],
        },
        d2: {
          title: "KMOVE単語アプリ — 忘却曲線ベースの暗記Webアプリ",
          meta: "2026 ・ 個人プロジェクト（現在も公開・改善中）",
          desc: "K-Move研修の同期が漢字暗記に苦労している姿を見て制作したStreamlitアプリです。個人用の学習ツールにDBサーバーを立てるのは過剰だと考え、GitHubリポジトリをそのままデータ層として使い、単語帳の追加から進捗保存までサーバーなしで処理しています。",
          list: [
            "自己評価4段階に応じて再出題位置が変わる「忘却曲線キュー」",
            "位置は固定値ではなく区間からランダムに選び、順番の暗記を防止",
            "GitHub Contents API をデータ層に採用したサーバーレス構成",
            "学習・練習・試験・単語帳追加・文章暗記の5モード",
            "キーボードショートカット、90秒セッション keep-alive、フォント調整",
          ],
          note: "使ってくれた研修生から「文字が小さい」「ボタンの位置が毎回変わる」という声をもらい、フォント調整機能と固定アクションバーを追加しました。自分はノートPCで開発・確認していましたが、多くの研修生は移動中にスマートフォンで使っていたのです。作る前に使う人の環境を確かめる大切さを学んだプロジェクトです。",
        },
      },
      history: {
        meta: "Education & Experience",
        heading: "これまで",
        items: [
          { t: "江南大学校 入学", d: "2020.03", p: "人工知能融合工学部 データサイエンス専攻" },
          { t: "空軍 服務", d: "2022.05 – 2024.02", p: "24時間を五つに分けた交代勤務。後半は班長として数名の隊員をまとめ、「まず報告、それから対処」の順序を徹底しました。" },
          { t: "学内データサイエンス学術祭 2位", d: "2025.11", p: "KoBERTによる論文分野分類モデルで優秀賞。同月にGoogle Analytics（GA4）修了。" },
          { t: "K-Move 日本Java専門家育成課程", d: "2026", p: "受講中。同期の困りごとをきっかけに単語アプリを開発し、現在も改善を続けています。" },
          { t: "卒業予定", d: "2027.02", p: "データの視点を強みに持つシステムエンジニアを目指しています。" },
        ],
      },
      contact: {
        meta: "Get in Touch",
        heading: "お問い合わせ",
        f1: "Email", f2: "GitHub", f3: "Location",
        f3v: "韓国・ソウル（日本就業希望）",
        btn: "メールを送る",
      },
      footerName: "ハン・ユンス",
    },

    ko: {
      title: "한윤수 | Portfolio",
      side: { name: "한윤수", position: "Data Science × System Engineer" },
      nav: { home: "홈", about: "소개", skills: "기술", work: "프로젝트", history: "이력", contact: "연락처" },
      hero: {
        eyebrow: "Hello, I'm",
        name: "한윤수",
        role: "누군가의 어려움을, 나의 궁리와 기술로 조금이나마 가볍게.",
        desc: "시스템엔지니어 지망 · 2027년 졸업예정",
        ctaWork: "프로젝트 보기",
        ctaContact: "연락하기",
      },
      about: {
        meta: "About Me",
        heading: "소개",
        bio: [
          "사람들 앞에 서서 이끄는 것보다, 주위가 움직이기 쉽도록 자리를 정돈하는 역할에 보람을 느껴 왔습니다. 눈에 띄는 성과보다 누군가에게 “이게 있어서 도움이 됐다”는 말을 듣는 순간이 더 큰 손맛으로 남습니다.",
          "K-Move 일본 Java 전문가 육성과정에서 한자 암기에 어려움을 겪는 연수생들의 목소리를 계기로 단어장 앱을 처음부터 직접 개발했습니다. 다뤄본 적 없는 구조도 필요해진 시점에 찾아보며 하나씩 넣었습니다.",
          "처음부터 완성형을 설계할 수 있었던 것은 아닙니다. 우선 형태를 만들어 보고, 쓰는 사람의 목소리를 들으며 고쳐 나간다. 이 방식을 소중히 여깁니다.",
        ],
        traits: [
          { t: "문제에서 출발한다", d: "가까운 곳의 불편을 기점으로, 필요한 기술을 그때그때 익혀 형태로 만듭니다." },
          { t: "먼저 보고, 그다음 조치", d: "예상치 못한 상황일수록 혼자 끌어안지 않고 빨리 공유합니다." },
          { t: "데이터로 판단한다", d: "방법에 고집하지 않고 조건을 바꿔 결과를 기록·비교한 뒤 다시 선택합니다." },
          { t: "쓰는 사람에게 먼저 묻는다", d: "“언제·어디서·무엇으로 쓰는지”를 만들기 전에 반드시 확인합니다." },
        ],
      },
      counters: ["Val Accuracy", "Macro F1", "교내 학술제", "학습 모드"],
      skills: { meta: "My Specialty", heading: "보유 기술", analysis: "데이터 분석" },
      work: {
        meta: "My Work",
        heading: "프로젝트",
        p1: {
          title: "학술논문 연구분야 자동분류 모델",
          period: "2025.10 – 2025.11",
          tag: "KoBERT · PyTorch · Accuracy 96.9%",
          link: "GitHub",
        },
        p2: {
          title: "KMOVE 단어장 앱",
          period: "2026",
          tag: "Streamlit · GitHub API · 망각곡선",
          link: "GitHub",
          demo: "Live Demo",
        },
        d1: {
          title: "학술논문 연구분야 자동분류 모델",
          meta: "2025.10 – 2025.11 · 2인 팀(팀장)",
          desc: "논문 제목과 초록만으로 5개 연구분야(농학·사회복지학·사회학·전자정보통신공학·공학일반)를 자동 분류하는 KoBERT 기반 텍스트 분류 모델입니다. 처음 시도한 방법으로는 문맥을 잡지 못해 정확도가 오르지 않아, 조건을 바꿔가며 결과를 기록해 비교하고 다시 선택하는 방식으로 전환할 것을 제안했습니다.",
          list: [
            "title + [SEP] + abstract 를 입력으로 하는 다중 클래스 분류",
            "클래스 불균형 보정(가중 손실)과 Macro-F1 기준 Early Stopping",
            "시퀀스 길이 384 / 512 이중 학습을 soft-vote 로 앙상블",
            "Validation Accuracy 0.9691 / Macro-F1 0.9562 달성",
            "교내 데이터사이언스 학술제 2위(우수상)",
          ],
        },
        d2: {
          title: "KMOVE 단어장 앱 — 망각곡선 기반 암기 웹앱",
          meta: "2026 · 개인 프로젝트(현재도 공개·개선 중)",
          desc: "K-Move 연수 동기들이 한자 암기에 어려움을 겪는 모습을 보고 만든 Streamlit 앱입니다. 개인 학습 도구에 DB 서버를 따로 띄우는 것은 과하다고 판단해, GitHub 저장소를 그대로 데이터 계층으로 사용해 단어장 추가부터 진행 상황 저장까지 서버 없이 처리합니다.",
          list: [
            "자기평가 4단계에 따라 재출제 위치가 달라지는 '망각곡선 큐'",
            "위치를 고정값이 아닌 구간에서 무작위로 뽑아 순서 암기를 방지",
            "GitHub Contents API 를 데이터 계층으로 쓴 서버리스 구조",
            "학습·연습·시험·단어장 추가·지문 암기 5개 모드",
            "키보드 단축키, 90초 세션 keep-alive, 폰트 크기 조절",
          ],
          note: "사용한 연수생들에게 '글자가 작다', '버튼 위치가 매번 바뀐다'는 피드백을 받고 폰트 조절 기능과 고정 액션바를 추가했습니다. 저는 노트북으로 개발하고 확인했지만, 대부분의 연수생은 통학 중 스마트폰으로 쓰고 있었습니다. 만들기 전에 쓰는 사람의 환경을 먼저 확인하는 것의 중요성을 배운 프로젝트입니다.",
        },
      },
      history: {
        meta: "Education & Experience",
        heading: "이력",
        items: [
          { t: "강남대학교 입학", d: "2020.03", p: "인공지능융합공학부 데이터사이언스전공" },
          { t: "공군 복무", d: "2022.05 – 2024.02", p: "24시간을 다섯으로 나눈 교대근무. 후반에는 분대장으로서 대원들을 이끌며 '먼저 보고, 그다음 조치'의 순서를 지켰습니다." },
          { t: "교내 데이터사이언스 학술제 2위", d: "2025.11", p: "KoBERT 논문 분야 분류 모델로 우수상. 같은 달 Google Analytics(GA4) 수료." },
          { t: "K-Move 일본 Java 전문가 육성과정", d: "2026", p: "수강 중. 동기들의 어려움을 계기로 단어장 앱을 개발했고 지금도 개선하고 있습니다." },
          { t: "졸업 예정", d: "2027.02", p: "데이터의 시점을 강점으로 가진 시스템엔지니어를 목표로 하고 있습니다." },
        ],
      },
      contact: {
        meta: "Get in Touch",
        heading: "연락처",
        f1: "Email", f2: "GitHub", f3: "Location",
        f3v: "대한민국 서울 (일본 취업 희망)",
        btn: "메일 보내기",
      },
      footerName: "한윤수",
    },

    en: {
      title: "Han Yoonsu | Portfolio",
      side: { name: "Han Yoonsu", position: "Data Science × System Engineer" },
      nav: { home: "Home", about: "About", skills: "Skills", work: "Work", history: "History", contact: "Contact" },
      hero: {
        eyebrow: "Hello, I'm",
        name: "Han Yoonsu",
        role: "Making someone's difficulty a little lighter, through my own ideas and skills.",
        desc: "Aspiring System Engineer · Class of 2027",
        ctaWork: "View Projects",
        ctaContact: "Get in Touch",
      },
      about: {
        meta: "About Me",
        heading: "About Me",
        bio: [
          "Rather than leading from the front, I've always found more meaning in setting things up so the people around me can move more easily. A quiet “this really helped” means more to me than a visible win.",
          "During the K-Move Japan Java Expert Training Program, I heard classmates struggling to memorize kanji and built a vocabulary app from scratch — learning each unfamiliar piece as the need for it came up.",
          "I couldn't design the finished thing up front. Build something real first, then fix it by listening to the people using it. That's the approach I care about.",
        ],
        traits: [
          { t: "Start from a real problem", d: "I begin with a difficulty close at hand and learn whatever technology it takes to solve it." },
          { t: "Report first, then act", d: "The more unexpected the situation, the faster I share it rather than carrying it alone." },
          { t: "Decide with data", d: "Instead of clinging to one method, I vary the conditions, record the results, compare, and re-choose." },
          { t: "Ask the user first", d: "I always confirm “when, where, and on what device” before writing the first line of code." },
        ],
      },
      counters: ["Val Accuracy", "Macro F1", "Data Sci. Festival", "Study Modes"],
      skills: { meta: "My Specialty", heading: "Skills", analysis: "Data Analysis" },
      work: {
        meta: "My Work",
        heading: "Projects",
        p1: {
          title: "Academic Paper Topic Classifier",
          period: "Oct 2025 – Nov 2025",
          tag: "KoBERT · PyTorch · 96.9% Accuracy",
          link: "GitHub",
        },
        p2: {
          title: "KMOVE Vocabulary App",
          period: "2026",
          tag: "Streamlit · GitHub API · Forgetting Curve",
          link: "GitHub",
          demo: "Live Demo",
        },
        d1: {
          title: "Academic Paper Topic Classifier",
          meta: "Oct – Nov 2025 · 2-person team (lead)",
          desc: "A KoBERT-based text classifier that predicts one of five academic fields (agriculture, social welfare, sociology, electronics/telecom engineering, general engineering) from a paper's title and abstract alone. When our first approach failed to capture context and accuracy stalled, I proposed switching to a process of varying conditions, recording results, comparing them, and re-deciding.",
          list: [
            "Multi-class classification from title + [SEP] + abstract",
            "Class-imbalance correction (weighted loss) and Macro-F1-based early stopping",
            "Soft-vote ensemble of models trained at sequence lengths 384 and 512",
            "Reached validation accuracy 0.9691 / Macro-F1 0.9562",
            "Runner-up at the in-house Data Science Festival",
          ],
        },
        d2: {
          title: "KMOVE Vocabulary App — Forgetting-Curve Study Tool",
          meta: "2026 · Personal project (still live and being improved)",
          desc: "A Streamlit app I built after watching K-Move classmates struggle with kanji. Standing up a database server for a personal study tool felt like overkill, so I used a GitHub repository itself as the data layer — everything from adding word lists to saving progress runs without a server.",
          list: [
            "A “forgetting-curve queue” that changes where a word reappears based on a 4-level self-assessment",
            "Reinsertion point picked randomly from a range, not fixed — so users memorize words, not the order",
            "Serverless architecture using the GitHub Contents API as the data layer",
            "Five modes: learn, practice, exam, add word list, and passage memorization",
            "Keyboard shortcuts, a 90-second session keep-alive, adjustable font size",
          ],
          note: "Classmates told me the text was too small and the buttons kept moving, so I added font-size controls and a sticky action bar. I had developed and tested on a laptop — but most of them were using it on a phone during their commute. This project taught me to check how people will actually use something before I start building.",
        },
      },
      history: {
        meta: "Education & Experience",
        heading: "Timeline",
        items: [
          { t: "Entered Kangnam University", d: "Mar 2020", p: "B.S. in Data Science, AI Convergence Engineering" },
          { t: "Republic of Korea Air Force", d: "May 2022 – Feb 2024", p: "Five-shift rotation covering 24 hours. In the latter half I led a small squad, holding to the order of reporting first and acting second." },
          { t: "Runner-up, Data Science Festival", d: "Nov 2025", p: "For the KoBERT paper-topic classifier. Google Analytics (GA4) certified the same month." },
          { t: "K-Move Japan Java Expert Program", d: "2026", p: "Currently enrolled. Built the vocabulary app in response to classmates' difficulties and continue to improve it." },
          { t: "Expected graduation", d: "Feb 2027", p: "Aiming to become a system engineer whose strength is a data-driven perspective." },
        ],
      },
      contact: {
        meta: "Get in Touch",
        heading: "Contact",
        f1: "Email", f2: "GitHub", f3: "Location",
        f3v: "Seoul, Korea (seeking work in Japan)",
        btn: "Send an Email",
      },
      footerName: "Han Yoonsu",
    },
  };

  var STORAGE_KEY = "portfolio-lang";
  var DEFAULT_LANG = "ja";

  /* ================================================================
     2. 렌더링 헬퍼
     ================================================================ */
  function byId(id) { return document.getElementById(id); }

  function setText(id, value) {
    var el = byId(id);
    if (el && value != null) el.textContent = value;
  }

  function fillList(id, items, tag) {
    var el = byId(id);
    if (!el || !items) return;
    el.innerHTML = "";
    for (var i = 0; i < items.length; i++) {
      var node = document.createElement(tag);
      node.textContent = items[i];
      el.appendChild(node);
    }
  }

  function render(lang) {
    var t = translations[lang] || translations[DEFAULT_LANG];
    var i;

    document.documentElement.lang = lang;
    document.title = t.title;

    setText("side-name", t.side.name);
    setText("side-position", t.side.position);
    setText("footer-name", t.footerName);

    setText("nav-home", t.nav.home);
    setText("nav-about", t.nav.about);
    setText("nav-skills", t.nav.skills);
    setText("nav-work", t.nav.work);
    setText("nav-history", t.nav.history);
    setText("nav-contact", t.nav.contact);

    setText("hero-eyebrow", t.hero.eyebrow);
    setText("hero-name", t.hero.name);
    setText("hero-role", t.hero.role);
    setText("hero-desc", t.hero.desc);
    setText("hero-cta-work", t.hero.ctaWork);
    setText("hero-cta-contact", t.hero.ctaContact);

    setText("about-meta", t.about.meta);
    setText("about-heading", t.about.heading);
    fillList("about-bio", t.about.bio, "p");
    for (i = 0; i < t.about.traits.length; i++) {
      setText("trait-" + (i + 1), t.about.traits[i].t);
      setText("trait-" + (i + 1) + "-desc", t.about.traits[i].d);
    }

    for (i = 0; i < t.counters.length; i++) setText("counter-" + (i + 1), t.counters[i]);

    setText("skills-meta", t.skills.meta);
    setText("skills-heading", t.skills.heading);
    setText("skill-analysis", t.skills.analysis);

    setText("work-meta", t.work.meta);
    setText("work-heading", t.work.heading);

    setText("p1-title", t.work.p1.title);
    setText("p1-period", t.work.p1.period);
    setText("p1-tag", t.work.p1.tag);
    setText("p1-link", t.work.p1.link);

    setText("p2-title", t.work.p2.title);
    setText("p2-period", t.work.p2.period);
    setText("p2-tag", t.work.p2.tag);
    setText("p2-link", t.work.p2.link);
    setText("p2-link-demo", t.work.p2.demo);

    setText("d1-title", t.work.d1.title);
    setText("d1-meta", t.work.d1.meta);
    setText("d1-desc", t.work.d1.desc);
    fillList("d1-list", t.work.d1.list, "li");

    setText("d2-title", t.work.d2.title);
    setText("d2-meta", t.work.d2.meta);
    setText("d2-desc", t.work.d2.desc);
    fillList("d2-list", t.work.d2.list, "li");
    setText("d2-note", t.work.d2.note);

    setText("history-meta", t.history.meta);
    setText("history-heading", t.history.heading);
    for (i = 0; i < t.history.items.length; i++) {
      setText("t" + (i + 1) + "-title", t.history.items[i].t);
      setText("t" + (i + 1) + "-date", t.history.items[i].d);
      setText("t" + (i + 1) + "-desc", t.history.items[i].p);
    }

    setText("contact-meta", t.contact.meta);
    setText("contact-heading", t.contact.heading);
    setText("feature-1-label", t.contact.f1);
    setText("feature-2-label", t.contact.f2);
    setText("feature-3-label", t.contact.f3);
    setText("feature-3-value", t.contact.f3v);
    setText("contact-btn", t.contact.btn);

    var buttons = document.querySelectorAll(".lang-switch button");
    for (i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].getAttribute("data-lang") === lang));
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* 무시 */ }
  }

  function getInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) return saved;
    } catch (e) { /* 무시 */ }
    return DEFAULT_LANG;
  }

  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ================================================================
     3. 스크롤 등장 + 프로그레스 바 + 카운터
     ================================================================ */
  function formatCounter(value, decimals, prefix, suffix) {
    return prefix + value.toFixed(decimals) + suffix;
  }

  function runCounter(el) {
    var to = parseFloat(el.getAttribute("data-to"));
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    if (isNaN(to)) return;

    if (reduceMotion) {
      el.textContent = formatCounter(to, decimals, prefix, suffix);
      return;
    }

    var duration = 1400;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / duration);
      var eased = 1 - Math.pow(1 - p, 3);            // easeOutCubic
      el.textContent = formatCounter(to * eased, decimals, prefix, suffix);
      if (p < 1) window.requestAnimationFrame(step);
      else el.textContent = formatCounter(to, decimals, prefix, suffix);
    }
    window.requestAnimationFrame(step);
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length || !("IntersectionObserver" in window) || reduceMotion) {
      // 연출 없이 그대로 표시. 카운터만 최종값으로 채워둡니다.
      var counters = document.querySelectorAll(".js-counter");
      for (var c = 0; c < counters.length; c++) runCounter(counters[c]);
      return;
    }

    document.body.classList.add("reveal-ready");

    function activate(el) {
      el.classList.add("is-visible");
      var counters = el.querySelectorAll ? el.querySelectorAll(".js-counter") : [];
      for (var i = 0; i < counters.length; i++) runCounter(counters[i]);
    }

    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        // 화면에 들어온 경우뿐 아니라 "이미 위로 지나가 버린" 경우도 처리합니다.
        var scrolledPast = entry.boundingClientRect.top < 0;
        if (!entry.isIntersecting && !scrolledPast) continue;
        if (entry.target.classList.contains("is-visible")) { io.unobserve(entry.target); continue; }
        activate(entry.target);
        io.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });

    for (var j = 0; j < items.length; j++) io.observe(items[j]);

    /* --- 안전망 ------------------------------------------------------
       IntersectionObserver 는 "교차 상태가 바뀔 때"만 콜백을 줍니다.
       앵커 링크로 한 번에 점프하면 중간 요소가 화면 아래→위로 한 프레임에
       지나가 콜백이 오지 않고, 그 요소는 영영 opacity:0 으로 남습니다.
       스크롤할 때마다 "이미 지나간 요소"를 직접 확인해 드러냅니다. */
    var pending = Array.prototype.slice.call(items);
    var ticking = false;

    function sweep() {
      ticking = false;
      var limit = window.innerHeight * 0.94;
      for (var k = pending.length - 1; k >= 0; k--) {
        var el = pending[k];
        if (el.classList.contains("is-visible")) { pending.splice(k, 1); continue; }
        if (el.getBoundingClientRect().top < limit) {
          activate(el);
          io.unobserve(el);
          pending.splice(k, 1);
        }
      }
      if (!pending.length) {
        window.removeEventListener("scroll", onSweep);
        window.removeEventListener("resize", onSweep);
      }
    }
    function onSweep() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(sweep);
    }

    window.addEventListener("scroll", onSweep, { passive: true });
    window.addEventListener("resize", onSweep);
    onSweep();
  }

  /* ================================================================
     4. 내비게이션
     ================================================================ */
  function closeMenu() {
    document.body.classList.remove("offcanvas");
    var toggle = document.querySelector(".js-nav-toggle");
    if (toggle) {
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  function initMenuToggle() {
    var toggle = document.querySelector(".js-nav-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("offcanvas");
      toggle.classList.toggle("active", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    // 사이드바 바깥을 누르면 닫기
    document.addEventListener("click", function (e) {
      if (!document.body.classList.contains("offcanvas")) return;
      var aside = byId("site-aside");
      if (aside && !aside.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
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
        closeMenu();
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      });
    }
  }

  function initNavHighlight() {
    var links = document.querySelectorAll("#site-nav a[data-nav]");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    for (var i = 0; i < links.length; i++) {
      map[links[i].getAttribute("data-nav")] = links[i].parentNode;
    }

    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (!entries[i].isIntersecting) continue;
        var name = entries[i].target.getAttribute("data-section");
        for (var key in map) {
          if (Object.prototype.hasOwnProperty.call(map, key)) {
            map[key].classList.toggle("active", key === name);
          }
        }
      }
    }, { rootMargin: "-45% 0px -50% 0px" });

    var sections = document.querySelectorAll("[data-section]");
    for (var j = 0; j < sections.length; j++) io.observe(sections[j]);
  }

  function initLangSwitch() {
    var buttons = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (e) {
        render(e.currentTarget.getAttribute("data-lang"));
      });
    }
  }

  function initYear() {
    var el = byId("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ================================================================
     5. 실행 (이 스크립트는 </body> 직전 — DOM 은 이미 준비 완료)
     ================================================================ */
  render(getInitialLang());
  initLangSwitch();
  initMenuToggle();
  initSmoothScroll();
  initNavHighlight();
  initYear();
  initReveal();
})();
