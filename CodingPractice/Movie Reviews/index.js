let titleInput = document.getElementById("titleInput");
let reviewTextarea = document.getElementById("reviewTextarea");
let reviewsContainer = document.getElementById("reviewsContainer");

function onAddReview() {
  let title = titleInput.value;
  let review = reviewTextarea.value;

  if (title === "") {
    alert("Please enter a movie title");
    return;
  }

  let movieTitle = document.createElement("h1");
  movieTitle.textContent = "Movie Title: " + title;
  movieTitle.classList.add("movie-title");
  reviewsContainer.appendChild(movieTitle);

  let movieReview = document.createElement("p");
  movieReview.textContent = "Movie Review: " + review;
  reviewsContainer.appendChild(movieReview);

  let horizontalLine = document.createElement("hr");
  reviewsContainer.appendChild(horizontalLine);

  titleInput.value = "";
  reviewTextarea.value = "";
}
