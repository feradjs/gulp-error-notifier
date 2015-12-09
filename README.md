# gulp-error-notifier
Notify about errors from gulp plugins and streams with [node-notifier](https://github.com/mikaelbr/node-notifier).

## Install
```shell
npm install --save-dev gulp-error-notifier
```

## Usage
```javascript
var gulp = require('gulp');
var errorNotifier = require('gulp-error-notifier');
var jade = require('gulp-jade');

gulp.src('./jade/**/*.jade')
	.pipe(errorNotifier())
	.pipe(jade())
	.pipe(gulp.dest('./dist'));
```

## API

###  errorNotifier()
Returns [plumbed](https://github.com/floatdrop/gulp-plumber) stream with [`notify`](#errornotifiernotifyerror) as [`errorHandler`](https://github.com/floatdrop/gulp-plumber#optionserrorhandler).

### errorNotifier.notify(error)
Logs `error` to console and displays `error` notification.
```javascript
var errorNotifier = require('gulp-error-notifier');
var fs = require('fs');

try {
	var data = fs.readFileSync('data', 'utf-8');
} catch (error) {
	errorNotifier.notify(error);
}
```

### errorNotifier.handle(stream)
Notifies on `stream` `'error'` event and stops it from further executing.
```javascript
var gulp = require('gulp');
var errorNotifier = require('gulp-error-notifier')
var sass = require('gulp-sass');

gulp.src('./sass/**/*.scss')
	.pipe(errorNotifier.handle(sass()))
	.pipe(gulp.dest('./style.css'));
```
## Examples
For detailed executable examples look at  [`examples/gulpfile.js`](https://github.com/feradjs/gulp-error-notifier/blob/master/examples/gulpfile.js).
```shell
cd examples
npm install
gulp --tasks
gulp example # run specific example
```

## License
[MIT License](https://en.wikipedia.org/wiki/MIT_License)
