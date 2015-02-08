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
      var Task = require('./build.js'       );


  module.exports = function Modules() {
    this._mods    = {};
    this._plugins = {};
    this.modQueue = {};
  };
  Modules.prototype.add = function(name, nodeModule, paths) {
    name = _.camelCase(name);

    var type = Array.isArray(nodeModule) ? 'array' : 'string';

    this
      ._mods[name] = new Task({
        name       : name,
        plugin     : type === 'string' ? nodeModule : null,
        plugins    : type === 'array'  ? nodeModule : null,
        pluginType : type
      })
  }

})()