angular.module('bootstrap.form.email', [])
    .directive('inputEmail', [function() {
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
                "<input type='email' ng-model='model' name='{{ name }}' id='{{ name }}' class='form-control' placeholder='{{ title }}'>" +
                "</div>"
        };
    }]);
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
angular.module('bootstrap.form.password', [])
    .directive('inputPassword', [function() {
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
                "<input type='password' ng-model='model' name='{{ name }}' id='{{ name }}' class='form-control' placeholder='{{ title }}'>" +
                "</div>"
        };
    }]);
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
angular.module('bootstrap.form', [
    'bootstrap.form.text',
    'bootstrap.form.email',
    'bootstrap.form.password',
    'bootstrap.form.file'
]);