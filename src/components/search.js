angular.module('video-player')
  .component('search', {
    templateUrl: 'src/templates/search.html',
    bindings: {
      result: '<',
      onClick: '<',
      service: '<'
    },
    controller: function() {
      this.input = '';
      this.keyPress = (e) => {
        if (e.keyCode === 13) {
          this.submit();
        }
      };
      this.submit = () => {
        this.service.search(this.input, (data) => {
          this.result(data);
        });
        this.input = '';
      };
    }
  });
