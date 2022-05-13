

(function(){
    'use strict';
    angular
        .module('appGit')
        .controller('git-controller',gitController);
    
        gitController.$inject=['webService'];
    
        function gitController(webService){
            var vm=this;
            vm.count;
            vm.repos=[];
            vm.query='';
            vm.searchType=1;
            vm.loader='';
            vm.loaded=false;
            vm.searchQuery= searchQuery;
            
            
            
            function searchQuery(){
                vm.loader=true;
                vm.loaded=false;
                webService.webToTransform(vm.query,vm.searchType)
                    .then((response)=>{
                        vm.repos=response.data;
                        vm.count=response.count;
                        console.log(vm.repos);
                        vm.loader=false;
                        vm.loaded=true;
                    })
            }
                
        }
    })();