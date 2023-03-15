import getConfig from '../config'

const config = getConfig()

/**
 * This is a service that is used to log messages to the console in development mode.
 */
const LogService = Object.freeze({
  print: (...args: any[]) => {
    if (config.mode === 'development') {
      console.log('🐱 cat:', ...args)
    }
  }
})

export default LogService
