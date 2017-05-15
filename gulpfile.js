var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    rename      = require('gulp-rename'),
    sourcemaps  = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function(){
    gulp.src('./sass/sculptor.sass')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css/'));

    gulp.src('./sass/sculptor.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css/'))
});

gulp.task('watch', ['sass', 'browser-sync'], function(){
    gulp.watch([
        './sass/*.sass',
        './sass/*/*.sass',
        './sass/*/*.scss'
    ], ['sass']);

    gulp.watch([
        './*.html',
        './css/*.css',
        './css/*.min.css'
    ], browserSync.reload)
});

