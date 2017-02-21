import spawn from 'cross-spawn';
import gulp from 'gulp';

gulp.task('jest', (done) => {
  spawn('npm', ['run', 'jest'], { stdio: 'inherit' })
  .on('close', done);
});
