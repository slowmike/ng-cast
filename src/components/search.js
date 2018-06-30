angular.module('video-player')
  .component('search', {
    templateUrl: 'src/templates/search.html',
    bindings: {
      result: '<',
      onClick: '<'
    },
    controller: function() {
      this.input = '';
      this.keyPress = function(e) {
        if (e.keyCode === 13) {
          this.submit();
        }
      };
      this.submit = function() {
        this.result(this.input);
        this.input = '';
      };
    }
  });
