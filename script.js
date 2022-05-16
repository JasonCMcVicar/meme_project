const form = document.querySelector('form');

const topText = document.querySelector('input[name="toptext"]');
const bottomText = document.querySelector('input[name="bottomtext"]');
const photo = document.querySelector('input[name="url"]');

const memePlace = document.querySelector('section');
let inputButton = document.createElement('button');

form.addEventListener('submit', function(event){
  event.preventDefault();

  //assign return from function that extracts and assigns text
  const wordFormA = makeTop(topText.value);
  const wordFormB = makeBottom(bottomText.value);

  //create div that will contain picture plus words
  const imageDiv = document.createElement('div');
  imageDiv.className = 'oned';

  //create div that will contain picture plus words plus button
  var containerDiv = document.createElement('div');
  containerDiv.className = 'supreme';

  //create button
  inputButton = document.createElement('button');
  inputButton.type = 'submit';
  inputButton.innerText='DELETE';

  imageDiv.style.backgroundImage = `url(${photo.value})`;
  //add top and bottom text
  imageDiv.appendChild(wordFormA);
  imageDiv.appendChild(wordFormB);

  containerDiv.appendChild(imageDiv);
  containerDiv.appendChild(inputButton);

  memePlace.appendChild(containerDiv);



  //reset inputs
  topText.value = '';
  bottomText.value = '';
  photo.value = '';

});


function makeTop(top) {
  const topOf = document.createElement('h2');
  topOf.innerText = top;
  return topOf;
}

function makeBottom(bottom) {
  const bottomOf = document.createElement('h3');
  bottomOf.innerText = bottom;
  return bottomOf;
}


inputButton.addEventListener('submit', function(event){
  event.preventDefault();
  console.log('hi');
});
