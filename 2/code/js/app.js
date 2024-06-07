let interval;
let activeIndex = 1;

$(document).ready(function () {
  interval = setInterval(changeActiveIndex, 2500);
  $(".list-button-item").on("click", function () {
    // list button의 색상 변경
    const index = $(this).index();
    activeIndex = index;
    changeActiveIndex();
    clearInterval(interval);
    // animation 재설정을 위해 animation을 잠시 제거한다.
    $(".banner").css("animation", "none");
    // animation 재설정
    $(".banner").animate({ marginLeft: `${-100 * index}%` }, 1, function () {
      //1초의 시간 여유(해당 이미지로 이동하는 animation을 위한 시간)를 두고 다시 animation을 설정한다.
      setTimeout(function () {
        $(".banner").css("animation", `animation${index + 1} 10s infinite`);

        interval = setInterval(changeActiveIndex, 2500);
      }, 1000);
    });
  });
});
function changeActiveIndex() {
  if (activeIndex > 3) {
    activeIndex %= 4;
  }
  changeActiveBtn();
  activeIndex += 1;
}
function changeActiveBtn() {
  $(".list-button-item").removeClass("active");
  $(`.list-button span:eq(${activeIndex})`).addClass("active");
}

$(".post-wrapper").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $(".next"),
  prevArrow: $(".prev"),
});

new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: ["카페", "편의점", "슈퍼마켓", "미용실", "세탁/빨래방", "실내운동"],
    datasets: [
      {
        label: "배치 현황",
        backgroundColor: [
          "#98817B",
          "#DBD7D2",
          "#8B8589",
          "#B2BEB5",
          "#708090",
          "#8C92AC",
        ],
        color: ["red"],

        data: [559, 156, 44, 180, 55, 1],
      },
    ],
  },
  options: {
    responsive: false,
    legend: {
      display: false,
      label: {
        fontSize: 40,
      },
    },
    title: {
      display: false,
      text: "서초동의 편의시설 현황 그래프",
    },
    bodyFont: {
      font: {
        family: "'Noto Sans KR', sans-serif",
      },
    },
  },
});
