const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

exports.default = defaultTask

function defaultTask(cb) {
	// place code for your default task here
	cb();
}

function styles() {
	return gulp.src('./src/css/**/*.css')
	.pipe(cleanCSS({
		level: 2
	}))
	.pipe(gulp.dest('./dist/css'))
}
gulp.task('styles', styles);

gulp.task('htmlmin', function () {
	return gulp.src('./src/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('./dist/'))
});

gulp.task('fonts', function () {
	return gulp.src('./src/fonts/**/*')
		.pipe(gulp.dest('./dist/fonts'))
});

gulp.task('tinypng', function (done) {
	gulp.src('./src/img/**/*.{png,jpg,jpeg}')
		.pipe(tinypng({
			key: 'weC2ndIqs6mmIt5HNx9axrZdoLnH77Qx',
		}))
		.pipe(gulp.dest('dist/img/'));
		done();
});

function js() {
	return gulp.src('./src/js/*.js')
	.pipe(gulp.dest('./dist/js'))
}
gulp.task('js', js);