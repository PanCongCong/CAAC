angular.module('pc.template', []).directive('template',[function(){
    return {
        restrict: 'EA',
        template:'<tr>',
        template: '<div class="page-list clearfix">' +
        '<ul class="pagination" ng-show="conf.totalItems > 0">' +
        '<li ng-class="{disabled: conf.currentPage == 1}" ng-click="prevPage()"><span>&laquo;</span></li>' +
        '<li ng-repeat="item in pageList track by $index" ng-class="{active: item == conf.currentPage, separate: item == \'...\'}" ' +
        'ng-click="changeCurrentPage(item)">' +
        '<span>{{ item }}</span>' +
        '</li>' +
        '<li ng-class="{disabled: conf.currentPage == conf.numberOfPages}" ng-click="nextPage()"><span>&raquo;</span></li>' +
        '</ul>' +
        '<div class="page-total" ng-show="conf.totalItems > 0">' +
        '第<input type="text" ng-model="jumpPageNum"  ng-keyup="jumpToPage($event)"/>页 ' +
        '每页<select ng-model="conf.itemsPerPage" ng-options="option for option in conf.perPageOptions " ng-change="changeItemsPerPage()"></select>' +
        '/共<strong>{{ conf.totalItems }}</strong>条' +
        '</div>' +
        '<div class="no-items" ng-show="conf.totalItems <= 0">暂无数据</div>' +
        '</div>',
        replace: true,
        scope: {
            conf: '='
        },
        link: function(scope, element, attrs){

        }
    };
}]);