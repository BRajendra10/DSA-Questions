const user = {
    name: "Rajendra Behera",
    profession: "Developer / WEB Developer",
    gender: "Male",
    age: 19,
}

console.log([...Object.keys(user)].includes("age"));