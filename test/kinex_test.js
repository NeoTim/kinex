/*
 * kinex
 * https://github.com/joelcoxokc/kinex
 *
 * Copyright (c) 2015 joelcoxokc
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var kinex = require('../lib/kinex.js');

describe('kinex', function(){
    it('is defined', function(){
      kinex.should.be.a('function');
    });

});
