let recipeObj = {
  title: "Tomato Pasta",
  imgSrc:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
  ingredients: [
    "Pasta",
    "Oil",
    "Onions",
    "Salt",
    "Tomato Pasta Sauce",
    "Cheese",
  ],
};

let ingredientsList = recipeObj.ingredients;

let recipeTitle = document.getElementById("recipeTitle");
recipeTitle.textContent = recipeObj.title;

let imgContainer = document.getElementById("imgContainer");
let img = document.getElementById("img");
img.setAttribute("src", recipeObj.imgSrc);
img.classList.add("w-100");
imgContainer.appendChild(img);

let ingredientsListContainer = document.getElementById(
  "ingredientsListContainer"
);

for (let ingredient of ingredientsList) {
  let ingredientElement = document.createElement("li");
  ingredientElement.classList.add("ingredient");
  ingredientElement.textContent = ingredient;
  ingredientsListContainer.appendChild(ingredientElement);
}
