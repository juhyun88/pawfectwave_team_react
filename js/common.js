// const mystudy = "리액트";
// document.body.innerHTML = "<h1>"+mystudy+"</h1>";

document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = 0;
    let isScrolling;
    const body = document.body;
  
    window.addEventListener('scroll', () => {
      clearTimeout(isScrolling);
  
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 50;
  
      // 1. 스크롤 방향 및 상단 고정 결합 처리
      if (isScrolled) {
        body.classList.add('fixed');
        body.classList.toggle('scrolldown', currentScrollY > lastScrollY);
        body.classList.toggle('scrollup', currentScrollY < lastScrollY);
      } else {
        body.classList.remove('fixed', 'scrolldown', 'scrollup');
      }
  
      lastScrollY = currentScrollY;
  
      // 200ms 후에 스크롤 멈춘 것으로 간주
      isScrolling = setTimeout(() => {
        console.log("스크롤 멈춤!");
      }, 200);
    });
  });
  
  

//   최적화된 코드로 **setTimeout**을 이용해 스크롤 이벤트를 디바운싱(debouncing) 방식으로 과도한 이벤트 호출을 줄이겠습니다. 
//   또한 상단에서 일정 스크롤 거리 이하일 때 scrolldown 또는 scrollup 클래스를 제거하는 조건을 추가하겠습니다.

// 상단에 고정(fixed) 상태인지 아닌지를 fixed 클래스로 적용
// **스크롤 방향(up/down)**을 scrollup / scrolldown 클래스로 부여