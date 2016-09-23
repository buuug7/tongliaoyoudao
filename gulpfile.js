/**
 * Created by buuug7 on 2016/9/23.
 */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', function () {
  gulp.src([
      'skin/images/aboutbanner.png',
    'skin/images/banner420.png',
  ])
      .pipe(imagemin({
        progressive: true,
        interlaced: true,
        verbose:true,
        quality: '65-80'
      }))
      .pipe(gulp.dest('skin/images2'));
});