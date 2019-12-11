.controller('AnimationCtrl', function($scope, $state) {
  var w = document.body.clientWidth;
  var h = document.body.clientHeight;

  LInit(requestAnimationFrame, 'animation', w, h, main);

  var backgroundLayer;


  function main(event) {
    initBackgroundLayer();

  }


  function initBackgroundLayer() {
    backgroundLayer = new LSprite();
    addChild(backgroundLayer);
  }


  $scope.$on('$ionicView.leave', function() {
    backgroundLayer.removeAllChild();
    backgroundLayer.die();
  })

})
