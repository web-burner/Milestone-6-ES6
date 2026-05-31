// const person = {
//   name: "Shaon",
//   age: 24,
// };

// const jsonData = JSON.stringify(person);
// console.log(jsonData);
// const obj = JSON.parse(jsonData);
// console.log(obj);

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => showUsers(data))
    .catch((err) => console.error(err));
};

const showUsers = (users) => {
  users.forEach((user) => console.log(user));
};

const loadPost = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => showPost(data))
    .catch((err) => console.error(err));
};

// const showPost = (posts) => {
//   const postContainer = document.getElementById("post-container");
//   postContainer.innerHTML = "";
//   posts.forEach((post,ind) => {
//     const div = document.createElement("div");
//     div.innerHTML = `<div class='style'>
//             <p>${post.title}</p>
//             <p>${post.completed === true ? 'Done':'Pending'}</p>
//         </div>`;
//     postContainer.append(div);
//   });
// };







// // {
// //     "userId": 1,
// //     "id": 3,
// //     "title": "fugiat veniam minus",
// //     "completed": false
// //   }

const loadToDos = async ()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await response.json()
  console.log(data);
}
loadToDos()