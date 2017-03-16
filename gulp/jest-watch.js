// @flow
import spawn from 'cross-spawn';
import gulp from 'gulp';

gulp.task('jest-watch', done => {
  spawn('npm', ['run', 'jest:watch'], { stdio: 'inherit' })
  .on('close', done);
});
