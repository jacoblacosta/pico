'use strict';
export class Collapser {
    $collapserElementContainersMap = {};
    constructor(isNoAnimation = false) {
        this.isNoAnimation = isNoAnimation;
    }
    createElementContainer($parent, key = 'default') {
        const $collapserElementContainer = document.createElement('div');
        $collapserElementContainer.classList.add('collapser-element-container');
        if (this.isNoAnimation) {
            $collapserElementContainer.classList.add('no-animation');
        }
        $parent.appendChild($collapserElementContainer);
        const $collapserElementContainers = this.$collapserElementContainersMap[key] || [];
        $collapserElementContainers.push($collapserElementContainer);
        this.$collapserElementContainersMap[key] = $collapserElementContainers;
        return $collapserElementContainer;

    }
    show(key = undefined) {
        let $collapserElementContainersMap;
        if (key) {
            $collapserElementContainersMap = {};
            $collapserElementContainersMap[key] = this.$collapserElementContainersMap[key];
        } else {
            $collapserElementContainersMap = this.$collapserElementContainersMap;
        }
        Object.values($collapserElementContainersMap).forEach(($collapserElementContainers) => {
            for (let collapserElementIdx = 0; collapserElementIdx < $collapserElementContainers.length; collapserElementIdx++) {
                const $collapserElement = $collapserElementContainers[collapserElementIdx];
                $collapserElement.classList.add('uncollapsed');
            }
        });
    }
    hide(key = undefined) {
        let $collapserElementContainersMap;
        if (key) {
            $collapserElementContainersMap = {};
            $collapserElementContainersMap[key] = this.$collapserElementContainersMap[key];
        } else {
            $collapserElementContainersMap = this.$collapserElementContainersMap;
        }
        Object.values($collapserElementContainersMap).forEach(($collapserElementContainers) => {
            for (let collapserElementIdx = 0; collapserElementIdx < $collapserElementContainers.length; collapserElementIdx++) {
                const $collapserElement = $collapserElementContainers[collapserElementIdx];
                $collapserElement.classList.remove('uncollapsed');
            }
        });
    }
}
