/* eslint-disable consistent-return */
const chalk = require('chalk');
const EntityClientGenerator = require('generator-jhipster/generators/entity-client');
const writeFiles = require('./files').writeFiles;

module.exports = class extends EntityClientGenerator {
    constructor(args, opts) {
        super(args, {fromBlueprint: true, ...opts});

        if (!this.jhipsterContext) {
            this.error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprint entity-cards')}`);
        }
    }

    get writing() {
        const phaseFromJHipster = super._writing();
        const additionnalFiles = writeFiles();
        return Object.assign(phaseFromJHipster, additionnalFiles);
    }

    get end() {
        return super._end();
    }
};
