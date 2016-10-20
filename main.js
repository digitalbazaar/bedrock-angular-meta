/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([
  'angular',
  './meta-directive',
  './meta-service'
], function(angular) {

'use strict';

var module = angular.module('bedrock.meta', []);

Array.prototype.slice.call(arguments, 1).forEach(function(register) {
  register(module);
});

});
