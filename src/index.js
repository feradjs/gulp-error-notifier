import plumber from 'gulp-plumber'
import util from 'gulp-util'
import notifier from 'node-notifier'

export default function() {
	return plumber({ errorHandler: notify })
}

export function notify(error) {
	util.log('[' + util.colors.red('ERROR') + ']', error.message)
	notifier.notify({ title: 'Error!', message: error.message })
}

export function handleError(stream) {
	return stream.on('error', function(error) {
		notify(error)
		this.emit('end')
	})
}
