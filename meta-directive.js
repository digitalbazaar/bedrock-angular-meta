/*!
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
/* @ngInject */
export default function factory() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'bedrock-angular-meta/meta-directive.html',
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
