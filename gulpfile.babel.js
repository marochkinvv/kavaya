'use strict';

import gulp from 'gulp';

const requireDir = require('require-dir'),
  paths = {
    views: {
      src: ['./src/views/index.pug', './src/views/pages/*.pug'],
      dist: './dist/',
      watch: ['./src/blocks/**/*.pug', './src/views/**/*.pug'],
    },
    styles: {
      src: './src/styles/main.{scss,sass}',
      dist: './dist/styles/',
      watch: ['./src/blocks/**/*.{scss,sass}', './src/styles/**/*.{scss,sass}'],
    },
    scripts: {
      src: './src/js/index.js',
      dist: './dist/js/',
      watch: ['./src/blocks/**/*.js', './src/js/**/*.js'],
    },
    images: {
      src: ['./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}', '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}'],
      dist: './dist/img/',
      watch: './src/img/**/*.{jpg,jpeg,png,gif,svg}',
    },
    video: {
      // новая секция
      src: './src/img/**/*.{mp4,webm,ogv,mov}',
      dist: './dist/img/',
      watch: './src/img/**/*.{mp4,webm,ogv,mov}',
    },
    sprites: {
      src: './src/img/svg/*.svg',
      dist: './dist/img/sprites/',
      watch: './src/img/svg/*.svg',
    },
    fonts: {
      src: './src/fonts/**/*.{woff,woff2}',
      dist: './dist/fonts/',
      watch: './src/fonts/**/*.{woff,woff2}',
    },
    favicons: {
      src: './src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
      dist: './dist/img/favicons/',
    },
    gzip: {
      src: './src/.htaccess',
      dist: './dist/',
    },
  };

requireDir('./gulp-tasks/');

export { paths };

export const development = gulp.series(
  'clean',
  gulp.parallel(
    'views',
    'styles',
    'scripts',
    'images',
    'webp',
    'sprites',
    'fonts',
    'favicons',
    'video', // без кавычек? Нет, с кавычками - это имя задачи
  ),
  gulp.parallel('serve'),
);

export const prod = gulp.series(
  'clean',
  gulp.parallel(
    'views',
    'styles',
    'scripts',
    'images',
    'webp',
    'sprites',
    'fonts',
    'favicons',
    'gzip',
    'video', // и здесь тоже
  ),
);

export default development;
