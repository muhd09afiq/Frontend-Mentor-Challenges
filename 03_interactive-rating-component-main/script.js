let beforeRatingState = document.getElementById("beforeRating");
let afterRatingState = document.getElementById("afterRating");

const submitBtn = document.getElementById("submitBtn");

//submit btn change the beforeRatingState class from show to hidden
//also change afterRatingState class from hidden to show
submitBtn.addEventListener("click", function () {
  beforeRatingState.classList.remove("show");
  beforeRatingState.classList.add("hidden");

  afterRatingState.classList.remove("hidden");
  afterRatingState.classList.add("show");
});

//scoring logic
const ratingBtn = document.querySelectorAll("button[data-score]");
const ratingResult = document.getElementById("rating");

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const score = btn.getAttribute("data-score");
    ratingResult.textContent = score;
  });
});
