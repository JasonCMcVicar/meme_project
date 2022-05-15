const form = document.querySelector('form');

const topText = document.querySelector('input[name="toptext"]');
const bottomText = document.querySelector('input[name="bottomtext"]');
const photo = document.querySelector('input[name="url"]');


const memePlace = document.querySelector('section');


form.addEventListener('submit', function(event){
  event.preventDefault();
  //alert('you just made a meme!');
  const wordFormA = makeTop(topText.value);
  const wordFormB = makeBottom(bottomText.value);
  const imageForm = makeImage(photo.value);

  memePlace.appendChild(wordFormA);
  memePlace.appendChild(wordFormB);
  memePlace.appendChild(imageForm);

  topText.value = '';
  bottomText.value = '';
  photo.value = '';
});

function makeTop(top) {
  const topOf = document.createElement('h3');
  topOf.innerText = top;
  return topOf;
}

function makeBottom(bottom) {
  const bottomOf = document.createElement('h3');
  bottomOf.innerText = bottom;
  return bottomOf;
}

function makeImage(phot) {
  const image = document.createElement('img');
  image.setAttribute('src', phot);
  return image;
}
