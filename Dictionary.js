// Arrays of word list
const yes = {
    name: "yes",
    partOfSpeech: "noun",
    definition1: "Used to give an affirmative response.",
    definition2: "Used as a response to someone addressing one or otherwise trying to attract one's attention.",
}

const panacea = {
    name: "panacea",
    partOfSpeech: "noun",
    definition1: "An answer or solution for all problems or difficulties.",
    definition2: "Not Found",
}
    
const concatenation = {
    name:"concatention",
    partOfSpeech: "noun",
    definition1: "A series of interconnected or interdependent things or events.",
    definition2: "Not Found",
}

const saw = {
    name: "saw",
    partOfSpeech: "verb",
    definition1: "Cut (something) using a saw.",
    definition2: "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument.",
}

const found = {
    name: "found",
    partOfSpeech: "adjective",
    definition1: "Having been discovered by chance or unexpectedly.",
    definition2: "(of a ship) Equipped; Supplied.",
}

const crane = {
    name: "crane",
    partOfSpeech: "verb",
    definition1: "Stretch out one's body or neck in order to see something.",
    definition2: "Move (a heavy object) with a crane.",
}

const minute = {
    name: "minute",
    partOfSpeech: "noun",
    definition1: "A period of time equal to sixty seconds or a sixtieth of an hour.",
    definition2: "A sixtieth of a degree of angular measurement (symbol: ʹ )",
}

const grotesque = {
    name: "grotesque",
    partOfSpeech: "adjective",
    definition1: "Comically or repulsively ugly or distorted.",
    definition2: "Not Found",
}

const label = {
    name: "label",
    partOfSpeech: "noun",
    definition1: "A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it.",
    definition2: "Not Found",
}

const debacle = {
    name: "debacle",
    partOfSpeech: "noun",
    definition1: "A sudden and ignominious failure; a fiasco.",
    definition2: "Not Found",
}

//  word list
const wordList = {
    "yes" : yes,
    "panacea" : panacea,
    "concatenation" : concatenation,
    "saw" : saw,
    "found" : found,
    "crane" : crane,
    "minute" : minute,
    "grotesque" : grotesque,
    "label" : label,
    "debacle" : debacle,
}

// variables of HTML needed
var term = document.getElementById("name")
var part = document.getElementById("part")
var def1 = document.getElementById("def")
var def2 = document.getElementById("def2")
var word = document.getElementById("wordSearch")
var pres = document.getElementById("button")

// if it's in the wordlist, then take the Term, Part of Speech and Definitions to input. if not then show inputed term and Not Found, for Defs and part of text.
function addText(){
    if(wordList.hasOwnProperty(word.value.toLowerCase()) === true){
        term.innerText= "term: " + wordList[word.value.toLowerCase()].name;
        part.innerText= "Part of speech: " + wordList[word.value.toLowerCase()].partOfSpeech;
        def1.innerText= "Definition 1: " + wordList[word.value.toLowerCase()].definition1;
        def2.innerText= "Definition 2: " + wordList[word.value.toLowerCase()].definition2;
        }
    else{
        term.innerText= "term: " + word.value;
        part.innerText= "Part of speech: Not Found";
        def1.innerText= "Definition 1: Not Found";
        def2.innerText= "Definition 2: Not Found";
        }
}
// Event Listener
pres.addEventListener("click", addText);



