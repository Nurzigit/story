// const data = [1, 2, 3, 3];

// const name = localStorage.setItem("name", JSON.stringify(data));
// const nikita = localStorage.getItem("name");

// console.log(JSON.parse(nikita));


const data = [1, 2, 3, 3];

const name = sessionStorage.setItem("name", JSON.stringify(data));
const nikita = sessionStorage.getItem("name");

console.log(JSON.parse(nikita));