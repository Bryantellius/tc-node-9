export default class Timer {
  timer;
  time = 0;

  start(seconds, callback) {
    this.time = seconds;
    this.timer = setInterval(() => {
      if (--this.time <= 0) {
        clearInterval(this.timer);
        callback();
      }
    }, 1000);
  }
}
