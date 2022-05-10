
(function(){
'use strict';

angular
    .module('appGit')
    .service('webService',webService);
    
webService.$inject=['httpService','transformer'];


    function webService(httpService,transformer){
        var service=this;
        service.webToTransform=webToTransform;
     
        return service;
        //return data;
        function webToTransform(query,searchType){
            
                return new Promise((resolve,reject)=>{
        
                    httpService.returnInfo(query).then((info)=>{
                            resolve({count:info.total_count,data:transformer.convertToObject(info.items,searchType)});
                        });
                })
            
           
        }
       
           

    }

})();