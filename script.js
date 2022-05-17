const form = document.querySelector('form');

const topText = document.querySelector('input[name="toptext"]');
const bottomText = document.querySelector('input[name="bottomtext"]');
const photo = document.querySelector('input[name="url"]');

const memePlace = document.querySelector('section');

form.addEventListener('submit', function(event){
  event.preventDefault();

  //assign return from function that extracts and assigns text
  const wordFormA = makeTop(topText.value);
  const wordFormB = makeBottom(bottomText.value);

  //create div that will contain picture plus words
  const imageDiv = document.createElement('div');

  //create the image for the new div
  imageDiv.style.backgroundImage = `url(${photo.value})`;

  //add top and bottom text
  imageDiv.appendChild(wordFormA);
  imageDiv.appendChild(wordFormB);

  //add the background image plus words to the new div
  memePlace.appendChild(imageDiv);

  //reset inputs
  topText.value = '';
  bottomText.value = '';
  photo.value = '';

});

//to remove a meme
memePlace.addEventListener('click', function(event){
  console.log("you clicked on: ", event.target);
  memePlace.removeChild(event.target);
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
