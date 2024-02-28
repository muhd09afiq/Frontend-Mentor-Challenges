let beforeRatingState = document.getElementById("beforeRating");
let afterRatingState = document.getElementById("afterRating");

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  document.body.appendChild(afterRatingState);
});
