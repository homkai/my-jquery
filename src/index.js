/**
 * Created by Homkai on 2016/4/18.
 */
import $ from './core'
import select from './select'

window.jQ = (arg1, arg2) => {
    if ($.isFunction(arg1)) {
        //return onDocReady(arg1)
    }
    if ($.isHTML(arg1)) {
        //return createJQEl(arg1, arg2)
    }
    // return a jQuery Element
    return select(arg1, arg2)
};

$.extend(jQ, $);