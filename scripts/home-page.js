
// array [] -- object {}
const categories = [
  {
    image: "../images/breakfast.png",
    name: "Breakfast"
  },
  {
    image: "../images/vegan.png",
    name: "Vegan"
  },
]
//  DOM
const categoriesBottom = document.querySelector(".categories-bottom");
categoriesBottom.innerHTML = "";
for (const category of categories) {
  categoriesBottom.innerHTML += `
      <div class="category-card">
        <img src="${category.image}" alt="">
        <p>${category.name}</p>
      </div>`
}