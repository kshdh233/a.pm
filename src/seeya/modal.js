// modal.js

// 모든 별표 요소를 가져옵니다.
const stars = document.querySelectorAll('.star');

// 각 별표에 클릭 이벤트 리스너를 추가합니다.
stars.forEach((star) => {
  star.addEventListener('click', () => {
    // data-rating 속성에서 별점 값을 가져옵니다.
    const rating = parseInt(star.getAttribute('data-rating'));

    // 여기서 선택된 별점을 처리할 수 있습니다.
    console.log('선택된 별점:', rating);

    // 예를 들어, 선택된 별점에 따라 UI를 업데이트할 수 있습니다.
    // 이 예제에서는 선택된 별점까지의 별표 색상을 변경해 보겠습니다.
    stars.forEach((s, index) => {
      if (index < rating) {
        s.style.color = 'gold'; // 선택된 별표의 색상을 금색으로 변경합니다.
      } else {
        s.style.color = 'black'; // 선택되지 않은 별표의 색상을 검정색으로 초기화합니다.
      }
    });
  });
});
