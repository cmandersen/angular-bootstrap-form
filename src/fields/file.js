angular.module('bootstrap.form.file', [])
    .directive('inputFile', [function() {
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
                "<input type='file' ng-model='model' name='{{ name }}' id='{{ name }}'>" +
                "</div>"
        };
    }]);