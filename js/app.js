'use strict';

let total = 0;
let user = prompt('What is your name?');
alert(`Welcome ${user}! Please answer the following questions with either \'yes\' or \'no\'.`);

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();

function firstQuestion() {
  let questionOne = prompt('Is my name Alan?');

  if (questionOne.toLowerCase() === 'yes' || questionOne.toLowerCase() === 'y') {
    // console.log('Yes! That is my name.');
    alert('Yes! That is my name.');
    total++;
  }
  else if (questionOne.toLowerCase() === 'no' || questionOne.toLowerCase() === 'n') {
    // console.log('Actually, that is my name!');
    alert('Actually, that is my name!');
  }
  else {
    // console.log('Please follow the instructions (:');
    alert('Please follow the instructions (:');
  }
}

function secondQuestion() {
  let questionTwo = prompt('Am I 26 years old?');

  if (questionTwo.toLowerCase() === 'yes' || questionTwo.toLowerCase() === 'y') {
    // console.log('Yup, I am 26 years old.');
    alert('Yup, I am 26 years old.');
    total++;
  }
  else if (questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n') {
    // console.log('Actually, I am 26 years old.');
    alert('Actually, I am 26 years old.');
  }
  else {
    // console.log('Please follow the instructions (:');
    alert('Please follow the instructions (:');
  }
}

function thirdQuestion() {
  let questionThree = prompt('Am I an astronaut?');

  if (questionThree.toLowerCase() === 'yes' || questionThree.toLowerCase() === 'y') {
    // console.log('Ha, no I wish.');
    alert('Ha, no I wish.');
  }
  else if (questionThree.toLowerCase() === 'no' || questionThree.toLowerCase() === 'n') {
    // console.log('You\'re right. I wish I was though!');
    alert('You\'re right. I wish I was though!');
    total++;
  }
  else {
    // console.log('Please follow the instructions (:');
    alert('Please follow the instructions (:');
  }
}


function fourthQuestion() {
  let questionFour = prompt('Was I previously a mailman?');

  if (questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y') {
    // console.log('Yes I was!');
    alert('Yes I was!');
    total++;
  }
  else if (questionFour.toLowerCase() === 'no' || questionFour.toLowerCase() === 'n') {
    // console.log('Wrong, I worked for USPS up until the start of 2022.');
    alert('Wrong, I worked for USPS up until the start of 2022.');
  }
  else {
    // console.log('Please follow the instructions (:');
    alert('Please follow the instructions (:');
  }
}
let questionFive = prompt('Am I a big fan of video games?');

if (questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y') {
  // console.log('You are absolutely right. I have always been a big fan of video games.');
  alert(`You are absolutely right ${user}. I have always been a big fan of video games.`);
  total++;
}
else if (questionFive.toLowerCase() === 'no' || questionFive.toLowerCase() === 'n') {
  // console.log('Sorry, but I am definitely a big fan of video games.');
  alert(`Sorry ${user}, but I am definitely a big fan of video games.`);
}
else {
  // console.log('Please follow the instructions (:');
  alert('Please follow the instructions (:');
};

let guesses = 4;

while (guesses !== 0) {

  let questionSix = prompt('What is my favorite number?! Here\'s a hint, it\'s between 0 and 30.');

  if (questionSix > 27) {
    alert(`${questionSix} is too high! You have ${guesses - 1} guesses left.`);
    guesses--;
  }

  else if (questionSix < 27) {
    alert(`${questionSix} is too low! You have ${guesses - 1} guesses left.`);
    guesses--;
  }

  else if (questionSix == 27) {
    alert(`Wow! Great job, ${questionSix} is my favorite number!`);
    total++;
    break;
  }

}

if (guesses === 0) {
  alert('Good try! But my favorite number is actaully 27.');
}

let attempts = 6;
let cerealArray = ['frosted flakes', 'honeycomb', 'cookie crisp', 'trix'];

while (attempts !== 0) {


  let questionSeven = prompt(`Alright ${user} I\'m a big fan of eating cereal before bed. Can you guess what one of my favorite cereals is? You have ${attempts} attempts left.`);

  for (let i = 0; i < cerealArray.length; i++) {

    if (questionSeven.toLowerCase() === cerealArray[i]) {
      alert(`Great job! I love ${questionSeven}.`);
      attempts = 1;
      total++;
      break;
    }

  }
  attempts--;

}
alert('My favorite cereals are Frosted Flakes, Honeycomb, Cookie Crisp and Trix!');
alert(`Good job ${user} you got ${total} correct!`);
