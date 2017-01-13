app.controller('MainController', [mainControllerFunction]);

function mainControllerFunction($scope) {
    var vm = this;
    vm.firstName = '';
    vm.lastName = '';
    vm.hobbyName = '';
    vm.hobby = {};
    vm.hobbies = [];
    
    vm.addHobby = function() {
        vm.hobby = {
            name: vm.hobbyName,
            favorite: false
        }
        vm.hobbies.push(vm.hobby);
    }
    vm.deleteHobby = function(index) {
        vm.hobbies.splice(index, 1);
    }
    vm.changeHobbyState = function(index) {
        if (vm.hobbies[index].favorite) {
            vm.hobbies[index].favorite = false;
        } else {
            vm.hobbies[index].favorite = true;
        }
    }
}