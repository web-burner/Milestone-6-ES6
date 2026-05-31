1. json ?
=> JavaScript Object Notation. json was created for use in browser for multiple language . it makes easy to use data for different language 

2. JSON.stringify(objName) [this is the way to convert an normal object to json object, it will convert key/value both like string but number and boolean keep like same]

const person = {
  name: "Shaon",
  age: 24,
};

const jsonData = JSON.stringify(person);
console.log(jsonData);

3. JSON.parse(jsonObject name) [it convert json object to normal object]

const person = {
  name: "Shaon",
  age: 24,
};

const jsonData = JSON.stringify(person);
console.log(jsonData);
const obj = JSON.parse(jsonData);
console.log(obj);

4. fetch() [here i have to use url in fetch , then i will get a response . then if data is available it will give me json format . then if data is available then it will give me in data variable then i can take the data and use it]


fetch ('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => console.log(data))

5. show data by click button 

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => showPost(data))
    .catch((err) => console.error(err));
};

const showPost = (users)=>{
    users.forEach(user => console.log(user))
}


6. display posts in ui by click button 
const loadPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => showPost(data))
    .catch((err) => console.error(err));
};

const showPost = (posts) => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  posts.forEach((post,ind) => {
    const h2 = document.createElement("h2");
    h2.innerText = `${ind+1}. ${post.title}`;
    postContainer.append(h2);
  });
};


7. NutShell 
8. GET
9. POST 
10. PUT 
11. PATCH
12. DELETE
13. async await 
    const loadToDos = async ()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await response.json()
      console.log(data);
    }
    loadToDos()