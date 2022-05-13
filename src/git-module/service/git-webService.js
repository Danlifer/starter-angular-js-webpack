(function(){
'use strict';

angular
    .module('appGit')
    .service('webService',webService);
    
webService.$inject=['httpService','transformer','$q'];

    function webService(httpService,transformer,$q){
        var service=this;
        service.webToTransform=webToTransform;
        service.sendDataUser=sendDataUser;
        return service;

        function webToTransform(query, searchType){
            
            return $q((resolve,reject)=>{
                httpService.returnInfo(query)
                .then((info)=>{
                        resolve(
                            {
                                count:info.total_count,
                                data:transformer.convertToObject(info.items,searchType)
                            });
                })
                .catch((reject) =>{
                    console.log('ERROR: ' + reject);
                });
            })
        }   

        function sendDataUser(query){
            return $q((resolve,reject)=>{
                httpService.returnData(query)
                .then((info)=>{
                        resolve(
                            {
                                data:transformer.convertDataUser(info)
                            });
                })
                .catch((reject) =>{
                    console.log('ERROR: ' + reject);
                });
            })
        }
    }
})();