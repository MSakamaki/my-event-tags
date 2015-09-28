'use strict';

describe('Directive: sample directive', function BasedTeseSwite() {

  // // load the directive's module
  beforeEach(module('ngTemplates'));
  beforeEach(module(function($provide) {
    angular.module('app.component.events', [])
        .factory('app.component.events.sheard.service', ()=> {
          return {
            event:{
              create: jasmine.createSpy(),
              get: jasmine.createSpy(),
              getTags: jasmine.createSpy().and.callFake(()=> ['fizz','bazz']),
            },
            tag:{
              set: jasmine.createSpy(),
              get: jasmine.createSpy(),
              filter: jasmine.createSpy(),
              clear: jasmine.createSpy(),
            },
          };
        });
  }));

  beforeEach(module('app.component.events.directive'));

  var element;
  var scope;
  var $rootScope;
  var $compile;
  var directiveHTML = '<event-tags></event-tags>';
  var resultHTML =
`<div class="app-directive-sample-container">
 <span class="app-sample-main">My Tag Directive</span>
 <!-- ngRepeat: tag in getTag() --><ul ng-repeat="tag in getTag()" class="ng-scope">
   <li ng-click="setTag(tag)" class="ng-binding">fizz</li>
 </ul><!-- end ngRepeat: tag in getTag() --><ul ng-repeat="tag in getTag()" class="ng-scope">
   <li ng-click="setTag(tag)" class="ng-binding">bazz</li>
 </ul><!-- end ngRepeat: tag in getTag() -->
 <button ng-click="clearTag()">tag clear</button>
</div>`;

  beforeEach(inject([
    '$rootScope', '$compile', '$templateCache',
    function InjectInitialize(_$rootScope_, _$compile_, $templateCache) {
      $rootScope = _$rootScope_;
      scope = _$rootScope_.$new();
      $compile = _$compile_;
    },]));

  it('check...', function MakeHtmlElement() {
    element = $compile(directiveHTML)(scope);
    scope.$digest();
    expect(element.html()).toBe(resultHTML);
  });
});
