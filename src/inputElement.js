/**
 * Created by Homkai on 2016/4/22.
 */
import $ from './core'
import Element from './element'

export default class InputElement extends Element{

    val(text) {
        if (!text) {
            return this.element.value;
        }
        if (!$.isString(text)) {
            $.error('`text` must be a string');
        }
        this.element.value = text;
    }

    disabled(isDisabled) {

    }

}