app.controller("popUpCtrl", function($scope, $window) {
  $scope.modalShown = false;
  $scope.modalShown2 = false;
  $scope.user = { name: "Javier", surname: "Molina", shortKey: "1111" };
  $scope.userMod = {};
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
  $scope.toggleModal2 = function() {
    $scope.modalShown2 = !$scope.modalShown2;
  };
  $scope.saveUser = function(usr) {
    $scope.userMod = usr;
    $window.alert(
      "Desde metodo SALVAR del controller fuera de la ventana: " +
        $scope.userMod.shortKey
    );
  };
});
