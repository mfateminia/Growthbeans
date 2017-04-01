function init(){
	$(document).ready(function(){
		$("#hideAll").hide();
	});
}

(function(){
	angular.module("videoPlay", [])
	.controller("videoCtrl", videoCtrl)
	.filter("makeHTML", makeHTMLFilterFactory);

	videoCtrl.$inject = ['$sce', '$http', 'makeHTMLFilter'];
	function videoCtrl($sce, $http, makeHTMLFilter){
		var vm = this;
		var currentIndex = 1;

		$http.get('json/db.json')
		.success(function(response){
			vm.collection = response.videos;


//load current video
		vm.currentVideoTitle = vm.collection[currentIndex].title;
		vm.currentVideoLink =  $sce.trustAsResourceUrl(makeHTMLFilter(vm.collection[currentIndex].link));

//load playlist
		vm.playThis = function(currentIndex){
			vm.currentVideoTitle = vm.collection[currentIndex].title;
			vm.currentVideoLink =  $sce.trustAsResourceUrl(makeHTMLFilter(vm.collection[currentIndex].link));
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

//prepend https://www.youtube.com/embed/ to the link code
	function makeHTMLFilterFactory(){
		return function(input){
			return 'https://www.youtube.com/embed/' + input;
		}
	}
})();
