function init(){
	$(document).ready(function(){
		$("#hideAll").hide();
	});
}

(function(){
	angular.module("videoPlay", [])
	.controller("videoCtrl", videoCtrl)
	.service("videoService", videoService);

	videoCtrl.$inject = ['videoService', '$sce'];
	function videoCtrl(videoService, $sce){
		var vm = this;
		var currentIndex = 0;
		vm.showThePoll = false;

		vm.currentVideoTitle = videoService.videoList[currentIndex].title;
		vm.currentVideoLink =  $sce.trustAsResourceUrl(videoService.videoList[currentIndex].link);
		vm.collection = videoService.videoList;

		vm.playThis = function(currentIndex){
			vm.currentVideoTitle = videoService.videoList[currentIndex].title;
			vm.currentVideoLink =  $sce.trustAsResourceUrl(videoService.videoList[currentIndex].link);
		};


		vm.openPoll = function(){
			vm.showThePoll = true;
		}

		vm.closePoll = function(){
			vm.showThePoll = false;
		}
	}

	function videoService(){
		var service = this;

		service.videoList = [
			{title: "About Social Work", thumbnail:"social_work_1.jpg", link: "https://www.youtube.com/embed/aZkRdmgtgIM"},
			{title: "A Typical Day in Social Work", thumbnail:"social_work_2.jpg", link: "https://www.youtube.com/embed/eCEd1rNEM7k"},
			{title: "Challenges in Social Work", thumbnail:"social_work_3.jpg", link: "https://www.youtube.com/embed/-ML4CaMm6gk"},
			{title: "Perks in Social Work", thumbnail:"social_work_4.jpg", link: "https://www.youtube.com/embed/UucmbwZlFto"},
			{title: "Staying Current in Social Work", thumbnail:"social_work_5.jpg", link: "https://www.youtube.com/embed/vDXORdcDvhA"},
			{title: "Advice for Individuals interested in Social Work", thumbnail:"social_work_6.jpg", link: "https://www.youtube.com/embed/fd4uDf5lls4"},
		];
	}
})();
