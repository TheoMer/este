// @flow
import spawn from 'cross-spawn';
import gulp from 'gulp';

gulp.task('prettier', done => {
  spawn('npm', ['run', 'prettier'], { stdio: 'inherit' })
  .on('close', done);
});
