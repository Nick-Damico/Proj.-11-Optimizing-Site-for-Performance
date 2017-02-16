"use strict";
// Add require for
  var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
  cssClean = require('gulp-clean-css'),
    rename = require('gulp-rename'),
      maps = require('gulp-sourcemaps'),
       del = require('del'),
     image = require('gulp-image'),
  imagemin = require('gulp-imagemin');


gulp.task("concatScripts", function () {
	return gulp.src([
		'js/jquery.js',
		'js/fastclick.js',
		'js/foundation.js',
		'js/foundation.equalizer.js',
		'js/foundation.reveal.js',
		'js/scripts.js'
		])
		.pipe(maps.init())
		.pipe(concat('app.js'))
		.pipe(maps.write('./'))
		.pipe(gulp.dest('js'));
});

gulp.task("minifyScripts",['concatScripts'], function () {
	return gulp.src("js/app.js")
			   .pipe(uglify())
			   .pipe(rename('app.min.js'))
			   .pipe(gulp.dest('js'));
});

gulp.task("concatCSS", function () {
	return gulp.src([
		'css/normalize.css',
		'css/foundation.css',
		'css/basics.css',
		'css/menu.css',
		'css/hero.css',
		'css/photo-grid.css',
		'css/modals.css',
		'css/footer.css'
		])
		.pipe(maps.init())
		.pipe(concat('app.css'))
		.pipe(maps.write('./'))
		.pipe(gulp.dest('css'));
});

gulp.task("minifyCss", ["concatCSS"], function () {
	return gulp.src("css/app.css")
			   .pipe(cssClean())
			   .pipe(rename('app.min.css'))
			   .pipe(gulp.dest('css'));
});

gulp.task('jpgMin', function () {
	return gulp.src('img/photos/photo2.jpg')
			   .pipe(imagemin({quality: 'low'}))
			   .pipe(gulp.dest('images'));
});
//  http://picresize.com/b58a3800a3f27f 
 
gulp.task('image', function () {
  gulp.src('img/photos/*.jpg')
    .pipe(image({
      jpegRecompress: true,
      jpegoptim: false,
      mozjpeg: false,
      concurrent: 12}))
    .pipe(gulp.dest('./img/images'));
});

gulp.task("clean", function () {
	del(['dist', 'css/app*.css*', 'js/app*.js*']);
});
gulp.task("build", ['minifyCss', 'minifyScripts', 'image']);
gulp.task("dist", ['minifyCss', 'minifyScripts', 'image'], function () {
	return gulp.src(["css/app.min.css", "js/app.min.js", "index.html", "img/**"], { base: './'})
			   .pipe(gulp.dest('dist'));
});

gulp.task("default", ["build"]);
