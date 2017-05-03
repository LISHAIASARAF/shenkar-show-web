"use strict";angular.module("sbAdminApp").controller("InstitutesCtrl",function($scope,$position,$http,$q){function getDepartmentsMangers(){$http.get("scripts/users.json").then(function(resp){$scope.users=resp.data,$http.get("scripts/institutes.json").then(function(resp){$scope.institutes=resp.data})})}$scope.departments=[],$scope["new"]={manager:"1"},$scope.init=function(){getDepartmentsMangers()},$scope.getManagerName=function(id){var name="";return $scope.users.forEach(function(u){u._id==id&&(name=u.name)}),name},$scope.setEdit=function(id){return $scope.selected=null,$scope.institutes.forEach(function(d){d._id==id&&($scope.selected=angular.copy(d))}),$scope.selected?void 0:!1},$scope.update=function(){$http.put("https://shenkar-show.herokuapp.com/institutes",$scope.selected).then(function(resp){toastr.info("המחלקה עודכנה בהצלחה"),$scope.init(),$("#edit").modal("hide")})},$scope.create=function(){$http.post("https://shenkar-show.herokuapp.com/institutes",$scope["new"]).then(function(resp){toastr.info("המחלקה עודכנה בהצלחה"),$scope.init(),$("#new").modal("hide")},function(err){})},$scope["delete"]=function(){$http["delete"]("https://shenkar-show.herokuapp.com/institutes/"+$scope.selected._id).then(function(resp){toastr.info("נמחק בהצלחה"),$scope.init()})}});