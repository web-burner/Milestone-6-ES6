const loadCategory = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        loadSpinner(true);

      showCategory(data.categories);
      loadPlants();
    })
    .catch((err) => console.error(err));
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
    .then((data) => showPlants(data.plants))
    .catch((err) => console.error(err));
};
const showPlants = (plants) => {
  const plantContainer = document.getElementById("plant-container");
  plantContainer.innerHTML = "";
  plants.forEach((plant) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="rounded-md bg-white p-3 h-full flex flex-col justify-between gap-2">
                        <div><img src="${plant.image}" class="rounded-md w-full h-[150px] object-cover" alt="${plant.name} image"></div>
                        <div class="text-xl font-bold">${plant.name}</div>
                        <div class="text-sm">${plant.description}</div>
                        <div class="flex justify-between items-center font-bold">
                            <p class="bg-green-100  text-green-700 px-3 py-1 rounded-full">${plant.category}</p>
                            <p>$<span>${plant.price}</span></p>
                        </div>
                        <button class="bg-green-800 text-white w-full px-3 py-2 rounded-md" onclick="addToCart('${plant.name}',${plant.price},${plant.id})">Add to Cart</button>
                    </div>`;
    plantContainer.append(div);
  });
    loadSpinner(false);

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
let cartHistory = [];
const showCartItem = (items) => {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";
  items.forEach((item) => {
    const { name, price, id, quantity } = item;
    const div = document.createElement("div");
    div.innerHTML = `<div class="p-2 bg-green-100 flex justify-between items-center rounded-md">
                            <div class="text-sm">
                                <p class="font-semibold">${name}</p>
                                <p class="text-gray-500"><span>${price}</span> x <span>${quantity}</span></p>
                            </div>
                            <div>
                                <button onclick="removeItem(${id})" class="cutItemFormCart p-3 text-lg font-bold">X</button>
                            </div>
                        </div>`;
    cartContainer.append(div);
  });
  totalCartPrice(items);
};

const addToCart = (name, price, id) => {
  const exist = cartHistory.find((cart) => cart.id === id);
  if (!exist) {
    cartHistory.unshift({ name: name, price: price, id: id, quantity: 1 });
  } else {
    exist.quantity += 1;
  }
  showCartItem(cartHistory);
};
const totalCartPrice = (totalCart) => {
  const totalPrice = document.getElementById("total-price");
  let total = 0;
  totalCart.forEach((cart) => {
    const { price, quantity } = cart;
    const itemPrice = price * quantity;
    total += itemPrice;
  });
  totalPrice.innerText = total.toFixed(2);
};

const removeItem = (id) => {
  const filterItem = cartHistory.filter((cart) => cart.id !== id);
  cartHistory = filterItem;
  showCartItem(cartHistory);
};

const loadSpinner = (status) => {
  if (status === true) {
    document.getElementById("spinner").classList.remove("hidden");
  }else{
     document.getElementById("AllPlants").classList.remove("hidden");
     document.getElementById("spinner").classList.add("hidden");
  }
};

loadCategory();
