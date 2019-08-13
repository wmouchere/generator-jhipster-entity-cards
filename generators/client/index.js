/* eslint-disable consistent-return */
const chalk = require('chalk');
const ClientGenerator = require('generator-jhipster/generators/client');

module.exports = class extends ClientGenerator {
    constructor(args, opts) {
        super(args, Object.assign({ fromBlueprint: true }, opts));

        const jhContext = (this.jhipsterContext = this.options.jhipsterContext);

        if (!jhContext) {
            this.error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprint entity-cards')}`);
        }

        this.configOptions = jhContext.configOptions || {};
        // This sets up options for this sub generator and is being reused from JHipster
        jhContext.setupClientOptions(this, jhContext);
    }

    get initializing() {
        return super._initializing();
    }

    get prompting() {
        return super._prompting();
    }

    get configuring() {
        return super._configuring();
    }

    get default() {
        return super._default();
    }

    get writing() {
        const phaseFromJHipster = super._writing();
        const customPhaseSteps = {
            needleStyles() {
                this.addVendorSCSSStyle(
`.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}`
                );
                this.addMainSCSSStyle(
`.toggle-card {
  margin-right: 10px;
}`
                );
                this.addMainSCSSStyle(
`.card-footer .btn-group {
  width: 100%;
}`
                );
            }
        };
        return Object.assign(phaseFromJHipster, customPhaseSteps);
    }

    get install() {
        return super._install();
    }

    get end() {
        return super._end();
    }
};
