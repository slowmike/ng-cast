angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.getService = youTube;
      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };
      this.searchResults = (data) => {
        this.videos = data.items;
        this.currentVideo = this.videos[0];
      };
    }
  });
