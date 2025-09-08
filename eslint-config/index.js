"use strict";

const importDeclarationNewline = require('./modules-newlines');

module.exports = {
    rules: {
        'import-declaration-newline': importDeclarationNewline,
    },
    configs: {
        recommended: {
            rules: {
                'modules-newlines/import-declaration-newline': 'warn',
            },
        },
    },
};
