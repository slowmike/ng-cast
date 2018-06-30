angular.module('video-player')
  .service('youTube', function($http) {
    this.search = (options, callback) => {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: options.query,
          maxResults: options.max,
          key: options.key,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: 'true',
          contentType: 'application/json'
        }
      }).then(function successCallback(response) {
        callback(response.data);
      }, function errorCallback(response) {
        console.error('Failed to fetch data', response);
      });
    };
  });
