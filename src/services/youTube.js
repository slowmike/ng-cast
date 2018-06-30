angular.module('video-player')
  .service('youTube', function($http) {
    this.search = (input, callback) => {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: input,
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: 'true',
          contentType: 'application/json'
        }
      }).then(function successCallback(response) {
        callback(response.data.items);
      }, function errorCallback(response) {
        console.error('Failed to fetch data', response);
      });
    };
  });
