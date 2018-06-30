angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.videos = [];
      this.currentVideo = {};
      this.getService = youTube;
      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };
      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = this.videos[0];
      };
      this.$onInit = () => {
        this.getService.search('cats', (data) => {
          this.searchResults(data);
        });
      };
    }
  });
