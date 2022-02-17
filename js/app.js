'use strict';

let user = prompt('What is your name?');
alert(`Welcome ${user}! Please answer the following questions with either \'yes\' or \'no\'.`);

let questionOne = prompt('Is my name Alan?');

if (questionOne.toLowerCase() === 'yes' || questionOne.toLowerCase() === 'y') {
  // console.log('Yes! That is my name.');
  alert('Yes! That is my name.');
}
else if (questionOne.toLowerCase() === 'no' || questionOne.toLowerCase() === 'n') {
  // console.log('Actually, that is my name!');
  alert('Actually, that is my name!');
}
else {
  // console.log('Please follow the instructions (:');
  alert('Please follow the instructions (:');
};

let questionTwo = prompt('Am I 26 years old?');

if (questionTwo.toLowerCase() === 'yes' || questionTwo.toLowerCase() === 'y') {
  // console.log('Yup, I am 26 years old.');
  alert('Yup, I am 26 years old.');
}
else if (questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n') {
  // console.log('Actually, I am 26 years old.');
  alert('Actually, I am 26 years old.');
}
else {
  // console.log('Please follow the instructions (:');
  alert('Please follow the instructions (:');
};

let questionThree = prompt('Am I an astronaut?');

if (questionThree.toLowerCase() === 'yes' || questionThree.toLowerCase() === 'y') {
  // console.log('Ha, no I wish.');
  alert('Ha, no I wish.');
}
else if (questionThree.toLowerCase() === 'no' || questionThree.toLowerCase() === 'n') {
  // console.log('You\'re right. I wish I was though!');
  alert('You\'re right. I wish I was though!');
}
else {
  // console.log('Please follow the instructions (:');
  alert('Please follow the instructions (:');
};

let questionFour = prompt('Was I previously a mailman?');

if (questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y') {
  // console.log('Yes I was!');
  alert('Yes I was!');
}
else if (questionFour.toLowerCase() === 'no' || questionFour.toLowerCase() === 'n') {
  // console.log('Wrong, I worked for USPS up until the start of 2022.');
  alert('Wrong, I worked for USPS up until the start of 2022.');
}
else {
  // console.log('Please follow the instructions (:');
  alert('Please follow the instructions (:');
};

let questionFive = prompt('Am I a big fan of video games?');

if (questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y') {
  // console.log('You are absolutely right. I have always been a big fan of video games.');
  alert(`You are absolutely right ${user}. I have always been a big fan of video games.`);
}
else if (questionFive.toLowerCase() === 'no' || questionFive.toLowerCase() === 'n') {
  // console.log('Sorry, but I am definitely a big fan of video games.');
  alert(`Sorry ${user}, but I am definitely a big fan of video games.`);
}
else {
  // console.log('Please follow the instructions (:');
  alert('Please follow the instructions (:');
};