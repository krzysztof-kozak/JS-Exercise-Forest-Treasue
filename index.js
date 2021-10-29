import './style.css';

import images from './modules/images';
import sounds from './modules/sounds';
import showVictoryAlert from './modules/victoryAlert';

const modal = document.querySelector('.modal');
const forest = document.querySelector('.entry');

modal.addEventListener('click', handleModalClick);

forest.addEventListener('mouseover', searchForTreasure);

function searchForTreasure({ target: tree }) {
  if (!tree.classList.contains('treasure')) {
    uncoverLeaves(tree);
    return;
  }

  if (tree.classList.contains('treasure')) {
    uncoverTreasure(tree);
    return;
  }
}

function uncoverLeaves(tree) {
  if (tree.textContent === images.leaves) {
    return;
  }

  tree.textContent = images.leaves;

  if (sounds.leaves.playing()) {
    return;
  }

  sounds.leaves.play();
}

function uncoverTreasure(tree) {
  if (tree.textContent === images.treasure) {
    return;
  }

  tree.textContent = images.treasure;

  if (sounds.treasure.playing()) {
    return;
  }

  forest.removeEventListener('mouseover', searchForTreasure);

  sounds.treasure.play();
  sounds.victory.play();
  sounds.ambience.fade(1, 0, 1000);

  showVictoryAlert().then(() => sounds.victory.fade(1, 0, 500));
}

function handleModalClick() {
  modal.style.display = 'none';
  modal.removeEventListener('click', handleModalClick);
}
