const fs = require('fs');

let data = fs.readFileSync('./wordle_dictionary.txt', 'utf8').split('\n').filter(Boolean);
console.log(data.length)

let answer = {
    'first' : false,
    'second' : 'u',
    'third' : 'r',
    'fourth' : 's',
    'fifth' : 'e',
    "notLetters" : ['a','d','i','o', 'b','f','t','y','g','m','p', 'c'],
    "letters" : []
}



const checkAswer = (input) => {
    if(input.first){
        data = data.filter( word => word.startsWith(input.first))
    }
    if(input.second){
        data = data.filter( word => word.charAt(1) === input.second)
    }

    if(input.third){
        data = data.filter( word => word.charAt(2) === input.third)
    }

    if(input.fourth){
        data = data.filter( word => word.charAt(3) === input.fourth)
    }

    if(input.fifth){
        data = data.filter( word => word.endsWith(input.fifth) )
    }

    if(input.letters.length > 0){
        input.letters.forEach(element => {
            data = data.filter(word => word.includes(element))
        });
    }

    if(input.notLetters.length > 0){
        input.notLetters.forEach(element => {
            data = data.filter(word => !word.includes(element))
        });
    }
    
}

checkAswer(answer)
console.log(data)
