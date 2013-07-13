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
				$http.get(attrs.path).success( function( svg ) {
					element[0].outerHTML = svg;
				});
			}

		}
	}
});
