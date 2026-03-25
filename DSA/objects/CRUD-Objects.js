const user = {
    name: "Rajendra",
    age: 19,
}

console.log(user);
console.log(user.name);

user.profession = "Programmer";

delete user.age;

console.log(user)

user.profession = "Developer"

console.log(user);