angular.module('bootstrap.form.checkbox', [])
    .directive('inputCheckbox', [function() {
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
                "<div class='checkboxes' ng-transclude></div>" +
                "</div>"
        };
    }])
    .directive('checkbox', [function() {
        return {
            restrict: 'EA',
            require: '^inputCheckbox',
            scope: {
                value: "@"
            },
            template: "<label class='checkbox-inline'>" +
                "<input type='checkbox' ng-model='model[value]' name='{{ name }}[{{ value }}]' id='{{ name }}[{{ value }}]'> {{ title }}" +
                "</label>"
        };
    }]);
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
angular.module('bootstrap.form', [
    'bootstrap.form.text',
    'bootstrap.form.email',
    'bootstrap.form.password',
    'bootstrap.form.file',
    'bootstrap.form.textarea',
    'bootstrap.form.checkbox'
]);