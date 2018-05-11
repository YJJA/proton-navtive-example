
'use strict'

process.env.NODE_ENV = 'development'
/*
  start script
  */
const fse = require('fs-extra')

const config = require('./config')
const watchServer = require('./utils/watchServer')
const runServer = require('./utils/runServer')

// start
const start = async () => {
  await fse.remove(config.dist)

  let serverpath = await watchServer()

  await runServer(serverpath)
}

start()
  .then(() => {
    console.log('server is running')
  })
  .catch(err => console.log(err))
