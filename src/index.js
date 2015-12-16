import plumber from 'gulp-plumber'
import util from 'gulp-util'
import notifier from 'node-notifier'


function errorNotifier() {
	return plumber({ errorHandler: notify })
}

function notify(error) {
	util.log('[' + util.colors.red('ERROR') + ']', error.message)
	notifier.notify({ title: 'Error!', message: error.message })
}

function handleError(stream) {
	return stream.on('error', function(error) {
		notify(error)
		this.emit('end')
	})
}

module.exports = errorNotifier
module.exports.notify = notify
module.exports.handleError = handleError
