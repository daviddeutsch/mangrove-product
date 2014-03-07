
$( document ).ready(function() {
	$(window).scroll(function(){
		var pos = $(window).scrollTop();

		$('.jumbotron').css("height", 400-(pos)+"px");
		$('.jumbotron img').css("margin-top", 24-((pos+24)/8)+"px");
		$('.jumbotron h3').css("margin-top", "-"+(pos/4)+"px");

		if ( pos > 100 ) {
			$('header h1').fadeOut();
		} else if ( pos < 100 ) {
			$('header h1').fadeIn();
		}

		if ( pos > 240 ) {
			if ( pos > 1000 ) {
				$('body').css("background-position", "0 "+(pos/14)+"px");
			} else {
				$('body').css("background-position", "0 0");
			}
		} else if ( pos < 240 ) {
			$('body').css("background-position", "0 -"+(pos/4)+"px");
		}
	});
});

//$('figure').slideUp();

var mangroveApp = angular.module("mangroveApp", ['ui.bootstrap', 'ui.scrollfix'])
	.config(
		['$routeProvider', '$locationProvider',
		function( $routeProvider, $locationProvider ) {
			$locationProvider
				.html5Mode(true)
				.hashPrefix('!');
		}
		]
	);

function CollapseCtrl($scope) {
	$scope.isCollapsed = false;
}


mangroveApp
	.controller('CollapseCtrl',
	['$scope',
	function($scope)
	{
		$scope.isCollapsed = false;
	}
	]
);

mangroveApp
	.controller('TabsCtrl',
	['$scope',
	function($scope)
	{
		$scope.choose = function(n) {
			$('#'+n).slideDown().parent().find('figure[id!="'+n+'"]').slideUp();
		}
	}
	]
);

mangroveApp
	.controller('UserExplanationCtrl',
	['$scope',
	function($scope)
	{
		$scope.selected = 'install-less';
	}
	]
);

mangroveApp
	.controller('SoftwareDevExplanationCtrl',
		['$scope',
			function($scope)
			{
				$scope.selected = 'distributed';
			}
		]
	);

mangroveApp
	.controller('ScrollCtrl',
	['$scope', '$location', '$anchorScroll',
	function($scope, $location, $anchorScroll)
	{
		$scope.scrollTo = function(id) {
			$location.hash(id);
			$anchorScroll();
			$('html, body').animate({scrollTop: '-=80px'}, 800, 'easeOutExpo');
		}
	}
	]
);

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
