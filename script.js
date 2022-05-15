const form = document.querySelector('form');
const topText = document.querySelector('input[name="toptext"]');
const bottomText = document.querySelector('input[name="bottomtext"]');
const memePlace = document.querySelector('section');


form.addEventListener('submit', function(event){
  event.preventDefault();
  //alert('you just made a meme!');
  const wordFormA = makeTop(topText.value);
  const wordFormB = makeBottom(bottomText.value);
  memePlace.appendChild(wordFormA);
  memePlace.appendChild(wordFormB);
  topText.value = '';
  bottomText.value = '';
});

function makeTop(top) {
  topOf = document.createElement('h3');
  topOf.innerText = top;
  return topOf;
}

function makeBottom(bottom) {
  bottomOf = document.createElement('h3');
  bottomOf.innerText = bottom;
  return bottomOf;
}
