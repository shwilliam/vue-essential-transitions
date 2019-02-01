var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify', () => {
  return gulp.src('src/*.css')
    .pipe(concat('vue-essential-transitions.min.css'))
    .pipe(cleanCSS())  // IE 10+ compatibility
    .pipe(gulp.dest('dist'));
});
