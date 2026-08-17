/* ==================================================================
   script.js — ハンヨンス ポートフォリオ

   ★ 절대 규칙 (2026-08-13 실제 사고에서 나온 것) ★
   1) 이 파일은 <script type="module"> 이 아니라 **일반 script** 입니다.
      import map / 외부 CDN 에 의존하면 그 CDN 하나만 막혀도 파일 전체가
      실행되지 않아 페이지가 통째로 죽습니다. (본문이 "..." 로 남았던 원인)
   2) anime.js 는 **CDN 이 아니라 저장소에 직접 포함(anime.min.js)** 했고,
      **없어도 사이트가 100% 동작**합니다. 애니메이션은 전부 "장식 계층"이며,
      로드 실패 시 CSS transition + requestAnimationFrame 폴백이 대신합니다.
      (body.anime-on 클래스가 붙어 있을 때만 anime.js 가 주도권을 가집니다)
   3) 모든 연출은 "자연 상태(보이는 상태)로 도착"만 합니다.
      스크립트가 실행되지 않아도 화면은 정상입니다.

   문구 출처: ver_2_Technopro_desighn_ES_HanYounsu.kmove13.docx (2026.08.13)
   일본어는 지원서의 겸양체(〜ております/貴社)를 그대로 쓰지 않고,
   일본 IT 포트폴리오 사이트에서 일반적인 **です・ます체**로 다듬었습니다.
   ================================================================== */

(function () {
  "use strict";

  /* ================================================================
     1. 다국어 콘텐츠
        ※ 문구를 고칠 때는 ja / ko / en 세 곳을 모두 고쳐야 합니다.
     ================================================================ */
  var translations = {

    /* ---------------------------------------------------------- 日本語 */
    ja: {
      title: "ハンヨンス | Portfolio",
      side: { name: "ハンヨンス", kanji: "（韓倫洙）", sub: "Younsu Han", position: "System Engineer 志望" },
      nav: { home: "Home", about: "About", skills: "Skills", works: "Works", hobby: "Hobby", career: "Career", contact: "Contact" },
      hero: {
        eyebrow: "Portfolio",
        name: "ハンヨンス",
        kanji: "（韓倫洙）",
        role: "誰かの困りごとを、自分の工夫や技術で少しだけ軽くする。",
        desc: "データサイエンス専攻 ・ システムエンジニア志望 ・ 2027年2月卒業見込み",
        ctaWorks: "制作物を見る",
        ctaContact: "お問い合わせ",
      },
      about: {
        meta: "About",
        heading: "自己紹介",
        bio: [
          "「誰かの困りごとを、自分の工夫や技術で少しだけ軽くすること。」これが、私がものを作るときの出発点です。人の前に立って引っ張るよりも、周りが動きやすくなるように場を整える役割にやりがいを感じます。",
          "現在受講しているK-Move 日本Java開発者養成課程では、多くの研修生が漢字の暗記に苦労していました。「同じ漢字を何度覚えても、次の日には忘れてしまう」という一言をきっかけに、PythonとStreamlitで単語暗記Webアプリを作りました。使ってくれた研修生から「漢字の意味が頭に残りやすくなった」という声をもらい、今も公開したまま改善を続けています。",
          "はじめから完成した形が見えていたわけではありません。作っては直し、また作っては直す。この進め方で少しずつ形にしてきました。大学ではデータサイエンスを、研修ではJavaとWeb開発を学び、「データがわかるシステムエンジニア」を目指しています。",
        ],
        profile: [
          ["氏名", "韓倫洙（ハンヨンス / Younsu Han）"],
          ["生年月日", "2001年7月21日"],
          ["学歴", "江南大学 データサイエンス学科（2027年2月 卒業見込み）"],
          ["語学", "日本語 JLPT N3（2026.01）／ 英語 中級"],
          ["資格", "普通自動車免許（AT限定）"],
          ["趣味", "音楽鑑賞、写真撮影"],
          ["希望勤務地", "日本"],
        ],
        traits: [
          { t: "身近な困りごとから作る", d: "同期の「漢字が覚えられない」という一言から単語アプリを作りました。必要な技術はその都度調べて組み込みます。" },
          { t: "まず報告、それから対処", d: "兵役で班長を務めた際に徹底した順番です。自分の判断だけで片づけると原因が共有されず、同じことがまた起きます。" },
          { t: "比べてから選び直す", d: "最初の手法で精度が伸びなかったとき、条件を変えて結果を記録し、比べたうえで選び直す進め方に切り替えました。" },
          { t: "作る前に使う人へ聞く", d: "「いつ・どこで・何で使うのか」を先に確認します。完成してから見せるのではなく、途中で一度使ってもらいます。" },
        ],
      },
      counters: ["学内学術祭 受賞", "無遅刻・無欠席", "空軍 交代勤務・班長", "JLPT 日本語"],
      skills: {
        meta: "Skills",
        heading: "技術スタック",
        lead: "バーの表示は履歴書の「活用」区分（開発・使用 / 使用）に対応しています。自己採点の点数ではありません。",
        cats: ["言語", "Web", "AI / データ", "DB / ツール"],
      },
      works: {
        meta: "Works",
        heading: "制作物",
        p1: { title: "学術論文 研究分野 自動分類モデル", period: "2025.10 – 2025.11", tag: "KoBERT ・ PyTorch ・ Accuracy 96.9%", link: "GitHub" },
        p2: { title: "単語暗記Webアプリ", period: "2026.07 – 現在", tag: "Streamlit ・ 生成AI API ・ GitHub Contents API", link: "GitHub", demo: "Live Demo" },
        labels: { role: "担当", tech: "使用技術", work: "課題と工夫", result: "成果" },
        caps: { d1: "検証データの混同行列と評価指標", g1: "5つの学習モード", g2: "試験モード", g3: "GitHub連携の単語帳管理" },
        d1: {
          title: "学術論文 研究分野 自動分類モデル",
          meta: "2025.10 – 2025.11",
          desc: "論文のタイトルと要旨だけから、5つの研究分野（農学・社会福祉学・社会学・電子情報通信工学・工学一般）を自動で分けるテキスト分類モデルです。",
          role: "2名チームのリーダー（方針の決定・進行管理）",
          tech: "Python / PyTorch / Transformers（KoBERT）",
          list: [
            "単語の出現頻度による方法では文章の流れを捉えられなかったため、韓国語向けの学習済みモデル（KoBERT）に切り替えました。",
            "論文数の少ない分野の精度が上がらなかったため、分野ごとのデータ量の偏りを補正しました。",
            "「何を、いつまでに確かめるのか」を毎回決め、結果が出るたびに共有して次を決める形で進めました。",
          ],
          result: [
            "検証 Accuracy 96.9% / Macro F1 0.956",
            "学内データサイエンス学術祭 2位",
          ],
          link: "GitHub",
        },
        d2: {
          title: "単語暗記Webアプリ（K-Move研修生向け学習ツール）",
          meta: "2026.07 – 現在（公開中・改善継続）",
          desc: "K-Move研修の同期が漢字の暗記に苦労していたことをきっかけに作った学習Webアプリです。現在は日本語の語彙に加えて、韓国の国家資格「情報処理技師」の用語学習にも使えるように広げています。",
          role: "個人開発（企画・設計・実装・運用）",
          tech: "Python / Streamlit / 生成AI API / GitHub Contents API / Git",
          list: [
            "自己評価の4段階（完璧・少し分かる・あいまい・分からない）に応じて、同じ単語が次に出てくるまでの間隔を変える復習の仕組みを作りました。",
            "GitHubをデータの保管先として使い、データベースを持たない構成にしたことで、個人でも運用を続けられるようにしました。",
            "使う人の声をもとに、文字サイズの調整、ボタン位置の固定、キーボード操作への対応を追加しました。",
          ],
          note: "私はノートパソコンで作り、ノートパソコンで動きを確認していました。しかし研修生の多くは通学の移動中にスマートフォンで使っていて、「文字が小さい」「ボタンの位置が毎回変わる」という声をもらって初めてそれを知りました。使う人が「いつ・どこで・何で使うのか」を先に聞いていれば、やり直さずに済んだ部分です。",
          link: "GitHub", demo: "Live Demo",
        },
      },
      hobby: {
        meta: "Hobby",
        heading: "趣味",
        title: "写真と旅 — Shutterlog",
        desc: "趣味は写真です。旅から帰るたびに数千枚の中から見せられる十数枚を選ぶ作業を、専攻のデータ分析と結びつけて自動化しました。",
        p1: "回して近づける 3D 地球儀の旅アーカイブ",
        p2: "ブレたカットの選別・EXIF 分析・額装の 3 ツール",
        p3: "すべてブラウザ内で動作（写真は送信されません）",
        cta: "見に行く",
        tools: "ツールを試す",
        more: "旅 {n} 件すべてを地球儀で見る →",
        stats: { trips: "旅", countries: "か国", cities: "都市", photos: "枚" },
      },
      career: {
        meta: "Career",
        heading: "経歴",
        items: [
          { t: "江南大学 入学", d: "2020.03", p: "データサイエンス学科。データの見方と分析の基礎を学びました。" },
          { t: "アルバイト・社会経験", d: "2020.11 – 2022.04", p: "ソウル峨山病院 人事チーム（患者対応・案内）、教保文庫 蚕室店 児童・幼児コーナー（顧客対応および書籍整理）。" },
          { t: "空軍 服務（兵長）", d: "2022.05 – 2024.02", p: "24時間を五つに分けた交代勤務。後半は班長として数名の隊員をまとめ、「まず報告し、それから対処する」順番を徹底しました。" },
          { t: "学内データサイエンス学術祭 2位", d: "2025.11", p: "KoBERTによる論文分野分類モデルで受賞しました。" },
          { t: "JLPT N3 合格", d: "2026.01", p: "国際交流基金 / 日本国際教育支援協会。実務で使える日本語を目標に学習を続けています。" },
          { t: "K-Move 日本Java開発者養成課程", d: "2026.07 – 2027.02", p: "受講中。Java・JSP・MySQLを用いたWeb開発と、報告・連絡・相談を前提とした実務のやり取りを学んでいます。" },
          { t: "江南大学 卒業見込み", d: "2027.02", p: "日本での就業を希望しています。" },
        ],
      },
      contact: {
        meta: "Contact",
        heading: "お問い合わせ",
        lead: "ご覧いただきありがとうございます。ご連絡は下記までお願いいたします。",
        f1: "Email", f2: "GitHub", f3: "希望勤務地", f3v: "日本",
        btn: "メールを送る",
      },
      footerName: "Younsu Han",
    },

    /* ---------------------------------------------------------- 한국어 */
    ko: {
      title: "한윤수 | Portfolio",
      side: { name: "한윤수", kanji: "（韓倫洙）", sub: "Younsu Han", position: "시스템엔지니어 지망" },
      nav: { home: "홈", about: "소개", skills: "기술", works: "제작물", hobby: "취미", career: "경력", contact: "연락처" },
      hero: {
        eyebrow: "Portfolio",
        name: "한윤수",
        kanji: "（韓倫洙）",
        role: "누군가의 어려움을, 나의 궁리와 기술로 조금이나마 가볍게.",
        desc: "데이터사이언스 전공 · 시스템엔지니어 지망 · 2027년 2월 졸업예정",
        ctaWorks: "제작물 보기",
        ctaContact: "연락하기",
      },
      about: {
        meta: "About",
        heading: "소개",
        bio: [
          "“누군가의 어려움을, 나의 궁리나 기술로 조금이나마 가볍게 하는 것.” 이것이 제가 무언가를 만들 때의 출발점입니다. 사람들 앞에 서서 이끄는 것보다, 주위가 움직이기 쉽도록 자리를 정돈하는 역할에 보람을 느낍니다.",
          "현재 수강 중인 K-Move 일본 Java 개발자 양성과정에서는 많은 연수생이 한자 암기에 어려움을 겪고 있었습니다. “같은 한자를 몇 번을 외워도 다음 날이면 잊어버린다”는 한마디를 계기로, Python과 Streamlit으로 단어 암기 웹앱을 만들었습니다. 사용해 준 연수생에게서 “한자의 의미가 머리에 남기 쉬워졌다”는 반응을 받았고, 지금도 공개한 채 개선을 이어가고 있습니다.",
          "처음부터 완성된 형태가 보였던 것은 아닙니다. 만들고 고치고, 또 만들고 고치는 방식으로 조금씩 형태를 만들어 왔습니다. 대학에서는 데이터사이언스를, 연수에서는 Java와 웹 개발을 배우며 ‘데이터를 아는 시스템엔지니어’를 목표로 하고 있습니다.",
        ],
        profile: [
          ["이름", "한윤수 / 韓倫洙 / Younsu Han"],
          ["생년월일", "2001년 7월 21일"],
          ["학력", "강남대학교 데이터사이언스학과 (2027년 2월 졸업예정)"],
          ["어학", "일본어 JLPT N3 (2026.01) / 영어 중급"],
          ["자격", "1종 보통 운전면허 (AT 한정)"],
          ["취미", "음악 감상, 사진 촬영"],
          ["희망 근무지", "일본"],
        ],
        traits: [
          { t: "가까운 불편에서 시작한다", d: "동기의 “한자가 안 외워진다”는 한마디에서 단어장 앱을 만들었습니다. 필요한 기술은 그때그때 찾아 넣습니다." },
          { t: "먼저 보고, 그다음 조치", d: "병역에서 분대장을 맡으며 지킨 순서입니다. 제 판단만으로 처리하면 원인이 공유되지 않아 같은 일이 반복됩니다." },
          { t: "비교한 뒤 다시 고른다", d: "처음 방법으로 정확도가 오르지 않았을 때, 조건을 바꿔 결과를 기록하고 비교한 뒤 다시 선택하는 방식으로 바꿨습니다." },
          { t: "만들기 전에 쓰는 사람에게 묻는다", d: "“언제·어디서·무엇으로 쓰는지”를 먼저 확인합니다. 완성 후 보여주는 대신 도중에 한 번 써보게 합니다." },
        ],
      },
      counters: ["교내 학술제 수상", "무지각·무결석", "공군 교대근무·분대장", "JLPT 일본어"],
      skills: {
        meta: "Skills",
        heading: "기술 스택",
        lead: "막대 표시는 이력서의 ‘활용’ 구분(개발·사용 / 사용)에 대응합니다. 자기 채점 점수가 아닙니다.",
        cats: ["언어", "Web", "AI / 데이터", "DB / 도구"],
      },
      works: {
        meta: "Works",
        heading: "제작물",
        p1: { title: "학술논문 연구분야 자동분류 모델", period: "2025.10 – 2025.11", tag: "KoBERT · PyTorch · Accuracy 96.9%", link: "GitHub" },
        p2: { title: "단어 암기 웹앱", period: "2026.07 – 현재", tag: "Streamlit · 생성AI API · GitHub Contents API", link: "GitHub", demo: "Live Demo" },
        labels: { role: "담당", tech: "사용 기술", work: "과제와 개선", result: "성과" },
        caps: { d1: "검증 데이터의 혼동행렬과 평가지표", g1: "5개 학습 모드", g2: "시험 모드", g3: "GitHub 연동 단어장 관리" },
        d1: {
          title: "학술논문 연구분야 자동분류 모델",
          meta: "2025.10 – 2025.11",
          desc: "논문의 제목과 초록만으로 5개 연구분야(농학·사회복지학·사회학·전자정보통신공학·공학일반)를 자동으로 분류하는 텍스트 분류 모델입니다.",
          role: "2인 팀 리더 (방침 결정 · 진행 관리)",
          tech: "Python / PyTorch / Transformers(KoBERT)",
          list: [
            "단어 출현 빈도 기반 방법으로는 문장의 흐름을 잡지 못해, 한국어 사전학습 모델(KoBERT)로 전환했습니다.",
            "논문 수가 적은 분야의 정확도가 오르지 않아, 분야별 데이터 양의 편향을 보정했습니다.",
            "“무엇을, 언제까지 확인할 것인가”를 매번 정하고 결과가 나올 때마다 공유해 다음을 결정하는 방식으로 진행했습니다.",
          ],
          result: [
            "검증 Accuracy 96.9% / Macro F1 0.956",
            "교내 데이터사이언스 학술제 2위",
          ],
          link: "GitHub",
        },
        d2: {
          title: "단어 암기 웹앱 (K-Move 연수생용 학습 도구)",
          meta: "2026.07 – 현재 (공개 중 · 개선 계속)",
          desc: "K-Move 연수 동기들이 한자 암기에 어려움을 겪던 것을 계기로 만든 학습 웹앱입니다. 현재는 일본어 어휘에 더해 정보처리기사 용어 학습까지 사용할 수 있도록 확장했습니다.",
          role: "개인 개발 (기획 · 설계 · 구현 · 운영)",
          tech: "Python / Streamlit / 생성AI API / GitHub Contents API / Git",
          list: [
            "자기평가 4단계(완벽함·조금 앎·헷갈림·모름)에 따라 같은 단어가 다시 나올 때까지의 간격이 달라지는 복습 구조를 만들었습니다.",
            "GitHub를 데이터 보관처로 사용해 데이터베이스가 없는 구성으로 만들어, 개인도 운영을 이어갈 수 있게 했습니다.",
            "사용자의 목소리를 바탕으로 글자 크기 조절, 버튼 위치 고정, 키보드 조작 지원을 추가했습니다.",
          ],
          note: "저는 노트북으로 만들고 노트북으로 동작을 확인했습니다. 그런데 연수생 대부분은 통학 중 스마트폰으로 쓰고 있었고, “글자가 작다”, “버튼 위치가 매번 바뀐다”는 목소리를 받고서야 그 사실을 알았습니다. 쓰는 사람이 “언제·어디서·무엇으로 쓰는지”를 먼저 물었다면 되돌리지 않아도 됐을 부분입니다.",
          link: "GitHub", demo: "Live Demo",
        },
      },
      hobby: {
        meta: "Hobby",
        heading: "취미",
        title: "사진과 여행 — Shutterlog",
        desc: "취미는 사진입니다. 여행에서 돌아올 때마다 수천 장 중에서 보여줄 십몇 장을 고르는 작업을, 전공인 데이터 분석과 엮어 자동화했습니다.",
        p1: "돌리고 확대하는 3D 지구본 여행 아카이브",
        p2: "흔들린 컷 선별 · EXIF 분석 · 액자 3종 도구",
        p3: "전부 브라우저 안에서 동작 (사진은 전송되지 않습니다)",
        cta: "보러 가기",
        tools: "도구 써보기",
        more: "여행 {n}건 전부를 지구본으로 보기 →",
        stats: { trips: "여행", countries: "나라", cities: "도시", photos: "장" },
      },
      career: {
        meta: "Career",
        heading: "경력",
        items: [
          { t: "강남대학교 입학", d: "2020.03", p: "데이터사이언스학과. 데이터를 보는 방법과 분석의 기초를 배웠습니다." },
          { t: "아르바이트 · 사회 경험", d: "2020.11 – 2022.04", p: "서울아산병원 인사팀(내원객 접수·안내), 교보문고 잠실점 아동·유아 코너(고객 응대 및 도서 정리)." },
          { t: "공군 복무 (병장)", d: "2022.05 – 2024.02", p: "24시간을 다섯으로 나눈 교대근무. 후반에는 분대장으로서 대원들을 이끌며 ‘먼저 보고, 그다음 조치’ 순서를 지켰습니다." },
          { t: "교내 데이터사이언스 학술제 2위", d: "2025.11", p: "KoBERT 기반 논문 분야 분류 모델로 수상했습니다." },
          { t: "JLPT N3 합격", d: "2026.01", p: "국제교류기금 / 일본국제교육지원협회. 실무에서 쓸 수 있는 일본어를 목표로 학습을 이어가고 있습니다." },
          { t: "K-Move 일본 Java 개발자 양성과정", d: "2026.07 – 2027.02", p: "수강 중. Java·JSP·MySQL을 이용한 웹 개발과, 보고·연락·상담을 전제로 한 실무 커뮤니케이션을 배우고 있습니다." },
          { t: "강남대학교 졸업예정", d: "2027.02", p: "일본에서의 취업을 희망하고 있습니다." },
        ],
      },
      contact: {
        meta: "Contact",
        heading: "연락처",
        lead: "봐주셔서 감사합니다. 연락은 아래로 부탁드립니다.",
        f1: "Email", f2: "GitHub", f3: "희망 근무지", f3v: "일본",
        btn: "메일 보내기",
      },
      footerName: "Younsu Han",
    },

    /* ---------------------------------------------------------- English */
    en: {
      title: "Younsu Han | Portfolio",
      side: { name: "Younsu Han", kanji: "(韓倫洙)", sub: "한윤수 / ハンヨンス", position: "Aspiring System Engineer" },
      nav: { home: "Home", about: "About", skills: "Skills", works: "Works", hobby: "Hobby", career: "Career", contact: "Contact" },
      hero: {
        eyebrow: "Portfolio",
        name: "Younsu Han",
        kanji: "(韓倫洙)",
        role: "Making someone's difficulty a little lighter, through my own ideas and skills.",
        desc: "Data Science major · Aspiring System Engineer · Graduating Feb 2027",
        ctaWorks: "View Works",
        ctaContact: "Get in Touch",
      },
      about: {
        meta: "About",
        heading: "About Me",
        bio: [
          "“Making someone's difficulty a little lighter, through my own ideas and skills.” That is where every project of mine starts. Rather than leading from the front, I find meaning in setting things up so the people around me can move more easily.",
          "In the K-Move Java Developer Training Program I'm currently enrolled in, many trainees were struggling to memorize kanji. One remark — “no matter how many times I learn a character, it's gone by the next day” — led me to build a vocabulary study app with Python and Streamlit. A classmate told me the meanings finally started to stick, and I still keep it public and keep improving it.",
          "I couldn't see the finished shape from the start. Build, fix, build again, fix again — that's how it took form. I study data science at university and Java and web development in the training program, aiming to become a system engineer who understands data.",
        ],
        profile: [
          ["Name", "Younsu Han (韓倫洙 / 한윤수)"],
          ["Date of birth", "21 July 2001"],
          ["Education", "Kangnam University, Data Science (graduating Feb 2027)"],
          ["Languages", "Japanese — JLPT N3 (Jan 2026) / English — Intermediate"],
          ["License", "Driver's license (automatic)"],
          ["Interests", "Music, photography"],
          ["Preferred location", "Japan"],
        ],
        traits: [
          { t: "Start from a difficulty nearby", d: "A classmate's “I can't remember these characters” became the vocabulary app. I learn whatever technology it takes, as the need comes up." },
          { t: "Report first, then act", d: "The order I held to as a squad leader during military service. Handling it alone settles the moment but hides the cause, so it happens again." },
          { t: "Compare, then re-choose", d: "When accuracy stalled with the first approach, I switched to varying the conditions, recording the results, comparing them, and choosing again." },
          { t: "Ask the user before building", d: "I confirm when, where, and on what device it will be used — and let people try it midway rather than only showing the finished thing." },
        ],
      },
      counters: ["Data Sci. Festival", "Yrs Perfect Attendance", "Months, Air Force Squad Lead", "JLPT Japanese"],
      skills: {
        meta: "Skills",
        heading: "Tech Stack",
        lead: "Bar length reflects the “usage level” classification on my résumé (Development & Use / Use). It is not a self-scored percentage.",
        cats: ["Languages", "Web", "AI / Data", "DB / Tools"],
      },
      works: {
        meta: "Works",
        heading: "Works",
        p1: { title: "Academic Paper Topic Classifier", period: "Oct – Nov 2025", tag: "KoBERT · PyTorch · 96.9% Accuracy", link: "GitHub" },
        p2: { title: "Vocabulary Study Web App", period: "Jul 2026 – present", tag: "Streamlit · Generative AI API · GitHub Contents API", link: "GitHub", demo: "Live Demo" },
        labels: { role: "Role", tech: "Tech Stack", work: "Challenges & Solutions", result: "Results" },
        caps: { d1: "Confusion matrix and evaluation metrics on the validation set", g1: "Five study modes", g2: "Exam mode", g3: "Word list management via GitHub" },
        d1: {
          title: "Academic Paper Topic Classifier",
          meta: "Oct – Nov 2025",
          desc: "A text classifier that sorts papers into one of five academic fields (agriculture, social welfare, sociology, electronics/telecom engineering, general engineering) using only the title and abstract.",
          role: "Team lead of two (direction and schedule management)",
          tech: "Python / PyTorch / Transformers (KoBERT)",
          list: [
            "Word-frequency methods failed to capture the flow of the text, so I switched to a Korean pre-trained model (KoBERT).",
            "Accuracy stayed low for fields with fewer papers, so I corrected the imbalance in data volume across fields.",
            "We decided each round what to verify and by when, shared every result, and used it to decide the next step.",
          ],
          result: [
            "Validation accuracy 96.9% / Macro F1 0.956",
            "Runner-up at the in-house Data Science Festival",
          ],
          link: "GitHub",
        },
        d2: {
          title: "Vocabulary Study Web App (for K-Move trainees)",
          meta: "Jul 2026 – present (live, still improving)",
          desc: "A study web app born from watching K-Move classmates struggle with kanji. Beyond Japanese vocabulary, it now also covers terminology for Korea's national Information Processing Engineer certification.",
          role: "Solo project (planning, design, implementation, operation)",
          tech: "Python / Streamlit / Generative AI API / GitHub Contents API / Git",
          list: [
            "Built a review system where a 4-level self-assessment (perfect / partly / unsure / no idea) changes how soon the same word comes back.",
            "Used GitHub itself as the data store, so the app runs without a database and one person can keep operating it.",
            "Added font-size controls, fixed button positions, and keyboard support based on what users told me.",
          ],
          note: "I built and tested it on a laptop. Most trainees, however, were using it on a phone during their commute — I only learned this when they told me the text was too small and the buttons kept moving. Asking when, where, and on what device it would be used would have saved that rework.",
          link: "GitHub", demo: "Live Demo",
        },
      },
      hobby: {
        meta: "Hobby",
        heading: "Hobby",
        title: "Photography & Travel — Shutterlog",
        desc: "Photography is my hobby. Picking the dozen worth showing out of a few thousand frames was always the slowest part of every trip, so I automated it and tied it back to the data analysis I study.",
        p1: "A 3D globe archive you can spin and zoom into",
        p2: "Three tools: culling shaken frames, EXIF analysis, framing",
        p3: "Everything runs in the browser — no photo is ever uploaded",
        cta: "Take a look",
        tools: "Try the tools",
        more: "See all {n} trips on the globe →",
        stats: { trips: "Trips", countries: "Countries", cities: "Cities", photos: "Photos" },
      },
      career: {
        meta: "Career",
        heading: "Career",
        items: [
          { t: "Entered Kangnam University", d: "Mar 2020", p: "Department of Data Science. Learned the fundamentals of reading and analyzing data." },
          { t: "Part-time work", d: "Nov 2020 – Apr 2022", p: "Seoul Asan Medical Center, HR team (patient reception and guidance); Kyobo Book Centre Jamsil, children's section (customer service and shelving)." },
          { t: "Republic of Korea Air Force (Sergeant)", d: "May 2022 – Feb 2024", p: "Five-shift rotation covering 24 hours. In the latter half I led a small squad, holding to the order of reporting first and acting second." },
          { t: "Runner-up, Data Science Festival", d: "Nov 2025", p: "Awarded for the KoBERT-based paper topic classifier." },
          { t: "Passed JLPT N3", d: "Jan 2026", p: "Japan Foundation / JEES. Continuing to study toward Japanese I can use at work." },
          { t: "K-Move Java Developer Training Program", d: "Jul 2026 – Feb 2027", p: "Currently enrolled. Studying web development with Java, JSP and MySQL, plus workplace communication built on report-contact-consult." },
          { t: "Expected graduation", d: "Feb 2027", p: "Seeking to begin my career in Japan." },
        ],
      },
      contact: {
        meta: "Contact",
        heading: "Contact",
        lead: "Thank you for taking the time to look through this. Feel free to reach out below.",
        f1: "Email", f2: "GitHub", f3: "Preferred location", f3v: "Japan",
        btn: "Send an Email",
      },
      footerName: "Younsu Han",
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

  /* ================================================================
     Hobby 미리보기
     photo/build.py 가 만든 photo/data/preview.js 를 읽어
     통계 숫자와 대표 사진 타일을 채웁니다.

     preview.js 가 없어도(= 아직 build.py 를 안 돌렸거나 로드 실패)
     index.html 에 적힌 정적 문구가 그대로 남습니다. 절대 규칙 5번.
     ================================================================ */
  function fmtTripRange(a, b) {
    if (!a) return "";
    var s = a.replace(/-/g, ".");
    if (!b || b === a) return s.slice(0, 7);      /* 종료일이 없으면 연-월까지만 */
    var pa = a.split("-"), pb = b.split("-");
    if (pa[0] === pb[0] && pa[1] === pb[1]) return s + "–" + pb[2];
    if (pa[0] === pb[0]) return s + "–" + pb[1] + "." + pb[2];
    return s + " – " + b.replace(/-/g, ".");
  }

  function renderHobbyPreview(lang, t) {
    var P = window.SHUTTERLOG_PREVIEW;
    if (!P) return;
    var i, el;

    /* --- 통계 4칸 --- */
    var bs = document.querySelectorAll("#hobby-stats [data-hs]");
    for (i = 0; i < bs.length; i++) {
      var key = bs[i].getAttribute("data-hs");
      var val = P.totals ? P.totals[key] : null;
      if (typeof val === "number") bs[i].textContent = String(val);
      setText("hs-l-" + key, t.hobby.stats[key]);
    }
    /* 사진이 0장이면 "0枚" 대신 칸 자체를 숨깁니다 */
    el = document.getElementById("hs-photos-item");
    if (el) {
      var n = P.totals && P.totals.photos;
      if (n > 0) el.removeAttribute("hidden");
      else el.setAttribute("hidden", "");
    }

    /* --- 대표 사진 타일 --- */
    var byFolder = {};
    for (i = 0; i < P.trips.length; i++) byFolder[P.trips[i].folder] = P.trips[i];

    var tiles = document.querySelectorAll("#hobby-strip .hobby-shot");
    for (i = 0; i < tiles.length; i++) {
      var trip = byFolder[tiles[i].getAttribute("data-trip")];
      if (!trip) continue;
      var img = tiles[i].querySelector(".hobby-shot-img");
      if (img && trip.cover) img.style.backgroundImage = 'url("' + trip.cover + '")';
      var ttl = tiles[i].querySelector("[data-shot-title]");
      if (ttl) ttl.textContent = trip.title[lang] || trip.title.en || trip.folder;
      var whn = tiles[i].querySelector("[data-shot-when]");
      if (whn) {
        var line = fmtTripRange(trip.date, trip.endDate);
        if (trip.count > 0) line += "  ·  " + trip.count + " " + t.hobby.stats.photos;
        whn.textContent = line;
      }
    }

    /* --- 전체 보기 링크 --- */
    el = document.getElementById("hobby-more");
    if (el && P.totals) el.textContent = t.hobby.more.replace("{n}", P.totals.trips);
  }

  function render(lang) {
    var t = translations[lang] || translations[DEFAULT_LANG];
    var i;

    document.documentElement.lang = lang;
    document.title = t.title;

    /* --- 사이드바 --- */
    setText("side-name", t.side.name);
    setText("side-kanji", t.side.kanji);
    setText("side-sub", t.side.sub);
    setText("side-position", t.side.position);
    setText("footer-name", t.footerName);

    setText("nav-home", t.nav.home);
    setText("nav-about", t.nav.about);
    setText("nav-skills", t.nav.skills);
    setText("nav-works", t.nav.works);
    setText("nav-hobby", t.nav.hobby);
    setText("nav-career", t.nav.career);
    setText("nav-contact", t.nav.contact);

    /* --- 히어로 --- */
    setText("hero-eyebrow", t.hero.eyebrow);
    setText("hero-name", t.hero.name);
    setText("hero-kanji", t.hero.kanji);
    setText("hero-role", t.hero.role);
    setText("hero-desc", t.hero.desc);
    setText("hero-cta-works", t.hero.ctaWorks);
    setText("hero-cta-contact", t.hero.ctaContact);

    /* --- About --- */
    setText("about-meta", t.about.meta);
    setText("about-heading", t.about.heading);
    fillList("about-bio", t.about.bio, "p");
    for (i = 0; i < t.about.profile.length; i++) {
      setText("pf-" + (i + 1) + "-k", t.about.profile[i][0]);
      setText("pf-" + (i + 1) + "-v", t.about.profile[i][1]);
    }
    for (i = 0; i < t.about.traits.length; i++) {
      setText("trait-" + (i + 1), t.about.traits[i].t);
      setText("trait-" + (i + 1) + "-desc", t.about.traits[i].d);
    }

    /* --- 카운터 --- */
    for (i = 0; i < t.counters.length; i++) setText("counter-" + (i + 1), t.counters[i]);

    /* --- Skills --- */
    setText("skills-meta", t.skills.meta);
    setText("skills-heading", t.skills.heading);
    setText("skills-lead", t.skills.lead);
    for (i = 0; i < t.skills.cats.length; i++) setText("sc-" + (i + 1), t.skills.cats[i]);

    /* --- Works --- */
    setText("works-meta", t.works.meta);
    setText("works-heading", t.works.heading);

    setText("p1-title", t.works.p1.title);
    setText("p1-period", t.works.p1.period);
    setText("p1-tag", t.works.p1.tag);
    setText("p1-link", t.works.p1.link);

    setText("p2-title", t.works.p2.title);
    setText("p2-period", t.works.p2.period);
    setText("p2-tag", t.works.p2.tag);
    setText("p2-link", t.works.p2.link);
    setText("p2-link-demo", t.works.p2.demo);

    var L = t.works.labels;
    setText("d1-k-role", L.role);   setText("d1-k-tech", L.tech);
    setText("d1-h-work", L.work);   setText("d1-h-result", L.result);
    setText("d2-k-role", L.role);   setText("d2-k-tech", L.tech);
    setText("d2-h-work", L.work);

    setText("d1-title", t.works.d1.title);
    setText("d1-meta", t.works.d1.meta);
    setText("d1-desc", t.works.d1.desc);
    setText("d1-v-role", t.works.d1.role);
    setText("d1-v-tech", t.works.d1.tech);
    fillList("d1-list", t.works.d1.list, "li");
    fillList("d1-result", t.works.d1.result, "li");
    setText("d1-link", t.works.d1.link);

    setText("d2-title", t.works.d2.title);
    setText("d2-meta", t.works.d2.meta);
    setText("d2-desc", t.works.d2.desc);
    setText("d2-v-role", t.works.d2.role);
    setText("d2-v-tech", t.works.d2.tech);
    fillList("d2-list", t.works.d2.list, "li");
    setText("d2-note", t.works.d2.note);
    setText("d2-link", t.works.d2.link);
    setText("d2-link-demo", t.works.d2.demo);

    setText("d1-cap", t.works.caps.d1);
    setText("g1-cap", t.works.caps.g1);
    setText("g2-cap", t.works.caps.g2);
    setText("g3-cap", t.works.caps.g3);

    /* --- Career --- */
    /* --- 趣味 --- */
    setText("hobby-meta", t.hobby.meta);
    setText("hobby-heading", t.hobby.heading);
    setText("hobby-title", t.hobby.title);
    setText("hobby-desc", t.hobby.desc);
    setText("hobby-p1", t.hobby.p1);
    setText("hobby-p2", t.hobby.p2);
    setText("hobby-p3", t.hobby.p3);
    setText("hobby-cta", t.hobby.cta);
    setText("hobby-tools", t.hobby.tools);
    renderHobbyPreview(lang, t);

    setText("career-meta", t.career.meta);
    setText("career-heading", t.career.heading);
    for (i = 0; i < t.career.items.length; i++) {
      setText("t" + (i + 1) + "-title", t.career.items[i].t);
      setText("t" + (i + 1) + "-date", t.career.items[i].d);
      setText("t" + (i + 1) + "-desc", t.career.items[i].p);
    }

    /* --- Contact --- */
    setText("contact-meta", t.contact.meta);
    setText("contact-heading", t.contact.heading);
    setText("contact-lead", t.contact.lead);
    setText("feature-1-label", t.contact.f1);
    setText("feature-2-label", t.contact.f2);
    setText("feature-3-label", t.contact.f3);
    setText("feature-3-value", t.contact.f3v);
    setText("contact-btn", t.contact.btn);

    /* --- 언어 버튼 상태 --- */
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
     2-b. anime.js 게이트웨이
     anime.min.js 가 로드됐고 모션 최소화 설정이 아닐 때만 null 이 아닌 값을
     돌려줍니다. 호출부는 항상 "null 이면 폴백" 으로 작성합니다.
     ================================================================ */
  function A() {
    if (reduceMotion) return null;
    if (window.anime && typeof window.anime.animate === "function") return window.anime;
    return null;
  }

  /* ================================================================
     3. 스크롤 등장 + 카운터
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

    function paint(v) { el.textContent = formatCounter(v, decimals, prefix, suffix); }

    if (reduceMotion) { paint(to); return; }

    // --- anime.js 가 있으면 플레인 오브젝트를 애니메이션해서 숫자를 굴립니다 ---
    var a = A();
    if (a) {
      try {
        var box = { v: 0 };
        a.animate(box, {
          v: to,
          duration: 1600,
          ease: "outExpo",
          onUpdate: function () { paint(box.v); },
          onComplete: function () { paint(to); },
        });
        return;
      } catch (e) { /* 실패하면 아래 폴백으로 */ }
    }

    // --- 폴백: requestAnimationFrame ---
    var duration = 1400;
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / duration);
      paint(to * (1 - Math.pow(1 - p, 3)));          // easeOutCubic
      if (p < 1) window.requestAnimationFrame(step);
      else paint(to);
    }
    window.requestAnimationFrame(step);
  }

  /* ----------------------------------------------------------------
     anime.js 장식 애니메이션
     ※ 전부 "자연 상태로 도착"합니다. 실행되지 않아도 화면은 정상입니다.
     ---------------------------------------------------------------- */

  // 히어로 제목: 글자 단위 등장
  // animejs.com 의 Animation 예제(splitText + プロパティキーフレーム + stagger)를
  // 포트폴리오 톤에 맞춰 1회 재생 / 바운스 없이 조정했습니다.
  function animateHeroTitle() {
    var a = A();
    if (!a) return;
    var el = byId("hero-name");
    if (!el) return;
    try {
      // 이미 분할된 상태에서 다시 splitText 를 부르면 span 이 중첩되므로,
      // 항상 원문 텍스트로 되돌린 뒤 다시 분할합니다.
      // (splitText 는 스크린리더용 사본을 넣기 때문에 textContent 를 그대로
      //  믿을 수 없어서 data-plain 에 원문을 보관합니다.)
      if (el.querySelector("span[data-char]")) {
        el.textContent = el.getAttribute("data-plain") || "";
      }
      el.setAttribute("data-plain", el.textContent);

      var res = a.splitText(el, { words: false, chars: true });
      var chars = res && res.chars;
      if (!chars || !chars.length) return;

      a.animate(chars, {
        // 프로퍼티 키프레임: 살짝 떠올랐다가 제자리로
        y: [
          { to: "-0.38em", ease: "outExpo", duration: 420 },
          { to: 0, ease: "outBack", duration: 520, delay: 40 },
        ],
        // 프로퍼티별 파라미터
        opacity: { from: 0, duration: 300 },
        delay: a.stagger(34),
        ease: "inOutCirc",
      });
    } catch (e) { /* 실패해도 h1 은 이미 정상 텍스트 상태 */ }
  }

  // 히어로 나머지 요소
  function animateHeroIntro() {
    var a = A();
    if (!a) return;
    try {
      a.animate("#hero-eyebrow, #hero-role, .hero-desc, .hero-cta", {
        y: { from: 18 },
        opacity: { from: 0 },
        duration: 760,
        delay: a.stagger(90, { start: 280 }),
        ease: "outExpo",
      });
      a.animate(".deco-circle, .deco-dot", {
        scale: { from: 0.86 },
        opacity: { from: 0 },
        duration: 1100,
        delay: a.stagger(140),
        ease: "outExpo",
      });
    } catch (e) { /* 무시 */ }
  }

  // 프로그레스 바: 0 → 목표치
  function animateProgress(wrap) {
    var a = A();
    if (!a) return;
    var bar = wrap.querySelector(".progress-bar");
    if (!bar) return;
    var pct = (wrap.style.getPropertyValue("--pct") || "").trim();
    if (!pct) return;
    try {
      a.animate(bar, {
        width: ["0%", pct],
        duration: 1200,
        delay: 120,
        ease: "outExpo",
      });
    } catch (e) { /* 무시 */ }
  }

  // 타임라인 원형 아이콘 팝인
  function animateTimelineIcon(entry) {
    var a = A();
    if (!a) return;
    var icon = entry.querySelector(".timeline-icon");
    if (!icon) return;
    try {
      a.animate(icon, {
        scale: { from: 0 },
        duration: 620,
        delay: 90,
        ease: "outBack",
      });
    } catch (e) { /* 무시 */ }
  }

  // 강점 카드 아이콘
  function animateTraitIcon(trait) {
    var a = A();
    if (!a) return;
    var icon = trait.querySelector(".trait-icon");
    if (!icon) return;
    try {
      a.animate(icon, {
        scale: { from: 0.5 },
        opacity: { from: 0 },
        duration: 620,
        delay: 80,
        ease: "outBack",
      });
    } catch (e) { /* 무시 */ }
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length || !("IntersectionObserver" in window) || reduceMotion) {
      // 연출 없이 그대로 표시. 카운터만 최종값으로 채워둡니다.
      var all = document.querySelectorAll(".js-counter");
      for (var c = 0; c < all.length; c++) runCounter(all[c]);
      return;
    }

    document.body.classList.add("reveal-ready");

    // 화면에 들어올 때: 등장 + 해당 요소의 연출 재생
    function activate(el) {
      if (el.classList.contains("is-visible")) return;
      el.classList.add("is-visible");

      var counters = el.querySelectorAll(".js-counter");
      for (var i = 0; i < counters.length; i++) runCounter(counters[i]);

      if (el.classList.contains("progress-wrap")) animateProgress(el);
      if (el.classList.contains("timeline-entry")) animateTimelineIcon(el);
      if (el.classList.contains("trait")) animateTraitIcon(el);
      if (el.classList.contains("hero-inner")) { animateHeroTitle(); animateHeroIntro(); }
    }

    // 화면 밖으로 나갈 때: 초기 상태로 되돌려 "다시 내려오면 다시 재생" 되게 함
    function deactivate(el) {
      if (!el.classList.contains("is-visible")) return;
      el.classList.remove("is-visible");

      // 프로그레스 바는 인라인 width 를 지워 CSS 의 0% 규칙으로 되돌립니다.
      if (el.classList.contains("progress-wrap")) {
        var bar = el.querySelector(".progress-bar");
        if (bar) bar.style.width = "";
      }
    }

    /* ★ unobserve 하지 않습니다.
       계속 관찰해야 위로 올렸다가 다시 내렸을 때 애니메이션이 다시 재생됩니다.
       threshold 0 + 아래쪽 rootMargin 으로, 요소가 화면 아래에서 살짝
       올라온 시점에 등장하도록 했습니다. */
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) activate(entries[i].target);
        else deactivate(entries[i].target);
      }
    }, { threshold: 0, rootMargin: "0px 0px -60px 0px" });

    for (var j = 0; j < items.length; j++) io.observe(items[j]);
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
        animateHeroTitle();   // 이름이 새 언어로 다시 그려지는 연출
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
  // anime.js 가 살아 있을 때만 body.anime-on 이 붙습니다.
  // CSS 는 이 클래스를 보고 프로그레스 바의 transition 을 끄는 등
  // 중복 애니메이션을 피합니다. (없으면 CSS 폴백이 그대로 동작)
  if (A()) document.body.classList.add("anime-on");

  render(getInitialLang());
  initLangSwitch();
  initMenuToggle();
  initSmoothScroll();
  initNavHighlight();
  initYear();
  initReveal();

  // reveal(IntersectionObserver)이 꺼져 있는 환경에서는 히어로 연출도 건너뜁니다.
  // 켜져 있으면 .hero-inner 가 화면에 들어오는 순간 activate() 안에서 재생됩니다.
})();
