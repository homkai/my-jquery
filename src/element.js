/**
 * Created by Homkai on 2016/4/19.
 */
import $ from './core'
import Event from './event'

export default class Element {

    constructor(doms) {
        this.elements = [];
        for (let i = 0; i < doms.length; i ++) {
            this.elements[i] = this[i] = doms[i]
        }
        this.length = doms.length
        if (this.length === 1) {
            this.element = doms[0]
        }
    }

    each(fn) {
        this.elements.forEach(fn)
    }

    size() {
        return this.length
    }

    addClass(cls) {
        if (!cls) {
            return this;
        }
        if (!/^[\w-\s]+$/.test(cls)) {
            $.error('`cls` is not valid')
            return this
        }
        this.each(element => {
            cls.split(/\s+/).forEach(cls => {element.classList.add(cls)})
        })
    }

    on(type, selector, data, fn) {
    }

    one(type, data, fn) {

    }

    off(type, selector, fn) {

    }
}