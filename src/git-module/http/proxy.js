(function(){
'use strict';

angular
    .module('appGit')
    .factory('proxy',proxy)

    proxy.$inject=['$http'];

    function proxy($http){
        
        var proxy ={
            get:get,
            getAll:getAll
        }
        return proxy;

        function getAll(query){
            return $http({
                    method: 'GET',
                    url: 'https://api.github.com/search/repositories?q='+ query
                })
        }
        
        function get(query){
            return $http({
                method: 'GET',
                url: 'https://api.github.com/users/'+ query
            })
        }
    }
})();