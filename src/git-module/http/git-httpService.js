(function(){
'use strict';

angular
    .module('appGit')
    .service('httpService',['proxy',httpService]);

    httpService.$inject=['proxy'];

    function httpService(proxy){
        var vm =this;

        vm.returnInfo= returnInfo
        return vm; 
        
        function returnInfo (query) {
            return new Promise((resolve,reject)=>{
                proxy.getAll(query)
                    .then((info) =>{
                        resolve(info.data);
                    }).catch((reject)=>{
                        console.log('error al cargar datos');
                    });
            })
        }
    }

})();