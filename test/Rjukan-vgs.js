'use strict'

const tap = require('tap')
const isFara = require('../index')
var options = {
  skoleid: 3660,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isFara(options), true, 'Rjukan vgs returns true from 3960 Stathelle')
