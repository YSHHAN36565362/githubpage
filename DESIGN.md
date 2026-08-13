# DESIGN.md — 한윤수 자기소개 GitHub Pages

> 이 문서는 이 저장소(index.html / style.css / script.js)의 디자인·콘텐츠 결정을 기록합니다.
> 나중에 프로젝트를 바꾸거나 톤을 바꿀 때, 새로 다 짜지 말고 이 문서를 먼저 고치고 그다음 코드를 맞추세요.

## 1. 목적

- 테크노프로(株式会社テクノプロ コンサルティング・パートナーズ) 시스템엔지니어 지원을 계기로,
  포트폴리오를 **논문 분류 모델**, **단어장 앱** 두 개로 좁혀서 소개하는 1페이지 자기소개 사이트.
- 이력서가 아니라 "이 사람이 어떤 사람이고 무엇을 만들었는지"를 짧게 보여주는 용도.

## 2. 콘텐츠 소스 (진실의 원천)

| 섹션 | 근거 파일 |
|---|---|
| 자기소개 톤/모토/성격 | `/Users/ys/Downloads/Claude/Technopro_design_ES_ver.7.txt` (2026-08-13, ver.7) |
| 학력/기술스택/수상 | `GitHub/Introduce/introduce.md` |
| 논문 분류 프로젝트 상세 | `GitHub/univ-data-science-portfolio/2025-2/kobert-paper-classifier` README 요약 (프로젝트 문서) |
| 단어장 앱 상세 | `GitHub/word_test/README.md` |

ES(ver.7)는 **일본어 제출용**이 원문이며, 한국어는 "내용 확인용 직역"이라고 명시되어 있음.
→ 이 사이트는 그 원문 뉘앙스를 기반으로 하되, 이력서 문체를 그대로 붙여넣지 않고
포트폴리오 톤으로 **다듬어서 재구성**함 (일본어/한국어/영어 3개 국어 모두 새로 작성).

## 3. 참고한 외부 레퍼런스

- Colorlib "21 Best Developer Portfolio Websites" — 1페이지·다크테마·프로젝트 카드형 구성 트렌드 확인
- wallofportfolios.in (dark-theme, minimal) — 여백/타이포 중심의 절제된 미니멀 톤 참고
- SimpleLocalize / Linguise "language switcher UX" 가이드 — 언어 전환은 국기 대신 **각 언어의 자체 표기**
  (日本語 / 한국어 / English)로, 상단 고정 위치에 배치하는 것이 권장됨 → 좌상단 고정 버튼 그룹으로 반영

## 4. 유지하기로 한 것 (기존 사이트에서)

- 다크 네이비 + 시안(cyan) 팔레트 (`--bg:#0f172a`, `--accent:#38bdf8`, `--accent2:#22d3ee`)
- `.scroll-container` 풀스크린 세로 스크롤 구조, 섹션당 `min-height:100vh`
- 카드(`.card`) 컴포넌트 스타일과 hover 효과
- animejs를 이용한 카드 scroll-reveal (fade + slide up)

## 5. 바꾼 것

- 프로젝트 4개 → **2개** (논문 분류, 단어장 앱). SafeCity·구인구직 대시보드 카드 제거.
- **About 섹션 신설** (기존엔 프로젝트 카드만 있고 자기소개 텍스트가 없었음): 모토 한 줄 + 짧은 서사
  + 학력/현황 + 기술 스택 + 수상 + 연락처.
- 히어로 문구를 "Data Science / Full-Stack Developer Portfolio"에서
  ES 원문의 모토 인용구("誰かの困りごとを、自分の工夫や技術で少しだけ軽くすること。")로 교체.
- **3개 국어 전환 버튼**(日本語 / 한국어 / English) 좌상단 고정 추가. 기본값 일본어.
  `<html lang>` 속성도 전환에 맞춰 갱신, `localStorage`에 마지막 선택 언어 저장.
- 사용되지 않던(HTML에 대응 요소가 없는) `.square` 데모 애니메이션 코드 제거.
- `prefers-reduced-motion`을 존중하도록 스크롤 reveal에 가드 추가.

## 6. 정보구조 (섹션 순서)

1. Hero — 이름 / 한 줄 role / 모토 인용구 / nav
2. About — 소개 문단 / 학력·현황 / 기술 스택 / 수상 / 연락처
3. Project 01 — 학술논문 연구분야 자동분류 모델 (KoBERT)
4. Project 02 — K-Move 단어장 앱 (망각곡선 기반)
5. Footer — GitHub 링크, copyright

## 7. i18n 구현 방식

- 외부 JSON 없이 `script.js` 안에 `translations = { ja, ko, en }` 객체로 텍스트 보관 (fetch/CORS 이슈 회피,
  로컬 파일로 열어도 동작).
- `data-i18n="path.to.key"` 속성을 가진 요소를 순회하며 텍스트/HTML을 주입.
- 기술 스택 이름(Python, PyTorch 등 고유명사)과 날짜(2025.10 등 숫자)는 언어 불문 고정.
- 마지막 선택 언어는 `localStorage`에 저장하고, 다음 방문 시 그대로 복원. 최초 방문 기본값은 일본어.

## 8. 남은 선택지 / 확인 필요

- 병역·군 생활 에피소드는 ES에는 있지만 이 사이트에는 **넣지 않음** (분량/톤 상 이력서스러워짐).
  필요하면 About 문단에 한 줄만 추가 가능.
- 교보문고/서울아산병원 사회경험은 이 사이트에서 생략 (자기소개 페이지 목적상 두 프로젝트에 집중).
- 논문 분류 프로젝트는 ES에서는 "리더십/의사결정 과정" 위주로 재작성했지만, 이 사이트는 포트폴리오이므로
  **기술적 성과 수치(Acc 0.9691, Macro-F1 0.956)는 유지**하고 리더십 서술을 한 줄 덧붙이는 절충안 적용.
