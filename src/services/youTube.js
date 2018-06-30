angular.module('video-player')
  .service('youTube', function() {
    this.search = () => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: 'angular js',
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: 'true',
          contentType: 'application/json'
        }
      }).then(function successCallback(response) {
        console.log(response);
        callback(response);
      }, function errorCallback(response) {
        console.error('Failed to fetch data', response);
      });
    };
  });
