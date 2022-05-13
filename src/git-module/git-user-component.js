import templateUser from './assets/git-user.html'

(function(){

    angular.module('appGit')
        .component('gitUserComponent',
        {
            bindings:[],
            controller:'git-user-controller',
            controllerAs:'gitUserCtlr',
            template:templateUser
        })

})();