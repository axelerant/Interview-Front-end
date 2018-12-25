module.exports = function main(gulp) {
  return gulp.task('default', gulp.series(
    gulp.parallel('styles:lint', 'scripts:lint'),
    gulp.parallel('styles', 'scripts', 'svg')
  ));
};
