'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import debug from 'gulp-debug';
import browsersync from 'browser-sync';
import newer from 'gulp-newer'; // для инкрементальной сборки (опционально)
import gulpif from 'gulp-if';
import yargs from 'yargs';

const argv = yargs.argv,
  production = !!argv.production;

gulp.task('video', () => {
  return gulp
    .src(paths.video.src)
    .pipe(newer(paths.video.dist)) // копирует только новые/изменённые файлы
    .pipe(gulp.dest(paths.video.dist))
    .pipe(
      debug({
        title: 'Video files copied:',
      }),
    )
    .pipe(browsersync.stream());
});
