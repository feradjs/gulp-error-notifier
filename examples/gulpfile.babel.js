import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import errorNotifier, { handle } from 'gulp-error-notifier'
const _ = plugins()

setTimeout(() => console.log('done'), 5000)

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
		.pipe(_.jade())
		.pipe(gulp.dest('dist'))
})

gulp.task('sass', () => {
	gulp.src('src/*.scss')
		.pipe(_.sass())
		.pipe(gulp.dest('dist'))
})

gulp.task('sass-plumber', () => {
	gulp.src('src/*.scss')
		.pipe(_.plumber())
		.pipe(_.sass())
		.pipe(gulp.dest('dist'))
})

gulp.task('sass-log', () => {
	gulp.src('src/*.scss')
		.pipe(_.sass().on('error', _.sass.logError))
		.pipe(gulp.dest('dist'))
})

gulp.task('sass-notify', () => {
	gulp.src('src/*.scss')
		.pipe(handle(_.sass()))
		.pipe(gulp.dest('dist'))
})

gulp.task('sass-notify2', () => {
	gulp.src('src/*.scss')
		.pipe(errorNotifier())
		.pipe(_.sass())
		.pipe(gulp.dest('dist'))
})
