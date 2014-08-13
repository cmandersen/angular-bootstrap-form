angular.module('bootstrap.form', [])
    .directive('inputText', [function() {
        return {
            restrict: 'EA',
            transclude: true,
            replace: true,
            scope: {
                title: '@',
                name: '@'
            },
            template: "<div class='form-group'>" +
                "<label for='{{ name }}'>{{ title }}</label>" +
                "<input type='text' name='{{ name }}' id='{{ name }}' class='form-control' placeholder='{{ title }}'>" +
                "</div>"
        };
    }]);