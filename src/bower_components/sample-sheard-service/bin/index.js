'use strict';!function() {
function a() {
var a = [],b = void 0,c = {event:{create:function(b) {return a = b},get:function() {return a},getTags:function() {
var b;return a.map(function(a) {return a.tag}).sort().filter(function(a) {
var c = a !== b;return b = a,c
})
}},tag:{set:function(a) {return b = a},get:function() {return b},filter:function() {return b ? {tag:'' + b} : {}},clear:function() {return b = void 0}}};return c
}angular.module("app.component.events", []).factory("app.component.events.sheard.service", a),a.$inject = []
}();
