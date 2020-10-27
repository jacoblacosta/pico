console.log('yo');
import { i18n } from '../i18n/current.js';
import { Ladder } from '../ladder.js';
import { Splash } from '../splash.js';
import { EventEmitter, SmartEventEmitter } from '../util/eventEmitter.js';

export class AbstractWidget {
    static defaultOptions = { isLoadFromRestApi: false, isSaveToRestApi: false, isLoadOnceFromLiveApi: false, isSubscribeToLiveApi: false, isReadFromUnmanagedDom: false, isLadderElement: false, isLadderRoot: false };
    managed = {};
    unmanaged = {};
    binded = {
        rest: undefined,
        live: undefined,
        state: {
            shared: { isDisabled: undefined },
            rest: { isAwait: undefined, isEmpty: undefined, isInvalid: undefined },
            live: { isEmpty: undefined, isOffline: undefined },
        },
    };
    constructor($parent, ladder = new Ladder(), i18nSubtree, options = AbstractWidget.defaultOptions) {
        this.$parent = $parent;
        this.ladder = ladder;
        this.i18nSubtree = i18nSubtree;
        this.options = Object.assign({}, AbstractWidget.defaultOptions, options);
        this.ee = new EventEmitter();
        this.see = new SmartEventEmitter();
        this.buildDom();

    }

    buildDom() {
        this.$container = document.createElement('div');
        this.$container.classList.add('widget-container');
        this.statusBar = new WidgetStatusBar(this.$container);
        this.easy_buildDom();
        Object.entries(this.managed).forEach(([managedKey, managedSubwidget]) => {
            managedSubwidget.ee.on('binded.rest.bubble', (newBindedSubvalue) => { this.onChildrenBindedRestBubble(managedKey, newBindedSubvalue); });
        });

        Object.entries(this.managed).forEach(([managedKey, managedSubwidget]) => {
            managedSubwidget.ee.on('dirty.bubble', () => { this.onChildrenDirtyBubble(); });
        });

        this.ee.on('binded.rest.drown', (value) => { this.onSelfBindedRestDrown(value); });
        this.see.on('binded.rest.finally', (value) => { this.onSelfBindedRestFinally(value); });
        this.ee.on('binded.state.shared.drown', (value) => { this.onSelfBindedStateSharedDrown(value); });
        this.see.on('binded.state.shared.finally', (value) => { this.onSelfBindedStateSharedFinally(value); });
        this.ee.on('binded.live.drown', (value) => { this.onSelfBindedLiveDrown(value); });
        this.see.on('binded.live.finally', (value) => { this.onSelfBindedLiveFinally(value); });

        this.ee.on('dirty.finally', () => { this.onSelfDirtyFinally(); }); // drown shared

        Object.values(this.unmanaged).forEach(($unmanagedDomElement) => {
            $unmanagedDomElement.addEventListener('change', () => { this.ee.emit('unmanaged.dom.change'); }); // calls fromUnmanagedDomToBindedRest()
        });

        if (this.options.isLadderElement) {
            this.unmanaged.$ladder = this.ladder.createElementContainer(this.$parent);
            this.unmanaged.$ladder.appendChild(this.$container);
        }
        else {
            this.$parent.appendChild(this.$container);
        }
        if (this.options.isLadderRoot) {
            this.ladder.show();
        }

        if (this.options.isReadFromUnmanagedDom) {
            this.ee.on('unmanaged.dom.change', () => {
                this.fromUnmanagedDomToBindedRest();
                this.binded.state.rest.isDirty = true;
                this.ee.emit('binded.rest.bubble', this.binded.rest); // bubble rest
                this.see.emit('binded.rest.finally', this.binded.rest);
                this.ee.emit('dirty.bubble'); // bubble dirty
            });
        }

        if (this.options.isSaveToRestApi) {
            this.ee.on('save', () => {
                this.saveToRestApi();
            });
        }
        this.ee.on('destroy', () => {
            if (this.options.isSubscribeToLiveApi) {
                this.unsubscribeToLiveApi();
            }
            this.destroy();
        });

        if (this.options.isSubscribeToLiveApi) {
            this.subscribeToLiveApi((liveApiEventValue) => { this.loadFromLiveApiEvent(liveApiEventValue); });
        }
        if (this.options.isLoadOnceFromLiveApi) {
            this.loadOnceFromLiveApi();
        }
        if (this.options.isLoadFromRestApi) {
            this.loadFromRestApi();
        }
    }

    destroy() {
        Object.entries(this.managed).forEach(([managedKey, managedSubwidget]) => {
            managedSubwidget.see.emit('destroy');
        });
        this.easy_destroy();
    }

    onChildrenDirtyBubble() {
        this.ee.emit('dirty.bubble');
        this.ee.emit('dirty.finally');
    }

    onSelfDirtyFinally() {
        this.ee.emit('binded.state.shared.drown', { isAnyDirty: true }); // drown shared
    }

    onChildrenBindedRestBubble(newBindedSubvalueKey, newBindedSubvalue) {
        this.binded.rest[newBindedSubvalueKey] = newBindedSubvalue;
        this.ee.emit('binded.rest.bubble', this.binded.rest);
        this.see.emit('binded.rest.finally', this.binded.rest);
    }

    onSelfBindedRestDrown(newBindedRest) {
        this.binded.rest = newBindedRest;
        Object.entries(this.managed).forEach(([managedKey, managedSubwidget]) => {
            if (this.binded.rest) {
                const subvalue = this.binded.rest ? this.binded.rest[managedKey] : undefined;
                managedSubwidget.ee.emit('binded.rest.drown', subvalue);
            }
        });
        this.see.emit('binded.rest.finally', this.binded.rest);
    }

    onSelfBindedRestFinally(bindedRest) {
        this.binded.rest = bindedRest; // does not need actially
        this.fromBindedRestToBindedState();
        this.fromBindedToUnmanagedDom();
        this.onSelfBindedStateSharedDrown(this.binded.state.shared); // drown state
    }

    fromBindedRestToBindedState() {
        this.binded.state.rest.isInvalid = !this.validateBindedRest();
        this.binded.state.rest.isEmpty = this.binded.rest === undefined;
        this.easy_fromBindedRestToBindedState();
    }

    onSelfBindedLiveDrown(newBindedLive) {
        this.binded.live = newBindedLive;
        Object.entries(this.managed).forEach(([managedKey, managedSubwidget]) => {
            if (this.binded.live) {
                const subvalue = this.binded.live ? this.binded.live[managedKey] : undefined;
                managedSubwidget.ee.emit('binded.live.drown', subvalue);
            }
        });
        this.see.emit('binded.live.finally', this.binded.live);
    }

    onSelfBindedLiveFinally(bindedLive) {
        this.binded.live = bindedLive; // does not need actially
        this.fromBindedLiveToBindedState();
        this.fromBindedToUnmanagedDom();
        this.onSelfBindedStateSharedDrown(this.binded.state.shared); // drown state
    }

    fromBindedLiveToBindedState() {
        this.binded.state.live.isEmpty = this.binded.live === undefined;
        this.easy_fromBindedLiveToBindedState();
    }

    onSelfBindedStateSharedDrown(newBindedStateShared) {
        const explicitOnlyBindedStateShared = Object.fromEntries(Object.entries(newBindedStateShared).filter(([key, value]) => value !== undefined));
        this.binded.state.shared = Object.assign(this.binded.state.shared, explicitOnlyBindedStateShared);
        Object.entries(this.managed).forEach(([managedKey, managedSubwidget]) => {
            managedSubwidget.ee.emit('binded.state.shared.drown', this.binded.state.shared);
        });
        this.see.emit('binded.state.shared.finally', this.binded.state.shared);
    }

    onSelfBindedStateSharedFinally(bindedStateShared) {
        this.binded.state.shared = bindedStateShared; // does not need actially
        this.fromBindedToUnmanagedDom();
    }

    validateBindedRest() {
        return this.easy_validateBindedRest();
    }

    fromUnmanagedDomToBindedRest() {
        this.easy_fromUnmanagedDomToBindedRest();
    }

    fromBindedToUnmanagedDom() {
        this.$container.classList.remove('disabled', 'rest-invalid', 'rest-empty', 'rest-await', 'rest-dirty', 'live-empty', 'live-await-once', 'live-offline', 'shared-any-dirty');
        if (this.binded.state.shared.isDisabled) {
            this.$container.classList.add('disabled');
        }
        if (this.binded.state.rest.isInvalid) {
            this.$container.classList.add('rest-invalid');
        }
        if (this.binded.state.rest.isEmpty) {
            this.$container.classList.add('rest-empty');
        }
        if (this.binded.state.rest.isAwait) {
            this.$container.classList.add('rest-await');
        }
        if (this.binded.state.rest.isDirty) {
            this.$container.classList.add('rest-dirty');
        }
        if (this.binded.state.live.isEmpty) {
            this.$container.classList.add('live-empty');
        }
        if (this.binded.state.live.isAwaitOnce) {
            this.$container.classList.add('live-await-once');
        }
        if (this.binded.state.live.isOffline) {
            this.$container.classList.add('live-offline');
        }
        if (this.binded.state.shared.isAnyDirty) {
            this.$container.classList.add('shared-any-dirty');
        }
        this.easy_fromBindedToUnmanagedDom();
    }


    async saveToRestApi() {
        await this.easy_saveToRestApi();
        new Splash(i18n.splash.saved);
        this.ee.emit('binded.state.shared.drown', { isAnyDirty: false }); // drown shared
    }


    async loadFromRestApi() {
        const newRest = await this.easy_loadFromRestApi();
        this.ee.emit('binded.rest.drown', newRest); // drown
    }


    async loadOnceFromLiveApi() {
        const newLive = await this.easy_loadOnceFromLiveApi();
        this.ee.emit('binded.live.drown', newLive); // drown
    }

    subscribeToLiveApi(callback) {
        this.easy_subscribeToLiveApi(callback);
    }

    unsubscribeToLiveApi() {
        this.easy_unsubscribeToLiveApi();
    }

    loadFromLiveApiEvent(liveApiValue) {
        const newLive = this.easy_loadFromLiveApiEvent(liveApiValue);
        this.ee.emit('binded.live.drown', newLive); // drown
    }

    easy_buildDom() { throw new Error('Abstract method does not implemented'); }
    easy_destroy() { throw new Error('Abstract method does not implemented'); }
    easy_fromBindedRestToBindedState() { throw new Error('Abstract method does not implemented'); }
    easy_fromBindedLiveToBindedState() { throw new Error('Abstract method does not implemented'); }
    easy_validateBindedRest() { throw new Error('Abstract method does not implemented'); }
    easy_fromUnmanagedDomToBindedRest() { throw new Error('Abstract method does not implemented'); }
    easy_fromBindedToUnmanagedDom() { throw new Error('Abstract method does not implemented'); }
    async easy_saveToRestApi() { throw new Error('Abstract method does not implemented'); }
    async easy_loadFromRestApi() { throw new Error('Abstract method does not implemented'); }
    async easy_loadOnceFromLiveApi() { throw new Error('Abstract method does not implemented'); }
    easy_subscribeToLiveApi(callback) { throw new Error('Abstract method does not implemented'); }
    easy_unsubscribeToLiveApi() { throw new Error('Abstract method does not implemented'); }
    easy_loadFromLiveApiEvent(liveApiValue) { throw new Error('Abstract method does not implemented'); }
}
export class WidgetStatusBar {
    constructor ($parent) {
        this.$parent = $parent;
        this.buildDom();
    }
    buildDom() {
        this.$container = document.createElement('div');
        this.$container.classList.add('widget-status-bar-container');
        this.$bar = document.createElement('div');
        this.$bar.classList.add('widget-status-bar');
        this.$container.appendChild(this.$bar);
        this.$parent.appendChild(this.$container);
    }
}
