'use strict'

const snapshot = require('snap-shot')
const { promisify } = require('util')
const { resolve } = require('path')

const fs = require('fs')

const metascraper = require('../../..')
const readFile = promisify(fs.readFile)

const url = 'https://www.youtube.com/watch?v=GDRd-BFTYIg'

it('youtube classic', async () => {
  const html = await readFile(resolve(__dirname, 'input.html'))
  const metadata = await metascraper({ html, url })
  snapshot(metadata)
})
