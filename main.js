const teacherDiv = document.querySelector(".teacher");

teacherDiv.addEventListener("touchstart", function() {
  this.classList.add("glow-maroon-saber");
});

teacherDiv.addEventListener("touchend", function() {
  this.classList.remove("glow-maroon-saber");
});
