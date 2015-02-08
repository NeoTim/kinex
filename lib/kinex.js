(function(){


  /*
   * kinex
   * https://github.com/joelcoxokc/kinex
   *
   * Copyright (c) 2015 joelcoxokc
   * Licensed under the MIT license.
   */

  'use strict';

      var gulp = require('gulp');
      var $    = require('gulp-load-plugins');
      var bwrc = require('./.bowerrc'       );
      var pkg  = require('./package.json'   );
      var bwr  = require('./bower.json'     );
      var _f   = require('fs-utils'         );
      var _    = require('lodash'           );


      var modules = require('./Modules.js');

  module.exports = function kinex() {

    this.paths = require('./kinex.json');

    this.mods = modules;

  };

})()

