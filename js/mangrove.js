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

mangroveApp.directive('svgpoly', function ($http) {
	var getSVG = function (path) {
		return $http.get(path);
	};

	return {
		restrict: 'E',
		link: function ( scope, element, attrs ) {
			getSVG(attrs.path).success( function( svg ) {
				element[0].outerHTML = svg;
			});
		}
	}
});
