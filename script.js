const secreteNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = secreteNum;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.content').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.practice').textContent = 'No value';
  } else if (guess === secreteNum) {
    document.querySelector('.practice').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess > secreteNum) {
    if (score > 1) {
      document.querySelector('.practice').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    } else {
      document.querySelector('.practice').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secreteNum) {
    if (score > 1) {
      document.querySelector('.practice').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    } else {
      document.querySelector('.practice').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
