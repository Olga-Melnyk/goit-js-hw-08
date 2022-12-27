import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const playbackTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

player
  .setCurrentTime(playbackTime)
  .then(function (playbackTime) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
