import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  width: 640,
});

player.on(
  'timeupdate',
  throttle(function (evt) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(evt.seconds)
    );
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
