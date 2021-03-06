var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

gulp.task('jsmin', function () {
    gulp.src('scripts/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('minified_scripts'));
});
