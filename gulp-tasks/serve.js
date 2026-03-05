'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import browsersync from 'browser-sync';

// Middleware для перенаправления запросов без .html
const historyMiddleware = (req, res, next) => {
  // Если запрос не содержит точку (значит это не файл с расширением)
  if (!req.url.includes('.')) {
    // Для корневого запроса (главная страница)
    if (req.url === '/' || req.url === '') {
      req.url = '/index.html';
    }
    // Для всех остальных запросов без расширения
    else {
      req.url = req.url + '.html';
    }
  }
  next();
};

gulp.task('serve', () => {
  browsersync.init({
    server: {
      baseDir: './dist/',
      middleware: [historyMiddleware], // добавляем middleware
    },
    port: 4000,
    notify: true,
  });

  gulp.watch(paths.views.watch, gulp.parallel('views'));
  gulp.watch(paths.styles.watch, gulp.parallel('styles'));
  gulp.watch(paths.scripts.watch, gulp.parallel('scripts'));
  gulp.watch(paths.sprites.watch, gulp.parallel('sprites'));
  gulp.watch(paths.images.watch, gulp.parallel('images'));
  gulp.watch(paths.fonts.watch, gulp.parallel('fonts'));
  gulp.watch(paths.video.watch, gulp.parallel('video'));
});
