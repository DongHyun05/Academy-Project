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
          "#326cf9",
          "#326cf9",
          "#326cf9",
          "#326cf9",
          "#326cf9",
          "#326cf9",
        ],
        data: [559, 156, 44, 180, 55, 1],
      },
    ],
  },
  options: {
    responsive: false,
    legend: {
      display: false,
      label: {
        padding: 10,
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
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 600,
            stepSize: 200,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
});

$(window).ready(function () {
  draw(41.5, ".pie-chart1", "#326cf9");
  draw(41.1, ".pie-chart2", "#326cf9");
  draw(9.7, ".pie-chart3", "#326cf9");
});

function draw(max, classname, colorname) {
  var i = 1;
  var func1 = setInterval(function () {
    if (i < max) {
      color1(i, classname, colorname);
      i++;
    } else {
      clearInterval(func1);
    }
  }, 10);
}
function color1(i, classname, colorname) {
  $(classname).css({
    background:
      "conic-gradient(" +
      colorname +
      " 0% " +
      i +
      "%, #ffffff " +
      i +
      "% 100%)",
  });
}
