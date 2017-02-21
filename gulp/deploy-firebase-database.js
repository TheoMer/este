import spawn from 'cross-spawn';
import gulp from 'gulp';

gulp.task('deploy-firebase-database', (done) => {
  spawn('firebase', ['deploy', '--only', 'database'], { stdio: 'inherit' })
  .on('close', done);
});
