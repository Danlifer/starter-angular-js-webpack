(function(){
'use strict';

angular
    .module('appGit')
    .factory('proxy',proxy)

    proxy.$inject=['$http'];

    function proxy($http){
        
        var proxy ={

            getAll:getAll
        }
        return proxy;

        function getAll(query){
            return $http({
                    method: 'GET',
                    url: 'https://api.github.com/search/repositories?q='+ query
                })
        }
            
    }
})();