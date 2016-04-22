/**
 * Created by homka on 2016/4/22.
 */

/**
 * extend
 */
var a = {x: {y: 1, z: 2}}; var c = $.extend({}, a); var b = {x: {y: 2}}; jQ.extend(true, c, b);

var a = {x: {y: 1, z: 2}}; var c = $.extend({}, a); var b = {x: {y: 2}}; jQ.extend(false, c, b);

var a = {x: {y: 1, z: 2}}; var c = $.extend({}, a); var b = {x: {y: 2}}; jQ.extend(c, b);

var a = {x: {y: 1, z: 2}}; var c = $.extend({}, a); var b = {x: {y: 2}}; jQ.extend(true, c, b, {a: 3});