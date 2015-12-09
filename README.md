# gulp-error-notifier
Notify about errors from gulp plugins and streams with [node-notifier](https://github.com/mikaelbr/node-notifier)

## Install
```shell
npm install --save-dev gulp-error-notifier
```

## Usage
```javascript
var gulp = require('gulp');
var errorNotifier = require('gulp-error-notifier');
var jade = require('gulp-jade');

gulp.src('./src/**/*.jade')
	.pipe(errorNotifier())
	.pipe(jade())
	.pipe(gulp.dest('./dist'));
```

## API

## License
[MIT License](https://en.wikipedia.org/wiki/MIT_License)
