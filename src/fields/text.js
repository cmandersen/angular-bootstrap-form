angular.module('bootstrap.form.text', [])
    .directive('inputText', [function() {
        return {
            restrict: 'EA',
            transclude: true,
            replace: true,
            scope: {
                title: '@',
                name: '@',
                model: '='
            },
            template: "<div class='form-group'>" +
                "<label for='{{ name }}'>{{ title }}</label>" +
                "<input type='text' ng-model='model' name='{{ name }}' id='{{ name }}' class='form-control' placeholder='{{ title }}'>" +
                "</div>"
        };
    }]);