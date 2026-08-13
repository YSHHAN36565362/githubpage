// * 1. 맨 윗줄에서 animejs 모듈의 기능을 가져옵니다. (질문하신 코드를 그대로 활용)
import { animate, onScroll } from 'animejs';

// * 2. 현재 연도 자동 표시 (기존 코드 유지)
document.getElementById("year").textContent = new Date().getFullYear();

// * 3. 부드러운 스크롤 (기존 코드 유지)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// * 4. [변경됨] 기존에 작성되어 있던 복잡한 IntersectionObserver 코드를 지웠습니다!
// ** 대신 아래처럼 포트폴리오 카드(.card)들이 스크롤을 내릴 때 멋지게 등장하도록 animejs를 적용했습니다.
animate('.card', {
  y: [50, 0],         // ** 카드가 아래(50px)에서 위(0)로 부드럽게 올라옵니다.
  opacity: [0, 1],    // ** 처음엔 투명했다가 서서히 나타나는 페이드인 효과입니다.
  duration: 1200,     // ** 애니메이션 동작 시간을 1.2초로 설정합니다.
  ease: 'outExpo',    // ** 움직임이 끝날 때 자연스럽게 감속되게 만듭니다.
  autoplay: onScroll({
    container: '.scroll-container', // ** 우리가 HTML에 추가한 스크롤 컨테이너를 감지하도록 지정합니다.
  })
});

// * 5. 질문에 적어주신 테스트용 사각형(square) 애니메이션을 그대로 적용했습니다.
// *** 스크롤을 내리면 지정한 컨테이너 내부에서 오른쪽으로 15rem만큼 굴러가는 애니메이션입니다.
animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    debug: true,      // *** 스크롤 발동 지점을 화면에 선으로 그려서 눈으로 보여줍니다. (디자인 완성 시 false로 끄시면 됩니다)
  })
});
