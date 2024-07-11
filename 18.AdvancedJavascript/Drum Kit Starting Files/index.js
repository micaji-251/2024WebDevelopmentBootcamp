document.querySelectorAll('button.drum').forEach((item) => {
  item.addEventListener('click', handleClick);
});
document.addEventListener('keypress', handleKey);

function handleClick() {
  number = this.textContent;
  // switch (number) {
  //   case 'w':
  //     audio = new Audio('./sounds/crash.mp3');
  //     break;
  //   case 'a':
  //     audio = new Audio('./sounds/kick-bass.mp3');
  //     break;
  //   case 's':
  //     audio = new Audio('./sounds/snare.mp3');
  //     break;
  //   case 'd':
  //     audio = new Audio('./sounds/tom-1.mp3');
  //     break;
  //   case 'j':
  //     audio = new Audio('./sounds/tom-2.mp3');
  //     break;
  //   case 'k':
  //     audio = new Audio('./sounds/tom-3.mp3');
  //     break;
  //   case 'l':
  //     audio = new Audio('./sounds/tom-4.mp3');
  //     break;
  //   default:
  //     console.log(this);
  //     break;
  // }

  // audio.play();
  playAudio(number);
  changeColor(number);
}

function playAudio(number) {
  let audio = new Audio('');
  switch (number) {
    case 'w':
      audio = new Audio('./sounds/crash.mp3');
      break;
    case 'a':
      audio = new Audio('./sounds/kick-bass.mp3');
      break;
    case 's':
      audio = new Audio('./sounds/snare.mp3');
      break;
    case 'd':
      audio = new Audio('./sounds/tom-1.mp3');
      break;
    case 'j':
      audio = new Audio('./sounds/tom-2.mp3');
      break;
    case 'k':
      audio = new Audio('./sounds/tom-3.mp3');
      break;
    case 'l':
      audio = new Audio('./sounds/tom-4.mp3');
      break;
    default:
      console.log(this);
      break;
  }

  audio.play();
}

function handleKey(e) {
  number = e.key;

  playAudio(number);
  changeColor(number);
}

function changeColor(number) {
  document.querySelector('.' + number).classList.add('pressed');
  setTimeout(function () {
    document.querySelector('.' + number).classList.remove('pressed'), 100;
  });
}
