let petsImageUrls = {
  dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
  cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
  parrot:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
  spider:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
  rabbit:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png",
};

let petSelectEl = document.getElementById("petSelect");
let petImageEl = document.getElementById("petImage");

petSelectEl.addEventListener("change", function (event) {
  let selectedPet = event.target.value;
  let selectedPetImgUrl = petsImageUrls[selectedPet];
  petImageEl.src = selectedPetImgUrl;
});
