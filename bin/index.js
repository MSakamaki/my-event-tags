"use strict";!function(){function a(a){function b(b){b.setTag=function(b){return a.tag.set(b)},b.clearTag=function(b){return a.tag.clear()},b.getTag=function(){return a.event.getTags()}}return{restrict:"E",replace:!1,templateUrl:"tag.directive.html",scope:{},link:b}}angular.module("app.component.events.directive",["app.component.events"]).directive("eventTags",a),a.$inject=["app.component.events.sheard.service"]}(),angular.module("app.directive.sample").run(["$templateCache",function(a){a.put("tag.directive.html",'<div class="app-directive-sample-container">\n <span class="app-sample-main">My Tag Directive</span>\n <ul ng-repeat="tag in getTag()">\n   <li ng-click="setTag(tag)">{{tag}}</li>\n </ul>\n <button ng-click="clearTag()">tag clear</button>\n</div>')}]);