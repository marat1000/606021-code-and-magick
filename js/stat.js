'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var PADDING = 18;
var FONT_GAP = 16;
var COLUMN_GAP = 50;
var BAR_WIDTH = 40;
var HISTOGRAM_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color; ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getComparisonResult = function (x) {
  var ComparisonResult = (x === 'Вы');
  return ComparisonResult;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + PADDING, CLOUD_Y + PADDING + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + PADDING, CLOUD_Y + PADDING + 2 * FONT_GAP);

  var timesRound = [];

  for (var i = 0; i < times.length; i++) {
    timesRound[i] = Math.floor(times[i]);
  }

  var maxTime = getMaxElement(timesRound);

  for (i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';

    ctx.fillText(players[i], CLOUD_X + 2 * PADDING + GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - PADDING);

    ctx.fillText(timesRound[i], CLOUD_X + 2 * PADDING + GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - (HISTOGRAM_HEIGHT * timesRound[i]) / maxTime - PADDING - FONT_GAP - GAP);

    getComparisonResult(players[i]) ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';

    ctx.fillRect(CLOUD_X + 2 * PADDING + GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - (HISTOGRAM_HEIGHT * timesRound[i]) / maxTime - FONT_GAP - PADDING, BAR_WIDTH, (HISTOGRAM_HEIGHT * timesRound[i]) / maxTime);
  }
};
