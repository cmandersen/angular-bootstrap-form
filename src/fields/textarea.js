angular.module('bootstrap.form.textarea', [])
    .directive('inputTextarea', [function() {
        return {
            restrict: 'EA',
            transclude: true,
            replace: true,
            scope: {
                title: '@',
                name: '@',
                rows: '@',
                model: '='
            },
            template: "<div class='form-group'>" +
                "<label for='{{ name }}'>{{ title }}</label>" +
                "<textarea ng-model='model' name='{{ name }}' id='{{ name }}' rows='{{ rows }}' class='form-control' placeholder='{{ title }}'></textarea>" +
                "</div>"
        };
    }]);