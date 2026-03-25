
function countVowlesConsonent(str) {
    let consonent = 0;
    let vowels = 0;

    for(let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "A": 
            case "E": 
            case "I": 
            case "O": 
            case "U": 
            case "a": 
            case "e": 
            case "i": 
            case "o": 
            case "u": 
                vowels++
                break;

            default :
                consonent++
        }
    }

    console.log(`Total Vowels: ${vowels}, Total Consonent: ${consonent}`);
}

const name = "Rajendra";
countVowlesConsonent(name);