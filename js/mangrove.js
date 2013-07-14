
$( document ).ready(function() {
	$(window).scroll(function(){

		var pos = $(window).scrollTop();


		$('.jumbotron').css("height", 400-(pos)+"px");
		$('.jumbotron img').css("margin-top", 24-((pos+24)/8)+"px");
		$('.jumbotron h3').css("margin-top", "-"+(pos/4)+"px");

		if ( pos > 120 ) {
			$('header h3').fadeOut();

		} else if ( pos < 120 ) {
			$('header h3').fadeIn();
		}

		if ( pos > 240 ) {
			if ( pos > 1000 ) {
				$('body').css("background-position", "0 "+(300+(pos/12))+"px");
			} else {
				$('body').css("background-position", "0 0");
			}
		} else if ( pos < 240 ) {
			$('body').css("background-position", "0 -"+(pos/4)+"px");
		}
	});
});



var mangroveApp = angular.module("mangroveApp", ['ui.bootstrap', 'ui.scrollfix']);

function CollapseCtrl($scope) {
	$scope.isCollapsed = false;
}

function TabsCtrl($scope) {
	$scope.tabs = [];

	$scope.choose = function(n)
	{
		this.tabs[n].select();
	}
}

mangroveApp.directive('svgpoly', function ($http, $location) {
	return {
		restrict: 'E',
		link: function ( scope, element, attrs ) {
			url = $location.absUrl();
			if ( !Modernizr.inlinesvg || url.indexOf("file://") !== -1 ) {
				element[0].outerHTML = '<img src="'+attrs.path.replace('svg','png')+'">';
			} else {
				//element[0].outerHTML = '<span ng-include="\''+attrs.path+'\'"></span>';
				$http.get(attrs.path).success( function( svg ) {
					element[0].outerHTML = svg;
				});
			}

		}
	}
});
