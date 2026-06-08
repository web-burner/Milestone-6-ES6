// const name = 'Shaon';
// localStorage.setItem('name',name);

// const person = {
//     name:'Shaon',
//     age:24,
//     height: 5.8
// }

// localStorage.setItem('person',JSON.stringify(person))

// const addToLS = ()=>{
//     const num = Math.ceil(Math.random()*100)
//     localStorage.setItem('number',num)
//     console.log(`${num} is added to local storage`)
// }

// const setObjectToLS = ()=>{
//     const person = {
//         name : 'Shaon',
//         age : 24 ,
//         nationality : 'Bangladeshi'
//     }
//     const personJson = JSON.stringify(person)
//     localStorage.setItem('person',personJson)
// }

// const getValueFromLS = ()=>{
//     const personFromLS = localStorage.getItem('person')
//     const person = JSON.parse(personFromLS)
//     console.log(person.name)
// }

// item show from ls

// const addProduct = () => {
//   let product = document.getElementById("product").value;
//   let quantity = parseInt(document.getElementById("quantity").value);
//   console.log(`${product} : ${quantity}`);
//   displayProduct(product, quantity);

//   addToCart(product, quantity);
//   document.getElementById("product").value = "";
//   document.getElementById("quantity").value = "";
// };

// const displayProduct = (product, quantity) => {
//   const li = document.createElement("li");
//   li.innerText = `${product} : ${quantity}`;
//   document.getElementById("product-container").append(li);
// };

// const getCart = () => {
//   let cart = {};
//   const jsonCart = localStorage.getItem("cart");
//   if (jsonCart) {
//     cart = JSON.parse(jsonCart);
//   }
//   return cart;
// };
// // [1. here every time when getCart function called it will take the object from local storage which is already exist in local storage and set as cart value then return
// // ]
// const addToCart = (product, quantity) => {
//   const cart = getCart();
// //   cart[product] = quantity;
//   console.log(cart, product, quantity);
//   if (cart[product]) {
//     cart[product] = cart[product] + quantity;
//   } else {
//     cart[product] = quantity;
//   }

//   const cartJson = JSON.stringify(cart);
//   localStorage.setItem("cart", cartJson);
// };

// const displayObjectFromLS = ()=>{
//     const cart = getCart();
//     for(let product in cart){
//         // console.log(product,)
//         const quantity = cart[product]
//         displayProduct(product,quantity)
//     }
// }
// displayObjectFromLS()

const addProduct = () => {
  const productName = document.getElementById("product").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  displayProduct(productName, quantity);
  productAddToLS(productName, quantity);

  document.getElementById("product").value = "";
  document.getElementById("quantity").value = "";
};

const displayProduct = (product, quantity) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  productContainer.append(li);
};

const getCart = () => {
  let cart = {};
  const cartLS = JSON.parse(localStorage.getItem("cart"));
  if (cartLS) {
    cart = cartLS;
  }

  return cart;
};
const productAddToLS = (product, quantity) => {
  const cart = getCart();
  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }
  //   console.log(productName);

  const cartJson = JSON.stringify(cart);
  localStorage.setItem("cart", cartJson);
};

const displayObjectFromLS = () => {
  const cart = getCart();
  for (let product in cart) {
    // console.log(product, cart[product]);
    const quantity = cart[product];
    displayProduct(product, quantity);
  }
};

displayObjectFromLS();
