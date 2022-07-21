import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = "currentTimeKey";
const currentTime = localStorage.getItem(localStorageKey);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(localStorageKey, data.seconds);
  }, 1000),
  );