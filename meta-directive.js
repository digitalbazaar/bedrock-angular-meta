/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([], function() {

'use strict';

function register(module) {
  module.directive('brMeta', factory);
}

/* @ngInject */
function factory() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: requirejs.toUrl('bedrock-angular-meta/meta-directive.html'),
    controller: Ctrl,
    controllerAs: '$ctrl'
  };

  /* @ngInject */
  function Ctrl($location, brMetaService) {
    var self = this;
    self.meta = brMetaService.meta;
    self.$location = $location;
  }
}

return register;

});
