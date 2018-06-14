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
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_COLOR = '#000';
var YOUR_RESULT_COLOR = 'rgba(255, 0, 0, 1)';
var FONT =  '16px PT Mono';
var DESCRIPTION_TEXT1 = 'Ура вы победили!';
var DESCRIPTION_TEXT2 = 'Список результатов:';
var YOUR_RESULT_TEXT = 'Вы';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var k = 1; k < arr.length; k++) {
    if (arr[k] > maxElement) {
      maxElement = arr[k];
    }
  }
  return maxElement;
};

var getColumnColor = function (ctx, name) {
  if (name === YOUR_RESULT_TEXT) {
    ctx.fillStyle = YOUR_RESULT_COLOR;
  } else {
    ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.font = FONT;
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(DESCRIPTION_TEXT1, CLOUD_X + PADDING, CLOUD_Y + PADDING + FONT_GAP);
  ctx.fillText(DESCRIPTION_TEXT2, CLOUD_X + PADDING, CLOUD_Y + PADDING + 2 * FONT_GAP);

  var maxTime = Math.floor(getMaxElement(times));

  var columnHeight;

  for (i = 0; i < times.length; i++) {
    columnHeight = (HISTOGRAM_HEIGHT * Math.floor(times[i])) / maxTime;
    ctx.fillStyle = TEXT_COLOR;

    ctx.fillText(players[i], CLOUD_X + 2 * PADDING + GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - PADDING);

    ctx.fillText(Math.floor(times[i]), CLOUD_X + 2 * PADDING + GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - columnHeight - PADDING - FONT_GAP - GAP);

    getColumnColor(ctx, players[i]);

    ctx.fillRect(CLOUD_X + 2 * PADDING + GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - columnHeight - FONT_GAP - PADDING, BAR_WIDTH, columnHeight);
  }

  var timesRound = [];

  for (var i = 0; i < times.length; i++) {
    timesRound[i] = Math.floor(times[i]);
  }
};
