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


  module.exports = function Build(options) {
      function Task() {
          var _this     = this;
          this.name     = options.name;
          this.paths    = options.paths;
          this._plugin  = options.plugin  || null;
          this._plugins = options.plugins || null;
          // this.before  = options.after  || null;
          // this.after   = options.before || null;

          if(options.type === 'array'){
            _.forEach(plugins, function (plugin, key) {  _this.plugins[key] = require(plugin);})
          } else {
            this.plugin = require(plugins);
          }
      };

      Task.prototype.watch = function(){
          gulp.watch(this.paths.all, [this.task]);
          return this;
        };
      Task.prototype.reload = function(){
          gulp.watch(this.paths.all, [this.task, $.livereload.reload]);
          return this;
        };
      Task.prototype.src = function(){
          gulp.watch(this.paths.all, [this.task, $.livereload.reload]);
          return this;
        };
      Task.prototype.task = function() {
          var stream = this.src();

          this.plugin &&( stream.pipe(this.plugin()) );

          if(this.plugins.length){
            _.forEach(this.plugins, function (plugin){
                stream.pipe(plugin());
              });
            }
          return stream.pipe(this.dest())
        };
    return new Task()
  };



})()






var coffee = {
  task: function(){
    return this.src()
      .pipe(this.plugin())
      .pipe(this.dest());
  },
  relaod: function(){
    gulp.watch(this.paths.all, this.task);
    return this;
  },
  watch: function(){

  },
  src: function(){
    return gulp.src(this.paths.all);
  },
  dest: function(){
    return gulp.dest(this.paths.build);
  },
  plugins: {
    coffee: require('gulp-coffee');
  },
  paths : {
    build: './build',
    all:   './**/*.coffee',
    dir:   './client'
  }
}

