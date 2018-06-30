angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };
      this.searchResults = (input) => {
        youTube.search({query: input, max: 5, key: window.YOUTUBE_API_KEY}, (data) => {
          this.videos = data.items;
          this.currentVideo = this.videos[0];
        });
      };
    }
  });
