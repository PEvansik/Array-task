//Write the function camelize(str) that changes dash-separated words like 
//“my-short-string” into camel-cased “myShortString”.
//That is: removes all dashes, each word after dash becomes uppercased.

//creat a function that takes in such string
function camelize(str) {

//create an array from the string
let strToArray = str.split('-')

//split the second and upward element into a new array
let arrayOfInterest = strToArray.splice(1, 2)
let capLetter;
let lettersRemaining;
let newElement;
let twoElements = []


//loop through this new array, get the first character of each word,
arrayOfInterest.forEach(element => {
    //pick and convert the first letter of each element
    capLetter = element.slice(0, 1).toUpperCase()
    //hold the remaining letters of the word in a variable
    lettersRemaining = element.slice(1)
    //join the capital letter with remaining letters
    newElement = capLetter.concat("", lettersRemaining)
    //push these words into an array
    twoElements.push(newElement)
    

});

//concatenate this array using the spread operator with the first element of the original array

console.log(strToArray[0].concat(...twoElements))
return strToArray[0].concat(...twoElements)
//convert this array to a string

}

//the above code works but doesn't cater to sitation where the string start with "-" that will be treated shortly


