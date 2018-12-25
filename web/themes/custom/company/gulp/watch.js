module.exports = function watch(gulp, config, bs) {
  gulp.task('watch', () => {
    bs.init(config.browserSync);

    gulp.watch(
      [config.styles.source, config.scripts.source],
      gulp.series(
        gulp.parallel('styles:lint', 'scripts:lint'),
        gulp.parallel('styles', 'scripts')
      )
    );
  });
};
