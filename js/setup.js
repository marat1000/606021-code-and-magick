'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var NUMBER_OF_WIZARDS = 4;

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizards = [];

function getArray() {
  var i;
  for (i = 0; i < NUMBER_OF_WIZARDS; i++) {
    var getRandomItem = function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    };
    wizards[i] = {
      name: getRandomItem(NAMES) + ' ' + getRandomItem(SURNAMES),
      coatColor: getRandomItem(COAT_COLORS),
      eyesColor: getRandomItem(EYES_COLORS)
    };
  }
}

getArray();

var setup = document.querySelector('.setup');
var setupSimilarList = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

function renderSimilarWizards() {
  var fragment = document.createDocumentFragment();
  var i;
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  setupSimilarList.appendChild(fragment);
}

renderSimilarWizards();

setup.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');

function onPopupEscPress(evt) {
  if ((evt.keyCode === ESC_KEYCODE) && (!(setupUserName === document.activeElement))) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');

var j = 1;

function changeColorOfCoat() {
  if (j < COAT_COLORS.length) {
    wizardCoat.style.fill = COAT_COLORS[j];
    setup.querySelector('input[name=coat-color]').value = COAT_COLORS[j];
    j = j + 1;
  } else {
    j = 0;
    wizardCoat.style.fill = COAT_COLORS[j];
    setup.querySelector('input[name=coat-color]').value = COAT_COLORS[j];
    j = j + 1;
  }
}

wizardCoat.addEventListener('click', function () {
  changeColorOfCoat();
});

var k = 1;

function changeColorOfEyes() {
  if (k < EYES_COLORS.length) {
    wizardEyes.style.fill = EYES_COLORS[k];
    setup.querySelector('input[name=eyes-color]').value = EYES_COLORS[k];
    k = k + 1;
  } else {
    k = 0;
    wizardEyes.style.fill = EYES_COLORS[k];
    setup.querySelector('input[name=eyes-color]').value = EYES_COLORS[k];
    k = k + 1;
  }
}

wizardEyes.addEventListener('click', function () {
  changeColorOfEyes();
});

var l = 1;

function changeColorOfFireball() {
  if (l < FIREBALL_COLORS.length) {
    setupFireballWrap.style.backgroundColor = FIREBALL_COLORS[l];
    setup.querySelector('input[name=fireball-color]').value = FIREBALL_COLORS[l];
    l = l + 1;
  } else {
    l = 0;
    setupFireballWrap.style.backgroundColor = FIREBALL_COLORS[l];
    setup.querySelector('input[name=fireball-color]').value = FIREBALL_COLORS[l];
    l = l + 1;
  }
}

setupFireballWrap.addEventListener('click', function () {
  changeColorOfFireball();
});
