import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  width: 640,
});

player.on('timeupdate', function (evt) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds));
});

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
