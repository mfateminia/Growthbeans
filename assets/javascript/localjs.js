function init(){
	$(document).ready(function(){
		$("#hideAll").hide();
	});
}

(function(){
	angular.module("videoPlay", [])
	.controller("videoCtrl", videoCtrl);

	videoCtrl.$inject = ['$sce', '$http'];
	function videoCtrl($sce, $http){
		var vm = this;
		var currentIndex = 0;

		$http.get('model/videos.php', {params:{"category": "social services", "title": "social worker"}})
		.success(function(response){
			vm.collection = response;

//load current video
		vm.currentVideoTitle = vm.collection[currentIndex].title;
		vm.currentVideoLink =  $sce.trustAsResourceUrl(vm.collection[currentIndex].link);

//load playlist
		vm.playThis = function(currentIndex){
			vm.currentVideoTitle = vm.collection[currentIndex].title;
			vm.currentVideoLink =  $sce.trustAsResourceUrl(vm.collection[currentIndex].link);
		}
});
//open and close fb pool
		vm.showThePoll = false;
		vm.openPoll = function(){
			vm.showThePoll = true;
		}
		vm.closePoll = function(){
			vm.showThePoll = false;
		}
	}
})();
