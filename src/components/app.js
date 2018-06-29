angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      this.videos = window.exampleVideoData;
      this.video = this.videos[0];
      this.selectVideo = (index) => {
        this.video = this.videos[index];
      };
    }
  });
