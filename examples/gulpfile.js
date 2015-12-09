import gulp from 'gulp'
import _ from 'gulp-load-plugins'
import errorNotifier from 'gulp-error-notifier'

gulp.task('jade', () => {
	gulp.src('src/*.jade')
		.pipe(_.jade())
		.pipe(gulp.dest('dist'))
})

gulp.task('jade-plumber', () => {
	gulp.src('src/*.jade')
		.pipe(_.plumber())
		.pipe(_.jade())
		.pipe(gulp.dest('dist'))
})

gulp.task('jade-notify', () => {
	gulp.src('src/*.jade')
		.pipe(errorNotifier())
		.pipe(gulp.dest('dist'))
})

gulp.task('sass', () => {

})

gulp.task('sass-plumber', () => {

})

gulp.task('sass-notify', () => {

})
