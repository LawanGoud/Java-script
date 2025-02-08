let profileDetails = {
  imgSrc:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
  name: "RAHUL ATTULURI",
  age: 25,
};

let profileContainer = document.getElementById("profileContainer");
let imgContainer = document.getElementById("imgContainer");

profileContainer.classList.add(
  "d-flex",
  "flex-column",
  "justify-content-center",
  "text-center"
);

let imageElement = document.createElement("img");
imageElement.src = profileDetails.imgSrc;
imgContainer.appendChild(imageElement);

let headingElement = document.createElement("h1");
headingElement.textContent = profileDetails.name;
headingElement.classList.add("profile-name");
profileContainer.appendChild(headingElement);

let ageElement = document.createElement("p");
ageElement.textContent = "Age: " + profileDetails.age;
ageElement.classList.add("age");
profileContainer.appendChild(ageElement);
