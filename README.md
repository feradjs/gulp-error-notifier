# gulp-error-notifier
[![NPM version][npm-url]][npm-image]
Notify about errors from gulp plugins and streams via desktop notifications of [node-notifier](https://github.com/mikaelbr/node-notifier).

## Install
```shell
npm install --save-dev gulp-error-notifier
```

## Usage
```javascript
var gulp = require('gulp');
var errorNotifier = require('gulp-error-notifier');
var jade = require('gulp-jade');

gulp.src('./src/*.jade')
    .pipe(errorNotifier())
    .pipe(jade())
    .pipe(gulp.dest('./dist'));
```

## API

###  errorNotifier()
[Plumber](https://github.com/floatdrop/gulp-plumber) stream with [`notify`](#errornotifiernotifyerror) as [`errorHandler`](https://github.com/floatdrop/gulp-plumber#optionserrorhandler).

### errorNotifier.notify(error)
Logs `error` to console and displays `error` notification.
```javascript
var notify = require('gulp-error-notifier').notify;

notify(new Error('Something happened!'));
```

### errorNotifier.handleError(stream)
Notifies on `stream` `'error'` event and stops it from further executing.
```javascript
var gulp = require('gulp');
var errorNotifier = require('gulp-error-notifier')
var sass = require('gulp-sass');

gulp.src('./src/*.scss')
    .pipe(errorNotifier.handleError(sass()))
    .pipe(gulp.dest('./dist'));
```
## Examples
For detailed executable examples look at  [`examples/gulpfile.babel.js`](https://github.com/feradjs/gulp-error-notifier/blob/master/examples/gulpfile.babel.js).
```shell
cd examples
npm install
gulp --tasks
gulp example # run specific example
```

## License
[MIT License](https://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-error-notifier
[npm-image]: https://img.shields.io/npm/v/gulp-error-notifier.svg
