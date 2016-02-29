var gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    fs = require('fs'),
    gutil = require('gulp-util'),
    gulpJsdoc2md = require('gulp-jsdoc-to-markdown'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    Server = require('karma').Server;


gulp.task('clean-lib', function () {
    return gulp.src('./lib', {
        read: false
    }).pipe(clean());
});

gulp.task('copy-lib', ['clean-lib'], function () {
    return gulp.src('./node_modules/Smooth.js/Smooth-0.1.7.min.js')
        .pipe(gulp.dest('./lib'));
});

gulp.task('clean-dist', function () {
    return gulp.src('./dist', {
        read: false
    }).pipe(clean());
});

gulp.task('minify', ['clean-dist'], function () {
    return gulp.src('./src/brewcalc.js')
        .pipe(rename('brewcalc.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('docs', function () {
    return gulp.src('./src/*.js')
        .pipe(concat('API.md'))
        .pipe(gulpJsdoc2md())
        .on('error', function (err) {
            gutil.log('jsdoc2md failed:', err.message)
        })
        .pipe(gulp.dest('./'));
});

gulp.task('build', ['minify', 'copy-lib', 'docs']);

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/brewcalc.js', ['minify']);
});

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function () {
        done();
    });
});

gulp.task('tdd', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, function () {
        done();
    }).start();
});

gulp.task('default', ['watch', 'tdd']);