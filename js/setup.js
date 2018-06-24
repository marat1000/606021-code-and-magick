'use strict';

var names;
var surnames;
var coatColors;
var eyesColors;
var i;
var wizards = [];

names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomItem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

wizards = [
  {
    name: getRandomItem(names) + ' ' + getRandomItem(surnames),
    coatColor: getRandomItem(coatColors),
    eyesColor: getRandomItem(eyesColors)
  },
  {
    name: getRandomItem(names) + ' ' + getRandomItem(surnames),
    coatColor: getRandomItem(coatColors),
    eyesColor: getRandomItem(eyesColors)
  },
  {
    name: getRandomItem(names) + ' ' + getRandomItem(surnames),
    coatColor: getRandomItem(coatColors),
    eyesColor: getRandomItem(eyesColors)
  },
  {
    name: getRandomItem(names) + ' ' + getRandomItem(surnames),
    coatColor: getRandomItem(coatColors),
    eyesColor: getRandomItem(eyesColors)
  }
];

// Этот массив вообще можно получить через цикл? Подскажи, пожалуйста, правильный вариант
// var D = {
//   name: getRandomItem(names) + ' ' + getRandomItem(surnames),
//   coatColor: getRandomItem(coatColors),
//   eyesColor: getRandomItem(eyesColors)
// };
// i = 0;
// while (i < 4) {
//   wisards[i] = D;
//   i = i + 1;
// }

// var gettest = function (m) {
//   wisards[m] = {
//     name: getRandomItem(names) + ' ' + getRandomItem(surnames),
//     coatColor: getRandomItem(coatColors),
//     eyesColor: getRandomItem(eyesColors)
//   };
// };
// var wisards = [];
// i = 0;
// while (i <= 4) {
//   gettest(i);
//   i = i + 1;
// }

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

userDialog.classList.remove('hidden');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for ( i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
