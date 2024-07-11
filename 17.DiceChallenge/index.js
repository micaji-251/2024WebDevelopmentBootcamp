let n = Math.round(Math.random() * 5, 0) + 1;
document
  .querySelector('img.img1')
  .setAttribute('src', './images/dice' + n + '.png');

let n2 = Math.round(Math.random() * 5, 0) + 1;
document
  .querySelector('img.img2')
  .setAttribute('src', './images/dice' + n2 + '.png');

// title = document.querySelector('h1').innerHTML;

function changeTitle() {
  if (n > n2) {
    document.querySelector('h1').innerHTML = '🚩Player 1 Wins!';
  } else if (n < n2) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins!🚩';
  } else {
    document.querySelector('h1').innerHTML = 'Draw!';
  }
}
changeTitle();
