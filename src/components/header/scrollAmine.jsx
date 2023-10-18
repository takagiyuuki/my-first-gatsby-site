var startPos = 0,
  winScrollTop = 0;
window.addEventListener("scroll", function () {
  winScrollTop = this.scrollY;
  if (winScrollTop >= startPos) {
    if (winScrollTop >= 200) {
      document.getElementById("scrollArea").classList.add("hide");
    }
  } else {
    document.getElementById("scrollArea").classList.remove("hide");
  }
  startPos = winScrollTop;
});
