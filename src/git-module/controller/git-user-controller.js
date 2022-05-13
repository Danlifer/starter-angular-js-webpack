(function(){
'use strict';

angular
    .module('appGit')
    .controller('git-user-controller',gitUserController);

    gitUserController.$inject=['webService','$rootScope','$routeParams'];

    function gitUserController(webService,$rootScope,$routeParams){
        var vm=this;
        vm.owner=$routeParams.name;
        vm.ownerInfo={};
        webService.sendDataUser(vm.owner)
                    .then((response)=>{
                        vm.ownerInfo=response.data;
                        console.log(vm.ownerInfo);
                    })
    }

})();