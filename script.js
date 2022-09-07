const mouseEvent = (e) => {
  const shouldShowExitIntent =
    !e.toElement && !e.relatedTarget && e.clientY < 10;

  if (shouldShowExitIntent) {
    document.removeEventListener("mouseout", mouseEvent);
    document.querySelector(".exit-intent-popup").classList.add("visible");
  }
  if (!e.toElement && !e.relatedTarget) {
    document.removeEventListener("mouseout", mouseEvent);
    document.querySelector(".exit-intent-popup").classList.add("visible");
  }
};

const handleMobileEvent = () => {
  var lastScrollTop = 0;
  var counter = 0;
  document.addEventListener(
    "scroll",
    function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      let half = window.innerHeight / 2;
      if (half) {
        if (st > lastScrollTop) {
        } else {
          if (counter == 0) {
            if (lastScrollTop > half - 100) {
              document
                .querySelector(".exit-intent-popup")
                .classList.add("visible");
              counter++;
            }
          }
        }
      }

      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
};

let windowWidth = window.innerWidth;
if (windowWidth > 768) {
  setTimeout(() => {
    document.addEventListener("mouseout", mouseEvent);
  }, 5000);
} else {
  handleMobileEvent();
}

const exit = (e) => {
  document.querySelector(".exit-intent-popup").classList.remove("visible");
};
