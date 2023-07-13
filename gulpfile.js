const gulp = require("gulp");

gulp.task("ejs", function () {
  return gulp.src("src/views/**/*.ejs").pipe(gulp.dest("build/views"));
});

gulp.task("public", function () {
  return gulp.src("src/public/**/*").pipe(gulp.dest("build/public"));
});

gulp.task('build', gulp.series('ejs', 'public'));

gulp.task('default', gulp.series('build'));

gulp.task('default', gulp.series('build'));
