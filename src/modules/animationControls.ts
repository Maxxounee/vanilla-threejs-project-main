import {getProject} from "@theatre/core";
import studio from '@theatre/studio'
import state from '../animation/theatre-project-state.json';

export default class AnimationControls {
    projectInstance;
    sheetInstance;


    constructor(opt: {} = {}) {
        const {project, sheet} = this.init(opt);
        this.projectInstance = project;
        this.sheetInstance = sheet;
    }

    init(opt: {} = {}) {
        studio.initialize();
        const project = getProject('Название проекта', {state});
        const sheet = project.sheet('Анимируемая сцена');

        return {project, sheet}
    }

    get sheet() {
        return this.sheetInstance;
    }

    get project() {
        return this.projectInstance;
    }
}