
function reverseString(str) {
    // console.log(str[0]);
    // console.log(str[str.length - 1])
    let newString = "";

    for(let i = str.length - 1; i >= 0; i--) {

        newString+=str[i]
    }

    return newString
}

const name = "rajendra";
console.log(reverseString(name));