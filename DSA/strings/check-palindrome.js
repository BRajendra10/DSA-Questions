
function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if(str[i] === str[j]) {
            console.log(str[i], str[j], i, j);
        } else {
            return false
        }

        i++;
        j--;
    }

    return true
}

const string = "aibohphobia";
console.log(isPalindrome(string))