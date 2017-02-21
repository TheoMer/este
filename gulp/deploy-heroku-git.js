import spawn from 'cross-spawn';
import gulp from 'gulp';

gulp.task('deploy-heroku-git', (done) => {
  spawn('git', ['push', 'heroku', 'master'], { stdio: 'inherit' })
  .on('close', done);
});
