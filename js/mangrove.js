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

mangroveApp.directive('svgpoly', function ($http, $templateCache) {
	var getSVG = function (path) {
		templateLoader = $http.get(path, {cache: $templateCache});
	};

	return {
		restrict: 'E',
		replace: true,
		link: function ( scope, element, attrs ) {
			element.html(getSVG(attrs.path));
		},
		scope: {
			content: '='
		}
	}
});
