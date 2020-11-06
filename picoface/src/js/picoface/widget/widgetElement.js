'use strict';
import { AbstractWidget } from './abstractWidget.js';
import { i18n } from '../i18n/current.js';
import { flatSvgCode } from '../flatSvgCode.js';
import {
    Time24,
    GpioPin,
    EnvironmentSensorType,
    SmartOutputPin

} from '../crossplatform/assertable.js';


export class BooleanWidgetElement extends AbstractWidget {
    constructor($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {isReadFromUnmanagedDom: true, isLadderElement: true});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$checkboxInput = document.createElement('input');
        this.unmanaged.$checkboxInput.classList.add('checkbox-input');
        this.unmanaged.$checkboxInput.type = 'checkbox';
        this.unmanaged.$data = document.createElement('div')
        this.unmanaged.$data.classList.add('widget-element-data');
        this.unmanaged.$caption = document.createElement('div')
        this.unmanaged.$caption.classList.add('widget-element-caption');
        this.unmanaged.$caption.innerText = this.i18nSubtree.caption;
        this.unmanaged.$comment = document.createElement('div')
        this.unmanaged.$comment.classList.add('widget-element-comment');
        this.unmanaged.$comment.innerText = this.i18nSubtree.comment;

        this.unmanaged.$data.appendChild(this.unmanaged.$checkboxInput);

        this.$container.appendChild(this.unmanaged.$caption);
        this.$container.appendChild(this.unmanaged.$data);
        this.$container.appendChild(this.unmanaged.$comment);
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }

    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return typeof this.binded.rest === 'boolean';
    }

    easy_fromUnmanagedDomToBindedRest() {
        this.binded.rest = this.unmanaged.$checkboxInput.checked;
    }

    easy_fromBindedToUnmanagedDom() {
        this.unmanaged.$checkboxInput.checked = this.binded.rest;
        this.unmanaged.$checkboxInput.disabled = this.binded.state.shared.isDisabled;
    }

    async easy_saveToRestApi() {
        // do nothing
    }

    async easy_loadFromRestApi() {
        // do nothing
    }

    async easy_loadOnceFromLiveApi() {
        //do nothing
    }

    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class IntegerRangeWidgetElement extends AbstractWidget {
    static defaultOptions = {min: 0, max: 100};
    constructor ($parent, ladder, i18nSubtree, options = IntegerRangeWidgetElement.defaultOptions) {
        options = Object.assign({isReadFromUnmanagedDom: true, isLadderElement: true}, IntegerRangeWidgetElement.defaultOptions, options);
        super($parent, ladder, i18nSubtree, options);
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');


        this.unmanaged.$intRangeInput = document.createElement('input');
        this.unmanaged.$intRangeInput.classList.add('int-range-input');
        this.unmanaged.$intRangeInput.type = 'range';
        this.unmanaged.$intRangeInput.min = this.options.min;
        this.unmanaged.$intRangeInput.max = this.options.max;
        this.unmanaged.$intRangeInput.step = 1;
        this.unmanaged.$valueDisplay = document.createElement('div')
        this.unmanaged.$valueDisplay.classList.add('value-display');
        this.unmanaged.$valueDisplay.innerText = '?'; // to not to height-jump after inserting some content;
        this.unmanaged.$data = document.createElement('div')
        this.unmanaged.$data.classList.add('widget-element-data');
        this.unmanaged.$caption = document.createElement('div')
        this.unmanaged.$caption.classList.add('widget-element-caption');
        this.unmanaged.$caption.innerText = this.i18nSubtree.caption;
        this.unmanaged.$comment = document.createElement('div')
        this.unmanaged.$comment.classList.add('widget-element-comment');
        this.unmanaged.$comment.innerText = this.i18nSubtree.comment;

        this.unmanaged.$rv = document.createElement('div')
        this.unmanaged.$rv.classList.add('rv');
        this.unmanaged.$rv.appendChild(this.unmanaged.$intRangeInput);
        this.unmanaged.$rv.appendChild(this.unmanaged.$valueDisplay);

        this.unmanaged.$data.appendChild(this.unmanaged.$rv);

        this.$container.appendChild(this.unmanaged.$caption);
        this.$container.appendChild(this.unmanaged.$data);
        this.$container.appendChild(this.unmanaged.$comment);
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }

    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return typeof this.binded.rest === 'number' && this.binded.rest % 1 === 0;
    }

    easy_fromUnmanagedDomToBindedRest() {
        this.binded.rest = this.unmanaged.$intRangeInput.valueAsNumber;
    }

    easy_fromBindedToUnmanagedDom() {
        if (this.binded.rest) {
            this.unmanaged.$intRangeInput.value = this.binded.rest;
            this.unmanaged.$valueDisplay.innerText = this.binded.rest.toString();
        } else {
            this.unmanaged.$intRangeInput.value = 0;
            this.unmanaged.$valueDisplay.innerText = '0';
        }

        this.unmanaged.$intRangeInput.disabled = this.binded.state.shared.isDisabled;
    }

    async easy_saveToRestApi() {
        // do nothing
    }

    async easy_loadFromRestApi() {
        // do nothing
    }

    async easy_loadOnceFromLiveApi() {
        //do nothing
    }

    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }



}
export class RatioRangeWidgetElement extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {isReadFromUnmanagedDom: true, isLadderElement: true});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');
        this.unmanaged.$intRangeInput = document.createElement('input');
        this.unmanaged.$intRangeInput.classList.add('ratio-range-input');
        this.unmanaged.$intRangeInput.type = 'range';
        this.unmanaged.$intRangeInput.min = 0;
        this.unmanaged.$intRangeInput.max = 1;
        this.unmanaged.$intRangeInput.step = 0.01;
        this.unmanaged.$valueDisplay = document.createElement('div');
        this.unmanaged.$valueDisplay.classList.add('value-display');
        this.unmanaged.$valueDisplay.innerText = '?'; // to not to height-jump after inserting some content;
        this.unmanaged.$data = document.createElement('div')
        this.unmanaged.$data.classList.add('widget-element-data');
        this.unmanaged.$caption = document.createElement('div')
        this.unmanaged.$caption.classList.add('widget-element-caption');
        this.unmanaged.$caption.innerText = this.i18nSubtree.caption;
        this.unmanaged.$comment = document.createElement('div')
        this.unmanaged.$comment.classList.add('widget-element-comment');
        this.unmanaged.$comment.innerText = this.i18nSubtree.comment;

        this.unmanaged.$rv = document.createElement('div')
        this.unmanaged.$rv.classList.add('rv');
        this.unmanaged.$rv.appendChild(this.unmanaged.$intRangeInput);
        this.unmanaged.$rv.appendChild(this.unmanaged.$valueDisplay);

        this.unmanaged.$data.appendChild(this.unmanaged.$rv);

        this.$container.appendChild(this.unmanaged.$caption);
        this.$container.appendChild(this.unmanaged.$data);
        this.$container.appendChild(this.unmanaged.$comment);
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }

    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return typeof this.binded.rest === 'number' && this.binded.rest >= 0 && this.binded.rest <= 1;
    }

    easy_fromUnmanagedDomToBindedRest() {
        this.binded.rest = this.unmanaged.$intRangeInput.valueAsNumber;
    }

    easy_fromBindedToUnmanagedDom() {
        if (this.binded.rest) {
            this.unmanaged.$intRangeInput.value = this.binded.rest;
            this.unmanaged.$valueDisplay.innerText = (this.binded.rest * 100).toFixed(1) + '%';
        } else {
            this.unmanaged.$intRangeInput.value = 0;
            this.unmanaged.$valueDisplay.innerText = '0%';
        }

        this.unmanaged.$intRangeInput.disabled = this.binded.state.shared.isDisabled;
    }

    async easy_saveToRestApi() {
        // do nothing
    }

    async easy_loadFromRestApi() {
        // do nothing
    }

    async easy_loadOnceFromLiveApi() {
        //do nothing
    }

    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class TextWidgetElement extends AbstractWidget {
    static defaultOptions = {maxLength: 1024};
    constructor ($parent, ladder, i18nSubtree, options = TextWidgetElement.defaultOptions) {
        options = Object.assign({isReadFromUnmanagedDom: true, isLadderElement: true}, TextWidgetElement.defaultOptions, options);
        super($parent, ladder, i18nSubtree, options);
    }

    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$textInput = document.createElement('input');
        this.unmanaged.$textInput.classList.add('text-input');
        this.unmanaged.$textInput.type = 'text';
        this.unmanaged.$textInput.maxLength = this.options.maxLength;
        this.unmanaged.$data = document.createElement('div')
        this.unmanaged.$data.classList.add('widget-element-data');
        this.unmanaged.$caption = document.createElement('div')
        this.unmanaged.$caption.classList.add('widget-element-caption');
        this.unmanaged.$caption.innerText = this.i18nSubtree.caption;
        this.unmanaged.$comment = document.createElement('div')
        this.unmanaged.$comment.classList.add('widget-element-comment');
        this.unmanaged.$comment.innerText = this.i18nSubtree.comment;


        this.unmanaged.$data.appendChild(this.unmanaged.$textInput);
        this.$container.appendChild(this.unmanaged.$caption);
        this.$container.appendChild(this.unmanaged.$data);
        this.$container.appendChild(this.unmanaged.$comment);
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return typeof this.binded.rest === 'string' && this.binded.rest.length <= this.options.maxLength;
    }
    easy_fromUnmanagedDomToBindedRest() {
        this.binded.rest = this.unmanaged.$textInput.value;
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.rest) {
            this.unmanaged.$textInput.value = this.binded.rest;
        } else {
            this.unmanaged.$textInput.value = '';
        }
        this.unmanaged.$textInput.disabled = this.binded.state.shared.isDisabled;
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class GpioPinWidgetElement extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {isReadFromUnmanagedDom: true, isLadderElement: true});
    }

    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$select = document.createElement('select');
        this.unmanaged.$select.classList.add('select');

        for (let gpioPinIdx = 0; gpioPinIdx < 32; gpioPinIdx++) {
            const $option = document.createElement('option')
            $option.classList.add('widget-element-select-option');
            $option.text = gpioPinIdx;
            $option.value = gpioPinIdx;
            this.unmanaged.$select.appendChild($option);
        }

        this.$data = document.createElement('div')
        this.$data.classList.add('widget-element-data');
        this.$caption = document.createElement('div')
        this.$caption.classList.add('widget-element-caption');
        this.$caption.innerText = this.i18nSubtree.caption;
        this.$comment = document.createElement('div')
        this.$comment.classList.add('widget-element-comment');
        this.$comment.innerText = this.i18nSubtree.comment;
        this.$data.appendChild(this.unmanaged.$select);
        this.$container.appendChild(this.$caption);
        this.$container.appendChild(this.$data);
        this.$container.appendChild(this.$comment);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        const idx = parseInt(this.unmanaged.$select.value);
        this.binded.rest = new GpioPin(idx);
    }
    easy_fromBindedToUnmanagedDom() {
        // TODO: make it work with select
        if (this.binded.rest) {
            this.unmanaged.$select.value = this.binded.rest.idx.toString();
        } else {
            this.unmanaged.$select.value = '';
        }
        this.unmanaged.$select.disabled = this.binded.state.shared.isDisabled;
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class SmartOutputPinWidgetElement extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {isReadFromUnmanagedDom: true, isLadderElement: true});
    }
    refillModeKeySelectOptions() {
        let selectedValue = this.unmanaged.$modeKeySelect.value;
        this.unmanaged.$modeKeySelect.innerHTML = '';
        if (this.binded.state.shared.isExtenderEnabled) {
            const $option = document.createElement('option')
            $option.classList.add('widget-element-select-option');
            $option.text = 'extended';
            $option.value = 'extended';
            this.unmanaged.$modeKeySelect.appendChild($option);
        }
        {
            const $option = document.createElement('option')
            $option.classList.add('widget-element-select-option');
            $option.text = 'raw';
            $option.value = 'raw';
            this.unmanaged.$modeKeySelect.appendChild($option);
        }
        if (selectedValue === '' && !!this.binded.rest) {
            selectedValue = this.binded.rest.modeKey;
        }
        this.unmanaged.$modeKeySelect.value = selectedValue;
    }
    refillIdxSelectOptions() {
        let selectedValue = this.unmanaged.$idxSelect.value;
        this.unmanaged.$idxSelect.innerHTML = '';
        if (!this.binded.rest) {
            // do nothing
        } else if (this.binded.rest.modeKey === 'raw') {
            for (let gpioPinIdx = 0; gpioPinIdx < 32; gpioPinIdx++) {
                const $option = document.createElement('option')
                $option.classList.add('widget-element-select-option');
                $option.text = 'R' + gpioPinIdx;
                $option.value = gpioPinIdx;
                this.unmanaged.$idxSelect.appendChild($option);
            }
        } else if (this.binded.rest.modeKey === 'extended') {
            const pinsCount = this.binded.state.shared.extenderCapacity;
            for (let extendedOutputPinIdx = 0; extendedOutputPinIdx < pinsCount; extendedOutputPinIdx++) {
                const $option = document.createElement('option')
                $option.classList.add('widget-element-select-option');
                $option.text = 'E' + extendedOutputPinIdx;
                $option.value = extendedOutputPinIdx;
                this.unmanaged.$idxSelect.appendChild($option);
            }
        } else {
            throw new Error('bad modeKey');
        }
        if (selectedValue === '' && !!this.binded.rest) {
            selectedValue = this.binded.rest.idx.toString();
        }
        this.unmanaged.$idxSelect.value = selectedValue;
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$modeKeySelect = document.createElement('select');
        this.unmanaged.$modeKeySelect.classList.add('select');
        this.unmanaged.$idxSelect = document.createElement('select');
        this.unmanaged.$idxSelect.classList.add('select');

        this.refillModeKeySelectOptions();
        this.refillIdxSelectOptions();

        this.$data = document.createElement('div')
        this.$data.classList.add('widget-element-data');
        this.$caption = document.createElement('div')
        this.$caption.classList.add('widget-element-caption');
        this.$caption.innerText = this.i18nSubtree.caption;
        this.$comment = document.createElement('div')
        this.$comment.classList.add('widget-element-comment');
        this.$comment.innerText = this.i18nSubtree.comment;
        this.$data.appendChild(this.unmanaged.$modeKeySelect);
        this.$data.appendChild(this.unmanaged.$idxSelect);
        this.$container.appendChild(this.$caption);
        this.$container.appendChild(this.$data);
        this.$container.appendChild(this.$comment);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        const idx = parseInt(this.unmanaged.$idxSelect.value);
        const modeKey = this.unmanaged.$modeKeySelect.value;
        this.binded.rest = new SmartOutputPin(modeKey, idx);
    }
    easy_fromBindedToUnmanagedDom() {
        // TODO: make it work with select
        console.log('qwe');
        if (this.binded.rest) {
            this.unmanaged.$idxSelect.value = this.binded.rest.idx.toString();
            this.unmanaged.$modeKeySelect.value = this.binded.rest.modeKey;
        } else {
            this.unmanaged.$idxSelect.value = '';
            this.unmanaged.$modeKeySelect.value = '';
        }
        this.unmanaged.$idxSelect.disabled = this.binded.state.shared.isDisabled;
        this.unmanaged.$modeKeySelect.disabled = this.binded.state.shared.isDisabled;
        this.refillModeKeySelectOptions();
        this.refillIdxSelectOptions();
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class Time24WidgetElement extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {isReadFromUnmanagedDom: true, isLadderElement: true});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$hInput = document.createElement('input');
        this.unmanaged.$hInput.classList.add('hInput');
        this.unmanaged.$hInput.type = 'number';
        this.unmanaged.$mInput = document.createElement('input');
        this.unmanaged.$mInput.classList.add('mInput');
        this.unmanaged.$mInput.type = 'number';
        this.unmanaged.$sInput = document.createElement('input');
        this.unmanaged.$sInput.classList.add('sInput');
        this.unmanaged.$sInput.type = 'number';
        this.unmanaged.$hmDelimeter = document.createElement('div');
        this.unmanaged.$hmDelimeter.classList.add('delimeter');
        this.unmanaged.$hmDelimeter.innerText = ":";
        this.unmanaged.$msDelimeter = document.createElement('div');
        this.unmanaged.$msDelimeter.classList.add('delimeter');
        this.unmanaged.$msDelimeter.innerText = ":";
        this.unmanaged.$hms = document.createElement('div')
        this.unmanaged.$hms.classList.add('hms');
        this.unmanaged.$data = document.createElement('div')
        this.unmanaged.$data.classList.add('widget-element-data');
        this.unmanaged.$caption = document.createElement('div')
        this.unmanaged.$caption.classList.add('widget-element-caption');
        this.unmanaged.$caption.innerText = this.i18nSubtree.caption;
        this.unmanaged.$comment = document.createElement('div')
        this.unmanaged.$comment.classList.add('widget-element-comment');
        this.unmanaged.$comment.innerText = this.i18nSubtree.comment;


        this.unmanaged.$hInput.min = 0;
        this.unmanaged.$hInput.max = 23;
        this.unmanaged.$mInput.min = 0;
        this.unmanaged.$mInput.max = 59;
        this.unmanaged.$sInput.min = 0;
        this.unmanaged.$sInput.max = 59;
        this.unmanaged.$hms.appendChild(this.unmanaged.$hInput);
        this.unmanaged.$hms.appendChild(this.unmanaged.$hmDelimeter);
        this.unmanaged.$hms.appendChild(this.unmanaged.$mInput);
        this.unmanaged.$hms.appendChild(this.unmanaged.$msDelimeter);
        this.unmanaged.$hms.appendChild(this.unmanaged.$sInput);

        this.unmanaged.$data.appendChild(this.unmanaged.$hms);

        this.$container.appendChild(this.unmanaged.$caption);
        this.$container.appendChild(this.unmanaged.$data);
        this.$container.appendChild(this.unmanaged.$comment);
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }

    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }

    easy_fromUnmanagedDomToBindedRest() {
        const h = this.unmanaged.$hInput.valueAsNumber;
        const m = this.unmanaged.$mInput.valueAsNumber;
        const s = this.unmanaged.$sInput.valueAsNumber;
        this.binded.rest = new Time24(h, m, s);
    }

    easy_fromBindedToUnmanagedDom() {
        if (this.binded.rest) {
            this.unmanaged.$hInput.value = this.binded.rest.h.toString().padStart(2, '0');
            this.unmanaged.$mInput.value = this.binded.rest.m.toString().padStart(2, '0');
            this.unmanaged.$sInput.value = this.binded.rest.s.toString().padStart(2, '0');
        } else {
            this.unmanaged.$hInput.value = '';
            this.unmanaged.$mInput.value = '';
            this.unmanaged.$sInput.value = '';
        }
        this.unmanaged.$hInput.disabled = this.binded.state.shared.isDisabled;
        this.unmanaged.$mInput.disabled = this.binded.state.shared.isDisabled;
        this.unmanaged.$sInput.disabled = this.binded.state.shared.isDisabled;
    }

    async easy_saveToRestApi() {
        // do nothing
    }

    async easy_loadFromRestApi() {
        // do nothing
    }

    async easy_loadOnceFromLiveApi() {
        //do nothing
    }

    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class Timespan24WidgetMultiElement extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-multi-element-container');
        this.managed.from = new Time24WidgetElement(this.$container, this.ladder, this.i18nSubtree.from);
        this.managed.to = new Time24WidgetElement(this.$container, this.ladder, this.i18nSubtree.to);
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class SectionHrWidgetElement extends AbstractWidget {
    constructor ($parent, ladder) {
        super($parent, ladder, null, {isLadderElement: true});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$hr = document.createElement('hr');
        this.unmanaged.$hr.classList.add('widget-section-hr');

        this.$container.appendChild(this.unmanaged.$hr);
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}

export class SectionTitleWidgetElement extends AbstractWidget {
    static defaultOptions = {level: 1};
    constructor ($parent, ladder, i18nSubtree, options = SectionTitleWidgetElement.defaultOptions) {
        options = Object.assign({isLadderElement: true}, SectionTitleWidgetElement.defaultOptions, options);
        super($parent, ladder, i18nSubtree, options);
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$hr = document.createElement('hr');
        this.unmanaged.$hr.classList.add('widget-section-hr');

        this.unmanaged.$subtitle = document.createElement('div');
        this.unmanaged.$subtitle.classList.add('widget-section-subtitle');
        this.unmanaged.$subtitle.classList.add('level-' + this.options.level);
        this.unmanaged.$subtitle.innerText = this.i18nSubtree.caption;

        this.unmanaged.$comment = document.createElement('div');
        this.unmanaged.$comment.classList.add('widget-section-comment');
        this.unmanaged.$comment.innerText = this.i18nSubtree.comment;

        this.$container.appendChild(this.unmanaged.$hr);
        this.$container.appendChild(this.unmanaged.$subtitle);
        this.$container.appendChild(this.unmanaged.$comment);
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }


}
export class SectionTitleWithCheckboxWidgetElement extends AbstractWidget {
    static defaultOptions = {level: 1};
    constructor ($parent, ladder, i18nSubtree, options = SectionTitleWithCheckboxWidgetElement.defaultOptions) {
        options = Object.assign({isReadFromUnmanagedDom: true, isLadderElement: true}, SectionTitleWithCheckboxWidgetElement.defaultOptions, options);
        super($parent, ladder, i18nSubtree, options);
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$hr = document.createElement('hr');
        this.unmanaged.$hr.classList.add('widget-section-hr');
        this.unmanaged.$row = document.createElement('div');
        this.unmanaged.$row.classList.add('widget-section-subtitle-row');
        this.unmanaged.$subtitle = document.createElement('div');
        this.unmanaged.$subtitle.classList.add('widget-section-subtitle');
        this.unmanaged.$subtitle.classList.add('level-' + this.options.level);
        this.unmanaged.$subtitle.innerText = this.i18nSubtree.caption;
        this.unmanaged.$data = document.createElement('div')
        this.unmanaged.$data.classList.add('widget-element-data');
        this.unmanaged.$checkboxInput = document.createElement('input');
        this.unmanaged.$checkboxInput.classList.add('checkbox-input');
        this.unmanaged.$checkboxInput.type = 'checkbox';
        this.unmanaged.$comment = document.createElement('div');
        this.unmanaged.$comment.classList.add('widget-section-comment');
        this.unmanaged.$comment.innerText = this.i18nSubtree.comment;

        this.unmanaged.$data.appendChild(this.unmanaged.$checkboxInput);
        this.unmanaged.$row.appendChild(this.unmanaged.$subtitle);
        this.unmanaged.$row.appendChild(this.unmanaged.$data);

        this.$container.appendChild(this.unmanaged.$hr);
        this.$container.appendChild(this.unmanaged.$row);
        this.$container.appendChild(this.unmanaged.$comment);
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return typeof this.binded.rest === 'boolean';
    }
    easy_fromUnmanagedDomToBindedRest() {
        this.binded.rest = this.unmanaged.$checkboxInput.checked;
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.rest) {
            this.unmanaged.$checkboxInput.checked = this.binded.rest;
            this.unmanaged.$subtitle.classList.remove('disabled');
        } else {
            this.unmanaged.$checkboxInput.checked = false;
            this.unmanaged.$subtitle.classList.add('disabled');
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class SaveSettingsButtonWidgetElement extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {isLadderElement: true});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$button = document.createElement('input');
        this.unmanaged.$button.classList.add('main-button');
        this.unmanaged.$button.type = 'button';
        this.unmanaged.$button.value = this.i18nSubtree.caption;
        this.unmanaged.$data = document.createElement('div')
        this.unmanaged.$data.classList.add('widget-element-data');
        this.unmanaged.$comment = document.createElement('div')
        this.unmanaged.$comment.classList.add('widget-element-comment');
        this.unmanaged.$comment.innerText = this.i18nSubtree.comment;

        this.unmanaged.$button.addEventListener('click', () => { this.ee.emit('save'); });
        //this.unmanaged.$button.addEventListener('submit', () => { this.ee.emit('save'); });

        this.unmanaged.$data.appendChild(this.unmanaged.$button);
        this.$container.appendChild(this.unmanaged.$data);
        this.$container.appendChild(this.unmanaged.$comment);
    }

    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        this.unmanaged.$button.disabled = this.binded.state.shared.isDisabled;
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }


}
export class ManualOverrideElement extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {isReadFromUnmanagedDom: true, isLadderElement: true});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$autoButton = document.createElement('input');
        this.unmanaged.$autoButton.classList.add('auto');
        this.unmanaged.$autoButton.value = i18n.widgetElement.manualOverride.auto;
        this.unmanaged.$autoButton.type = 'button';
        this.unmanaged.$manualOffButton = document.createElement('input');
        this.unmanaged.$manualOffButton.classList.add('manual-off');
        this.unmanaged.$manualOffButton.value = i18n.widgetElement.manualOverride.manualOff;
        this.unmanaged.$manualOffButton.type = 'button';
        this.unmanaged.$manualOnButton = document.createElement('input');
        this.unmanaged.$manualOnButton.classList.add('manual-on');
        this.unmanaged.$manualOnButton.value = i18n.widgetElement.manualOverride.manualOn;
        this.unmanaged.$manualOnButton.type = 'button';

        this.unmanaged.$trio = document.createElement('div')
        this.unmanaged.$trio.classList.add('trio');
        this.unmanaged.$data = document.createElement('div')
        this.unmanaged.$data.classList.add('widget-element-data');
        this.unmanaged.$caption = document.createElement('div')
        this.unmanaged.$caption.classList.add('widget-element-caption');
        this.unmanaged.$caption.classList.add('verbose');
        this.unmanaged.$caption.innerText = this.i18nSubtree.caption;
        this.unmanaged.$comment = document.createElement('div')
        this.unmanaged.$comment.classList.add('widget-element-comment');
        this.unmanaged.$comment.innerText = this.i18nSubtree.comment;


        this.unmanaged.$autoButton.addEventListener('click', () => { this.onDomClick(undefined); });
        this.unmanaged.$manualOffButton.addEventListener('click', () => { this.onDomClick(false); });
        this.unmanaged.$manualOnButton.addEventListener('click', () => { this.onDomClick(true); });

        this.unmanaged.$trio.appendChild(this.unmanaged.$autoButton);
        this.unmanaged.$trio.appendChild(this.unmanaged.$manualOffButton);
        this.unmanaged.$trio.appendChild(this.unmanaged.$manualOnButton);
        this.unmanaged.$data.appendChild(this.unmanaged.$trio);
        this.$container.appendChild(this.unmanaged.$caption);
        this.$container.appendChild(this.unmanaged.$data);
        this.$container.appendChild(this.unmanaged.$comment);
    }
    easy_destroy() {
        // do nothimg
    }
    onDomClick(manualOverride) {
        this.binded.rest = manualOverride;
        this.ee.emit('unmanaged.dom.change');
        this.ee.emit('save');
    }


    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return typeof this.binded.rest === 'undefined' ||  typeof this.binded.rest === 'boolean';
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        this.unmanaged.$autoButton.classList.remove('selected');
        this.unmanaged.$manualOffButton.classList.remove('selected');
        this.unmanaged.$manualOnButton.classList.remove('selected');

        if (this.binded.rest === undefined) {
            this.unmanaged.$autoButton.classList.add('selected');
        } else if (this.binded.rest === false) {
            this.unmanaged.$manualOffButton.classList.add('selected');
        } else if (this.binded.rest === true) {
            this.unmanaged.$manualOnButton.classList.add('selected');
        };

        this.unmanaged.$autoButton.disabled = this.binded.state.shared.isDisabled;
        this.unmanaged.$manualOffButton.disabled = this.binded.state.shared.isDisabled;
        this.unmanaged.$manualOnButton.disabled = this.binded.state.shared.isDisabled;
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }



}
export class TextViewerElement extends AbstractWidget {
    static defaultOptions = {apiKey: 'rest'};
    constructor ($parent, ladder, i18nSubtree, options = TextViewerElement.defaultOptions) {
        options = Object.assign({isLadderElement: true}, TextViewerElement.defaultOptions, options);
        super($parent, ladder, i18nSubtree, options);
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$textDisplay = document.createElement('div');
        this.unmanaged.$textDisplay.classList.add('text-display');
        this.unmanaged.$data = document.createElement('div')
        this.unmanaged.$data.classList.add('widget-element-data');
        this.unmanaged.$caption = document.createElement('div')
        this.unmanaged.$caption.classList.add('widget-element-caption');
        this.unmanaged.$caption.innerText = this.i18nSubtree.caption;
        this.unmanaged.$comment = document.createElement('div')
        this.unmanaged.$comment.classList.add('widget-element-comment');
        this.unmanaged.$comment.innerText = this.i18nSubtree.comment;

        this.unmanaged.$data.appendChild(this.unmanaged.$textDisplay);
        this.$container.appendChild(this.unmanaged.$caption);
        this.$container.appendChild(this.unmanaged.$data);
        this.$container.appendChild(this.unmanaged.$comment);
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return typeof this.binded.rest === 'string';
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        const valueFromApi = this.binded[this.options.apiKey];
        if (valueFromApi) {
            this.unmanaged.$textDisplay.innerText = valueFromApi.toString();
        } else {
            this.unmanaged.$textDisplay.innerText = '';
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class NumberViewerElement extends TextViewerElement {
    easy_validateBindedRest() {
        return typeof this.binded.rest === 'number';
    }
}
export class TzViewerElement extends NumberViewerElement {
}
export class DateViewerElement extends TextViewerElement {
    easy_validateBindedRest() {
        return this.binded.rest instanceof Date;
    }
}
export class BooleanViewerElement extends TextViewerElement {
    easy_validateBindedRest() {
        return this.binded.rest instanceof Boolean;
    }
    easy_fromBindedToUnmanagedDom() {
        const valueFromApi = this.binded[this.options.apiKey];
        if (valueFromApi) {
            this.unmanaged.$textDisplay.innerText = i18n.widgetElement.boolean.yes;
        } else {
            this.unmanaged.$textDisplay.innerText = i18n.widgetElement.boolean.no;
        }
    }
}


export class LinkWidgetElement extends AbstractWidget {
    static defaultOptions = {routeKey: 'index'};
    constructor ($parent, ladder, i18nSubtree, options = LinkWidgetElement.defaultOptions) {
        options = Object.assign({isLadderElement: true}, LinkWidgetElement.defaultOptions, options);
        super($parent, ladder, i18nSubtree, options);
    }

    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$link = document.createElement('a');
        this.unmanaged.$link.classList.add('widget-link');
        this.unmanaged.$link.href = '#' + this.options.routeKey;
        this.unmanaged.$link.innerText = this.i18nSubtree.caption;
        this.unmanaged.$link.addEventListener('click', () => { this.ee.emit('link', this.i18nSubtree.caption); });
        this.unmanaged.$data = document.createElement('div')
        this.unmanaged.$data.classList.add('widget-element-data');
        this.unmanaged.$comment = document.createElement('div')
        this.unmanaged.$comment.classList.add('widget-element-comment');
        this.unmanaged.$comment.innerText = this.i18nSubtree.comment;

        this.unmanaged.$data.appendChild(this.unmanaged.$link);
        this.$container.appendChild(this.unmanaged.$data);
        this.$container.appendChild(this.unmanaged.$comment);
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class TitleWidgetElement extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {isLadderElement: true});
    }

        easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$title = document.createElement('div');
        this.unmanaged.$title.classList.add('widget-title');
        this.unmanaged.$titleParentLink = document.createElement('a');
        this.unmanaged.$titleParentLink.href = '#settings/index';
        this.unmanaged.$titleParentLink.classList.add('widget-title-parent-link');
        this.unmanaged.$titleParentLink.innerText = i18n.widget.index.title.caption;
        this.unmanaged.$titleSpan = document.createElement('span');
        this.unmanaged.$titleSpan.innerText = ' → ' + this.i18nSubtree.caption;

        this.unmanaged.$title.appendChild(this.unmanaged.$titleParentLink);
        this.unmanaged.$title.appendChild(this.unmanaged.$titleSpan);

        this.$container.appendChild(this.unmanaged.$title);
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class IndexTitleWidgetElement extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {isLadderElement: true});
    }
    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$title = document.createElement('div');
        this.unmanaged.$title.classList.add('widget-title');
        this.unmanaged.$title.innerText = this.i18nSubtree.caption;

        this.$container.appendChild(this.unmanaged.$title);
    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class FooterWidgetElement extends AbstractWidget {
    constructor ($parent, ladder, i18nSubtree) {
        super($parent, ladder, i18nSubtree, {isReadFromUnmanagedDom: false});
    }

    easy_buildDom() {
        this.$container.classList.add('widget-footer-container');

        this.unmanaged.$footer = document.createElement('div');
        this.unmanaged.$footer.classList.add('widget-footer');

        this.unmanaged.$footerCaption = document.createElement('div');
        this.unmanaged.$footerCaption.classList.add('widget-footer-caption');
        this.unmanaged.$footerCaption.innerText = this.i18nSubtree.caption;

        this.unmanaged.$footerComment = document.createElement('div');
        this.unmanaged.$footerComment.classList.add('widget-footer-comment');
        this.unmanaged.$footerComment.innerText = this.i18nSubtree.comment;

        this.unmanaged.$footer.appendChild(this.unmanaged.$footerCaption);
        this.unmanaged.$footer.appendChild(this.unmanaged.$footerComment);

        this.$container.appendChild(this.unmanaged.$footer);

    }
    easy_destroy() {
        // do nothimg
    }

    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        // do nothing
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}
export class ScapeWidgetElement extends AbstractWidget {
    static defaultOptions = {highlight: undefined};
    constructor ($parent, ladder, i18nSubtree, options = ScapeWidgetElement.defaultOptions) {
        options = Object.assign({isSubscribeToLiveApi: true, isLoadOnceFromLiveApi: true, isLadderElement: true}, ScapeWidgetElement.defaultOptions, options);
        super($parent, ladder, i18nSubtree, options);
    }

    async easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$scape = document.createElement('div');
        this.unmanaged.$scape.classList.add('scape');

        this.unmanaged.$flatSvg = document.createElement('div');
        this.unmanaged.$flatSvg.classList.add('flat-svg');
        this.unmanaged.$flatSvg.innerHTML = flatSvgCode;

        this.unmanaged.$liveData = document.createElement('div');
        this.unmanaged.$liveData.classList.add('widget-element-live-data');

        this.unmanaged.$scape.appendChild(this.unmanaged.$flatSvg);
        this.unmanaged.$liveData.appendChild(this.unmanaged.$scape);
        this.$container.appendChild(this.unmanaged.$liveData);

        await this.fromOptionsToDom();
    }
    async fromOptionsToDom() {
        if (this.options && this.options.highlight) {
            this.unmanaged.$flatSvg.classList.add('highlight');
            await pause(10);
            if (this.options.highlight === 'light') {
                this.unmanaged.$flatSvg.classList.add('highlight-group-device-light');
            } else if (this.options.highlight === 'fan') {
                this.unmanaged.$flatSvg.classList.add('highlight-group-device-fan');
            } else if (this.options.highlight === 'water') {
                this.unmanaged.$flatSvg.classList.add('highlight-group-device-water');
            } else if (this.options.highlight === 'heater') {
                this.unmanaged.$flatSvg.classList.add('highlight-group-device-heater');
            } else if (this.options.highlight === 'vaporizer') {
                this.unmanaged.$flatSvg.classList.add('highlight-group-device-vaporizer');
            } else if (this.options.highlight === 'conditioner') {
                this.unmanaged.$flatSvg.classList.add('highlight-group-device-conditioner');
            } else if (this.options.highlight === 'co2') {
                this.unmanaged.$flatSvg.classList.add('highlight-group-device-co2');
            }
        }
    }
    easy_destroy() {
        // do nothimg
    }



    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return true;
    }
    easy_fromUnmanagedDomToBindedRest() {
        // do nothing
    }
    easy_fromBindedToUnmanagedDom() {
        if (this.binded.live && this.binded.live.isLightDefined) {
            this.unmanaged.$flatSvg.classList.add('light-defined');
        } else {
            this.unmanaged.$flatSvg.classList.remove('light-defined');
        }
        if (this.binded.live && this.binded.live.isLightActive) {
            this.unmanaged.$flatSvg.classList.add('light-active');
        } else {
            this.unmanaged.$flatSvg.classList.remove('light-active');
        }
        if (this.binded.live && this.binded.live.isFanDefined) {
            this.unmanaged.$flatSvg.classList.add('fan-defined');
        } else {
            this.unmanaged.$flatSvg.classList.remove('fan-defined');
        }
        if (this.binded.live && this.binded.live.isFanActive) {
            this.unmanaged.$flatSvg.classList.add('fan-active');
        } else {
            this.unmanaged.$flatSvg.classList.remove('fan-active');
        }
        if (this.binded.live && this.binded.live.isWaterDefined) {
            this.unmanaged.$flatSvg.classList.add('water-defined');
        } else {
            this.unmanaged.$flatSvg.classList.remove('water-defined');
        }
        if (this.binded.live && this.binded.live.isWaterActive) {
            this.unmanaged.$flatSvg.classList.add('water-active');
        } else {
            this.unmanaged.$flatSvg.classList.remove('water-active');
        }
        if (this.binded.live && this.binded.live.isHeaterDefined) {
            this.unmanaged.$flatSvg.classList.add('heater-defined');
        } else {
            this.unmanaged.$flatSvg.classList.remove('heater-defined');
        }
        if (this.binded.live && this.binded.live.isHeaterActive) {
            this.unmanaged.$flatSvg.classList.add('heater-active');
        } else {
            this.unmanaged.$flatSvg.classList.remove('heater-active');
        }
        if (this.binded.live && this.binded.live.isVaporizerDefined) {
            this.unmanaged.$flatSvg.classList.add('vaporizer-defined');
        } else {
            this.unmanaged.$flatSvg.classList.remove('vaporizer-defined');
        }
        if (this.binded.live && this.binded.live.isVaporizerActive) {
            this.unmanaged.$flatSvg.classList.add('vaporizer-active');
        } else {
            this.unmanaged.$flatSvg.classList.remove('vaporizer-active');
        }
        if (this.binded.live && this.binded.live.isConditionerDefined) {
            this.unmanaged.$flatSvg.classList.add('conditioner-defined');
        } else {
            this.unmanaged.$flatSvg.classList.remove('conditioner-defined');
        }
        if (this.binded.live && this.binded.live.isConditionerActive) {
            this.unmanaged.$flatSvg.classList.add('conditioner-active');
        } else {
            this.unmanaged.$flatSvg.classList.remove('conditioner-active');
        }
        if (this.binded.live && this.binded.live.isCo2Defined) {
            this.unmanaged.$flatSvg.classList.add('co2-defined');
        } else {
            this.unmanaged.$flatSvg.classList.remove('co2-defined');
        }
        if (this.binded.live && this.binded.live.isCo2Active) {
            this.unmanaged.$flatSvg.classList.add('co2-active');
        } else {
            this.unmanaged.$flatSvg.classList.remove('co2-active');
        }
        if (this.binded.live && this.binded.live.isOutdoorLightSensorDefined) {
            this.unmanaged.$flatSvg.classList.add('outdoor-light-defined');
        } else {
            this.unmanaged.$flatSvg.classList.remove('outdoor-light-defined');
        }
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        const basicStats = await picoface.liveApi.getBasicStats();
        const newLive = basicStats.relay;
        // dev TODO: remove
        newLive.isLightDefined = true;
        newLive.isFanDefined = true;
        newLive.isWaterDefined = true;
        newLive.isHeaterDefined = true;
        newLive.isVaporizerDefined = true;
        newLive.isConditionerDefined = false;
        newLive.isCo2Defined = false;
        return newLive;
    }
    easy_subscribeToLiveApi(callback) {
        picoface.liveApi.ee.on('basicStats', callback);
    }
    easy_unsubscribeToLiveApi() {
        //TODO
    }
    easy_loadFromLiveApiEvent(basicStats) {
        const newLive = basicStats.relay;
        // dev TODO: remove
        newLive.isLightDefined = true;
        newLive.isFanDefined = true;
        newLive.isWaterDefined = true;
        newLive.isHeaterDefined = true;
        newLive.isVaporizerDefined = true;
        newLive.isConditionerDefined = false;
        newLive.isCo2Defined = false;
        return newLive;
    }
}

export class EnvironmentSensorSensorTypeWidgetElement extends AbstractWidget {
    static defaultOptions = {
        entries: {
            virtual: 'virtual',
            dht: 'dht22',
            bme: 'bme280',
            bmp: 'bmp280',
            ds: 'ds18b20',
        }
    };
    constructor ($parent, ladder, i18nSubtree, options = EnvironmentSensorSensorTypeWidgetElement.defaultOptions) {
        options = Object.assign({isReadFromUnmanagedDom: true, isLadderElement: true}, EnvironmentSensorSensorTypeWidgetElement.defaultOptions, options);
        super($parent, ladder, i18nSubtree, options);
    }

    easy_buildDom() {
        this.$container.classList.add('widget-element-container');

        this.unmanaged.$select = document.createElement('select');
        this.unmanaged.$select.classList.add('select');
        Object.entries(this.options.entries).forEach((([key, name]) => {
            const $option = document.createElement('option')
            $option.classList.add('widget-element-select-option');
            $option.text = name;
            $option.value = key;
            this.unmanaged.$select.appendChild($option);
        }));
        this.$data = document.createElement('div')
        this.$data.classList.add('widget-element-data');
        this.$caption = document.createElement('div')
        this.$caption.classList.add('widget-element-caption');
        this.$caption.innerText = this.i18nSubtree.caption;
        this.$comment = document.createElement('div')
        this.$comment.classList.add('widget-element-comment');
        this.$comment.innerText = this.i18nSubtree.comment;
        this.$data.appendChild(this.unmanaged.$select);
        this.$container.appendChild(this.$caption);
        this.$container.appendChild(this.$data);
        this.$container.appendChild(this.$comment);
    }
    easy_destroy() {
        // do nothimg
    }
    easy_fromBindedRestToBindedState() {
        // do nothing
    }
    easy_fromBindedLiveToBindedState() {
        // do nothing
    }
    easy_validateBindedRest() {
        return this.binded.rest && this.binded.rest.validate();
    }
    easy_fromUnmanagedDomToBindedRest() {
        const typeKey = this.unmanaged.$select.value;
        this.binded.rest = new EnvironmentSensorType(typeKey);
    }
    easy_fromBindedToUnmanagedDom() {
        // TODO: make it work with select
        if (this.binded.rest) {
            this.unmanaged.$select.value = this.binded.rest.typeKey;
        } else {
            this.unmanaged.$select.value = '';
        }
        this.unmanaged.$select.disabled = this.binded.state.shared.isDisabled;
    }
    async easy_saveToRestApi() {
        // do nothing
    }
    async easy_loadFromRestApi() {
        // do nothing
    }
    async easy_loadOnceFromLiveApi() {
        //do nothing
    }
    easy_subscribeToLiveApi(callback) {
        //do nothing
    }
    easy_unsubscribeToLiveApi() {
        //do nothing
    }
    easy_loadFromLiveApiEvent(liveApiValue) {
        //do nothing
    }
}