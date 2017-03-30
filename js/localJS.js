function init(){
	$(document).ready(function(){
		$("#hideAll").hide();
	});
}

(function(){
	angular.module("videoPlay", [])
	.controller("videoCtrl", videoCtrl)
	.service("videoService", videoService)
	.filter("makeHTML", makeHTMLFilterFactory);

	videoCtrl.$inject = ['videoService', '$sce', 'makeHTMLFilter'];
	function videoCtrl(videoService, $sce, makeHTMLFilter){
		var vm = this;
		var currentIndex = 0;

//load current video
		vm.currentVideoTitle = videoService.videoList[currentIndex].title;
		vm.currentVideoLink =  $sce.trustAsResourceUrl(makeHTMLFilter(videoService.videoList[currentIndex].link));

//load playlist
		vm.collection = videoService.videoList;
		vm.playThis = function(currentIndex){
			vm.currentVideoTitle = videoService.videoList[currentIndex].title;
			vm.currentVideoLink =  $sce.trustAsResourceUrl(makeHTMLFilter(videoService.videoList[currentIndex].link));
		};

//open and close fb pool
		vm.showThePoll = false;
		vm.openPoll = function(){
			vm.showThePoll = true;
		}
		vm.closePoll = function(){
			vm.showThePoll = false;
		}
	}

//data container
	function videoService(){
		var service = this;
		service.videoList = [
			{title: "About Social Work", thumbnail:"social_work_1.jpg", link: "aZkRdmgtgIM"},
			{title: "A Typical Day in Social Work", thumbnail:"social_work_2.jpg", link: "eCEd1rNEM7k"},
			{title: "Challenges in Social Work", thumbnail:"social_work_3.jpg", link: "-ML4CaMm6gk"},
			{title: "Perks in Social Work", thumbnail:"social_work_4.jpg", link: "UucmbwZlFto"},
			{title: "Staying Current in Social Work", thumbnail:"social_work_5.jpg", link: "vDXORdcDvhA"},
			{title: "Advice for Individuals interested in Social Work", thumbnail:"social_work_6.jpg", link: "fd4uDf5lls4"},
		];
	}

//prepend https://www.youtube.com/embed/ to the link code
	function makeHTMLFilterFactory(){
		return function(input){
			return 'https://www.youtube.com/embed/' + input;
		}
	}
})();
