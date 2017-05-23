/*!
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import MetaDirective from './meta-directive.js';
import MetaService from './meta-service.js';

var module = angular.module('bedrock.meta', []);

module.directive('brMeta', MetaDirective);
module.service('brMetaService', MetaService);
