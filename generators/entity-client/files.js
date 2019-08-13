const constants = require('generator-jhipster/generators/generator-constants');

const ANGULAR_DIR = constants.ANGULAR_DIR;

const additionalFiles = {
    client: [
        {
            path: ANGULAR_DIR,
            templates: [
                {
                    file: 'entities/entity-management.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.component.html`
                },
                {
                    file: 'entities/entity-management.component.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.component.ts`
                },
            ]
        }
    ]
}

module.exports = {
    writeFiles,
    additionalFiles
};

function writeFiles() {
    return {
        writeAdditionalClientFiles() {
            if (this.skipClient) return;

            this.writeFilesToDisk(
                additionalFiles,
                this,
                false
            );
        }
    };
}

