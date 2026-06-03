const loadCategory = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showCategory(data.categories);
      loadPlants();
    });
};
const showCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="category-btn border border-gray-100 rounded-md p-1 hover:bg-green-800 hover:text-white" id="categoryBtn-${category.id}" onclick="plantShowByCategory(${category.id})">${category.category_name}</div>`;
    categoryContainer.append(div);
  });
};

const loadPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlants(data.plants));
};
const showPlants = (plants) => {
  const plantContainer = document.getElementById("plant-container");
  plants.forEach((plant) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="rounded-md bg-white p-3 h-full flex flex-col justify-between">
                        <div><img src="${plant.image}" alt="" class="rounded-md w-full h-[150px]"></div>
                        <div class="text-xl font-bold">${plant.name}</div>
                        <div class="text-sm">${plant.description}</div>
                        <div class="flex justify-between items-center font-bold">
                            <p class="bg-green-100  text-green-700 px-3 py-2 rounded-full">${plant.category}</p>
                            <p>$<span>${plant.price}</span></p>
                        </div>
                        <button class="bg-green-800 text-white w-full px-3 py-2 rounded-md" onclick="addToCart('${plant.name}',${plant.price},${plant.id})">Add to Cart</button>
                    </div>`;
    plantContainer.append(div);
  });
};

const plantShowByCategory = (id) => {
  activeBtn(id);
  document.getElementById("plant-container").innerHTML = "";
  if (id === 0) {
    loadPlants();
    return;
  }
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlants(data.plants));
};

const activeBtn = (id) => {
  const allBtns = document.querySelectorAll(".category-btn");
  allBtns.forEach((btn) => {
    btn.classList.remove("bg-green-800", "text-white");
  });
  document
    .getElementById(`categoryBtn-${id}`)
    .classList.add("bg-green-800", "text-white");
};

const cartHistory = [];
const addToCart = (name, price, id) => {
    const exist = cartHistory.find(cart => cart.id === id)
    if(!exist){
        cartHistory.unshift({ name: name, price: price, id: id , quantity:1 })
    }else{
        exist.quantity += 1;
    }
  console.log(cartHistory)
};

loadCategory();
// category: "Fruit Tree";
// description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.";
// id: 1;
// image: "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg";
// name: "Mango Tree";
// price: 500;
