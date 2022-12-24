import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
