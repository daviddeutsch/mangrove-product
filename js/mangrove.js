var mangroveApp = angular.module("mangroveApp", ['ui.bootstrap', 'ui.scrollfix']);

function CollapseCtrl($scope) {
	$scope.isCollapsed = false;
}

var TabsCtrl = function ($scope) {
	$scope.navType = 'tabs';
};
