`var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');

// config
cfg = {
    css: {
        path: 'scss/**/*.scss',
        dest: 'builds/css'
    },
    js: {
        path: 'js/**/*.js',
        dest: 'builds/js'
    }
};

// JS related tasks
gulp.task('scripts', function() {
   gulp.src(cfg.js.path)
       .pipe(uglify())
       .pipe(gulp.dest(cfg.js.dest));
});

// SASS related tasks
gulp.task('sass', function() {
    gulp.src(cfg.css.path)
        .pipe(sass())
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest(cfg.css.dest))
        .pipe(livereload());
});

// magic watch :)
gulp.task('watch', function(){
    var server = livereload();

    gulp.watch(cfg.css.path, ['sass']);
    gulp.watch(cfg.js.path, ['scripts']);
});

gulp.task('default', ['scripts', 'sass', 'watch']);