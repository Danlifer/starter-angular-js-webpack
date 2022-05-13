(function(){
    'use strict';
        angular
            .module('appGit')
            .factory('transformer', transformer);
    
        function transformer(){
            var factory ={
                convertDataUser:convertDataUser,
                convertToObject:convertToObject
            }
            return factory;
    
            function convertToObject(info,searchType){
                var list=[];
                // switch(searchType){

                // }
                for(let i=0;i<info.length;i++){
                    list.push({avatar:info[i].owner.avatar_url,
                               name:info[i].full_name,
                               url:info[i].url,
                               forks:info[i].forks_count,
                               watchers:info[i].watchers_count,
                               issues:info[i].open_issues_count,
                               owner:info[i].owner.login});      
                }console.log(searchType);
                orderObject(searchType,list);
                return list;
            }

            function orderObject(searchType,list){
                switch(searchType){
                    case 1:
                        list.sort(function(a,b){
                            return a.issues-b.issues;
                        })
                    break;
                    case 2:
                        list.sort(function(a,b){
                            return a.forks-b.forks;
                        })
                    break;

                    case 3:
                        list.sort(function(a,b){
                            return a.watchers-b.watchers;
                        })
                    break;        
                }
            }

            function convertDataUser(info){
                var list={
                        avatar:info.avatar_url,
                        name:info.login,
                        url:info.url
                    };
                return list;
            }

        }
    })();