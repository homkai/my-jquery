/**
 * Created by Homkai on 2016/4/18.
 */

const regHTML = /^\s*(<([\w-]+)(\s[^>]*)?>[\s\S]*?<\/\2>|<([\w-]+)(\s[^>]*)?>)\s*$/

function isHTML(html) {
    return regHTML.test(html)
}

function isType(test, type) {
    return Object.prototype.toString.call(test) === `[object ${type}]`;
}

function isFunction(test) {
    return isType(test, 'Function')
}

function isString(test) {
    return isType(test, 'String')
}

function isBoolean(test) {
    return isType(test, 'Boolean')
}

function isArray(test) {
    return Array.isArray(test)
}

function isPlainObject(test) {
    return isType(test, 'Object')
}

function extend(target, obj1, obj2) {
    let objList;
    let isDeep = target === true;
    if (isBoolean(target)) {
        target = obj1;
        objList = Array.prototype.slice.call(arguments, 0).slice(2);
    }
    else {
        objList = Array.prototype.slice.call(arguments, 0).slice(1);
    }
    objList.forEach(function (obj) {
        for (let i in obj) {
            if (isDeep && isPlainObject(target[i])) {
                extend(isDeep, target[i], obj[i]);
            }
            else {
                target[i] = obj[i];
            }
        }
    });
    return target;
}

function error(message) {
    console.error && console.error('[jQ Error]', message)
}

export default {
    isHTML,
    isFunction,
    isString,
    isBoolean,
    isArray,
    isPlainObject,
    extend,
    error
}