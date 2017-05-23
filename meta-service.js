/*!
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';

/* @ngInject */
export default function factory($compile, $location, $rootScope) {
  var service = {};
  var initialized = false;

  service.meta = {};

  service.set = function(meta, options) {
    options = options || {};
    var url = options.url || $location.url();
    service.meta[url] = meta;
    if(!initialized) {
      _initBrMeta();
      initialized = true;
    }
  };

  service.update = function(url, property, content) {
    if(typeof content === 'undefined') {
      property = url;
      content = property;
      url = $location.url();
    }
    var meta = service.meta[url] || {};
    meta[property] = content;
    service.set(meta, {url: url});
  };

  function _initBrMeta() {
    angular.element('head')
      .append($compile('<br-meta></br-meta>')($rootScope.$new(true)));
  }

  return service;
}
