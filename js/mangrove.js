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
