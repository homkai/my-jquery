/**
 * Created by Homkai on 2016/4/19.
 */
import $ from './core'
import Event from './event'

export default class Element {

    constructor(doms) {
        this.elements = doms
        if (this.size() === 1) {
            this.element = this.elements[0]
        }
    }

    each(fn) {
        for (let i in this.elements) {
            if (isNaN(i)) {
                continue
            }
            fn(this.elements[i], i)
        }
    }

    size() {
        return this.elements.length
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