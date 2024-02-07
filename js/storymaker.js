// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const button1 = document.getElementById("noun1");
const button2 = document.getElementById("verb");
const button3 = document.getElementById("adjective");
const button4 = document.getElementById("noun2");
const button5 = document.getElementById("setting");
const buttonreset = document.getElementById("reset");

// Constants for p tag to display query selectors
const noun1 = document.getElementById("choosenNoun1");
const verb = document.getElementById("choosenVerb");
const adjective = document.getElementById("choosenAdjective");
const noun = document.getElementById("choosenNoun2");
const cseting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const button6 = document.getElementById("playback");
const button7 = document.getElementById("random");
const lastpara = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in the spaghetti", "in my soup", "on the grass","in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    const currentNoun = nouns1[noun1Count];
    noun1.style.color = "rgb(225, 0, 255)";
    noun1.textContent = currentNoun;
    // if-else to change count setting
    if (noun1Count >= nouns1.length - 1) {
        noun1Count = 0; // Reset count to 0
    } else {
        noun1Count++; // Increment count
    }
}

function verb_on_click() {
   // Get the current verb from the array based on the count
   const currentVerb = verbs[verbCount];
   verb.style.color = "rgb(38, 221, 221)";
   verb.textContent = currentVerb;
   // Check if the count exceeds the array length and reset if necessary
   if (verbCount >= verbs.length - 1) {
       verbCount = 0; // Reset count to 0
   } else {
       verbCount++; // Increment count
   }
}

function adjective_on_click() {
    const currentAdjective = adjectives[adjectiveCount];
    adjective.style.color="rgb(29, 230, 29)";
    adjective.textContent = currentAdjective;
    if (adjectiveCount >= adjectives.length - 1) {
        adjectiveCount = 0; 
    } else {
        adjectiveCount++; 
    }
}

function noun2_on_click() {
    const currentNoun2 = nouns2[noun2Count];
    noun.style.color = "#ff9900";
    noun.textContent = currentNoun2;
    if (noun2Count >= nouns2.length - 1) {
        noun2Count = 0; 
    } else {
        noun2Count++;
    }
}

function setting_on_click() {
    const currentSetting = settings[settingCount];
    cseting.style.color="rgb(248, 128, 148)";
    cseting.textContent = currentSetting;
    if (settingCount >= settings.length - 1) {
        settingCount = 0;
    } else {
        settingCount++;
    }
}

// concatenate the user story and display
function playback_on_click() {
    lastpara.textContent = noun1.textContent + " " +verb.textContent + " " +adjective.textContent + " " +noun.textContent + " " +cseting.textContent;
    studentId.textContent = "Std ID: 200530617 "; //changing student id value
    studentId.style.color = "green"; // changing its text color to green when the button is clicked
    lastpara.style.color = "red"; // changing the para showing value of story's text color 
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1Index = Math.floor(Math.random() * nouns1.length);
    const randomVerbIndex = Math.floor(Math.random() * verbs.length);
    const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const randomNoun2Index = Math.floor(Math.random() * nouns2.length);
    const randomSettingIndex = Math.floor(Math.random() * settings.length);
    // Create the random story by concatenating the random words
    const randomStory = nouns1[randomNoun1Index] + " " + verbs[randomVerbIndex] + " " + adjectives[randomAdjectiveIndex] + " " + nouns2[randomNoun2Index] + " " + settings[randomSettingIndex];
    // Update the story paragraph with the random story
    lastpara.textContent = randomStory;
    lastpara.style.color = "blue"; //changing text color of the paragraph showing stories
}
//function for reset button making all the value contaners empty
function myFunction1(){
    noun1.textContent ="";
    verb.textContent = "";
    adjective.textContent = "";
    noun.textContent = "";
    cseting.textContent = "";
    lastpara.textContent = " ";
    studentId.textContent = "Student ID = _____ ";
}

/* Event Listeners
-------------------------------------------------- */
button1.addEventListener("click", noun1_on_click);
button2.addEventListener("click", verb_on_click);
button3.addEventListener("click", adjective_on_click);
button4.addEventListener("click", noun2_on_click);
button5.addEventListener("click", setting_on_click);
button6.addEventListener("click", playback_on_click);
button7.addEventListener("click", random_on_click);
buttonreset.addEventListener("click",myFunction1);