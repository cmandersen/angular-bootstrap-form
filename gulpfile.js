var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


// The location of our source files
var paths = {
    scripts: [
        'src/fields/*.js',
        'src/fields.js'
    ]
};

// Where the output will go
var destPath = {
    scripts: "dist"
};

gulp.task('js', function() {
    return gulp.src(paths.scripts)
        .pipe(concat('angular-bootstrap-form.js'))
        .pipe(gulp.dest(destPath.scripts));
});

gulp.task('js-min', function() {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('angular-bootstrap-form.min.js'))
        .pipe(gulp.dest(destPath.scripts));
});

// What tasks does running gulp trigger?
// command: gulp
gulp.task('default', ['js', 'js-min']);
