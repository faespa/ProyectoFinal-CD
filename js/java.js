
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, {
    autohide: false
  }).show()
})


const myCarousel = document.getElementById("carouselExampleIndicators");
const carouselIndicators = myCarousel.querySelectorAll(
  ".carousel-indicators button span"
);
let intervalID;

const carousel = new bootstrap.Carousel(myCarousel);

window.addEventListener("load", function () {
  fillCarouselIndicator(1);
});

myCarousel.addEventListener("slide.bs.carousel", function (e) {
  let index = e.to;
  fillCarouselIndicator(++index);
});

function fillCarouselIndicator(index) {
  let i = 0;
  for (const carouselIndicator of carouselIndicators) {
    carouselIndicator.style.width = 0;
  }
  clearInterval(intervalID);
  carousel.pause();

  intervalID = setInterval(function () {
    i++;

    myCarousel.querySelector(".carousel-indicators .active span").style.width =
      i + "%";

    if (i >= 100) {
      carousel.next();
    }
  }, 50);
}
