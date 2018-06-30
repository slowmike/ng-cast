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
        } else {
          if (this.input !== '') {
            this.service.search(this.input, (data) => {
              this.result(data);
            });
          }
        }
      };
      this.submit = () => {
        if (this.input === '') {
          this.input = 'cats';
        }
        this.service.search(this.input, (data) => {
          this.result(data);
        });
        this.input = '';
      };
    }
  });
