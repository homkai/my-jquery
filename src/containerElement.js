/**
 * Created by Homkai on 2016/4/22.
 */
import $ from './core'
import Element from './element'

export default class ContainerElement extends Element{

    text(text) {
        if (!text) {
            return this.element.textContent;
        }
        if (!$.isString(text)) {
            $.error('`text` must be a string');
        }
        this.element.textContent = text;
    }

    html(html) {

    }

}