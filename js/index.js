var ss = angular.module('weixin',['ngAnimate','ngRoute','ngTouch']);
ss.controller('mainCtrl',['$scope',function($scope){
	// if(localStrage.x){
	// 	$scope.isFirstopen = false;     
	// }else{
	// 	$scope.isFirstopen = true;
	// }
	// $scope.enter = function(){
	// 	localStrage.bdx
	// }
	//第一次进入显示，以后不显示
}])
ss.controller('weixinCtrl',['$scope',function($scope){
     $scope.weixinlist=[
     {image:'image/2.png',name:'刘小雅',content:'你真的不考虑一下吗？'},
     {image:'image/1.png',name:'腾讯新闻',content:'空姐神秘的"空中闺房"曝光'},
     {image:'image/3.png',name:'同桌',content:'是不是感觉手机很卡？'},
     {image:'image/4.png',name:'分众专享',content:'【暑假福利】周杰伦送你游全球'},
     {image:'image/5.png',name:'中国建设银行',content:'查账还款新招出炉,你都试过了吗？'},
     {image:'image/2.png',name:'刘小雅',content:'你真的不考虑一下吗？'},
     {image:'image/1.png',name:'腾讯新闻',content:'空姐神秘的"空中闺房"曝光'},
     {image:'image/3.png',name:'同桌',content:'是不是感觉手机很卡？'},
     {image:'image/4.png',name:'分众专享',content:'【暑假福利】周杰伦送你游全球'},
     {image:'image/5.png',name:'中国建设银行',content:'查账还款新招出炉,你都试过了吗？'},
     ]
     $scope.deletelist=function(id){
      $scope.weixinlist = $scope.weixinlist.filter(function(v,i){
        return i!==id;
      })
    }
}])
ss.controller('lianxirenCtrl',['$scope',function($scope){
      
}])
ss.controller('faxianCtrl',['$scope',function($scope){
      
}])
ss.controller('woCtrl',['$scope',function($scope){
     
}])
ss.directive('uqHeader',[function(){
	return {
		restrict:'E',
		templateUrl:'view/directive/header.html',
	}
}])
ss.directive('uqFooter',[function(){
	return {
		restrict:'E',
		templateUrl:'view/directive/footer.html',
	}
}])
//定义路由
ss.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		controller:'weixinCtrl',
		templateUrl:'view/templates/weixin.html',
	}).when('/lianxiren',{
		controller:'lianxirenCtrl',
		templateUrl:'view/templates/lianxiren.html',
	}).when('/faxian',{
		controller:'faxianCtrl',
		templateUrl:'view/templates/faxian.html',
	}).when('/wo',{
		controller:'woCtrl',
		templateUrl:'view/templates/wo.html',
	}).otherwise({
		redirectTo:'/'
	})
}])