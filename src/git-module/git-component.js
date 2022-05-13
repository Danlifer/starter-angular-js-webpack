import template from "./assets/git-view.html"

(function(){

    angular.module('appGit').component(
        'gitComponent',
        {
            bindings:[],
            controller:'git-controller',
            controllerAs:'gitCtlr',
            template:template

        }
    )
})(template)