'use strict';
export class Ladder {
    $ladderElementContainers = [];
    constructor() {
    }
    createElementContainer($parent) {
        const $ladderElementContainer = document.createElement('div');
        $ladderElementContainer.classList.add('ladder-element-container');
        $parent.appendChild($ladderElementContainer);
        this.$ladderElementContainers.push($ladderElementContainer);
        return $ladderElementContainer;

    }
    async show(lagDuration = 50) {
        for (let ladderElementIdx = 0; ladderElementIdx < this.$ladderElementContainers.length; ladderElementIdx++) {
            if (ladderElementIdx < 7) {
                await pause(lagDuration);
            }
            const $ladderElement = this.$ladderElementContainers[ladderElementIdx];
            $ladderElement.classList.add('show');
        }
    }
    async hide(lagDuration = 10) {
        for (let ladderElementIdx = 0; ladderElementIdx < this.$ladderElementContainers.length; ladderElementIdx++) {
            if (ladderElementIdx < 7) {
                await pause(lagDuration);
            }
            const $ladderElement = this.$ladderElementContainers[ladderElementIdx];
            $ladderElement.classList.remove('show');
        }
    }
}
