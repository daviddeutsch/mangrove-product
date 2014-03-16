
$( document ).ready(function() {
	$(window).scroll(function(){
		var pos = $(window).scrollTop();

		if ( pos < 500 ) {
			$('.jumbotron').css("height", 300-(pos/2)+"px");
			$('.jumbotron .container').css("margin-top", 60-((pos+24)/2)+"px");
		}

		if ( pos > 100 ) {
			$('header h1').fadeOut();
		} else if ( pos < 100 ) {
			$('header h1').fadeIn();
		}

		if ( pos > 1200 ) {
			$('body').css("background-position", "0 "+(pos/14)+"px");
		} else if ( pos < 940 ) {
			$('body').css("background-position", "0 -"+(pos/4)+"px");
		}
	});
});

//$('figure').slideUp();

var mangroveApp = angular.module("mangroveApp", ['ui.bootstrap', 'ui.scrollfix'])
	.config(
		['$locationProvider',
		function( $locationProvider ) {
			$locationProvider.html5Mode(false).hashPrefix('!');;
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
	.directive('svgpoly', function ($http, $location) {
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

mangroveApp
	.directive('scrollOnClick', function($location) {
	return {
		restrict: 'A',
		link: function(scope, $elm, attrs) {
			var settings = angular.extend({
				href: angular.element(),
				offset: 0,
				duration: 800,
				easing: 'easeOutExpo'
			}, attrs);

			settings.href = settings.href.replace('#!/','');

			$elm.on('click', function(e) {
				//e.preventDefault();

				var scroll;

				if (settings.href) {
					scroll = $('#'+settings.href).offset().top + Number(settings.offset);

					$location.hash(settings.href);
				} else {
					scroll = $elm.offset().top + Number(settings.offset);
				}

				$('html, body').animate(
					{scrollTop: scroll},
					settings.duration,
					settings.easing
				);
			});
		}
	}
});
