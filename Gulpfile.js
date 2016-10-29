var gulp = require('gulp'),
  connect = require('gulp-connect');
  // sass = require('gulp-sass');

gulp.task('connect', function() {
  connect.server({
    root: './',
    port : '1881',
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src(['./**/*.html'])
    .pipe(connect.reload());
});

// gulp.task('sass', function() {
//   return gulp.src('sass/*.scss')
//       .pipe(sass({
//           outputStyle: 'compressed',
//           includePaths: ['node_modules/susy/sass']
//       }).on('error', sass.logError))
//       .pipe(gulp.dest('dist/css'));
// });

gulp.task('watch', function () {
  gulp.watch(['./**/*.html','js/main.js', 'js/plugins.js', 'css/main.css'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);