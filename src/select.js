/**
 * Created by Homkai on 2016/4/22.
 */
import $ from './core'
import Element from './element'
import InputElement from './inputElement'
import ContainerElement from './containerElement'

export default function (selector, context) {
    if (document.querySelectorAll) {
        let context = context ? document.querySelector(context) : document
        let doms =  context.querySelectorAll(selector)
        if (doms.length === 1) {
            if ($.isString(doms[0].value)) {
                return new InputElement(doms);
            }
            else {
                return new ContainerElement(doms);
            }
        }
        return new Element(doms);
    }
    else {
        // TODO
    }
}