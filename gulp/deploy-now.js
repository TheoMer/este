// @flow
import spawn from 'cross-spawn';
import gulp from 'gulp';

gulp.task('deploy-now', ['deploy-firebase-database'], done => {
  const sha = spawn.childProcess.execSync('git rev-parse HEAD').toString().trim();
  spawn('now', ['-e', 'NODE_ENV=production', '-e', `appVersion=${sha}`], {
    stdio: 'inherit',
  })
  .on('close', done);
});
