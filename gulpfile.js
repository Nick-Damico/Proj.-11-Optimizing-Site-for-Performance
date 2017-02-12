"use strict";
// Add require for
	//	gulp-concat
	//	gulp
	//	gulp-sourcemaps
	//	gulp-rename

gulp.task("concatScripts", function () {
	return gulp.src([
		'js/jquery.js',
		'js/fastclick.js',
		'js/foundation.js',
		'js/foundation.equalizer.js',
		'js/foundation.reveal.js',
		])
		.pipe(maps.init())
		.pipe(concat('scripts.js'))
		.pipe(maps.write('./'))
		.pipe(gulp.dest('js'));
});

gulp.task("minifyScripts",['concatCSS'], function () {
	return gulp.src("css/app.css")
			   .pipe(cssClean())
			   .pipe(rename('app.min.css'))
			   .pipe(gulp.dest('css'));
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
		.pipe(write('./'))
		.pipe(gulp.dest('css'));
});

