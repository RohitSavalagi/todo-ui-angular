import templateParser from "@angular-eslint/template-parser";
import angularEslintTemplate from "@angular-eslint/eslint-plugin-template";
import angularEslintEslintPlugin from "@angular-eslint/eslint-plugin";
import ModulesNewLinePlugin from "./eslint-config/index.js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import typescriptEslintParser from "@typescript-eslint/parser";
import _import from "eslint-plugin-import";
import js from "@eslint/js";
import tsEslint from "typescript-eslint";

export default [
    {
        ignores: [
            "*.d.ts",
            "node_modules/",
            "jest.config.ts",
            "jest-config/jest-js-env.ts",
            "src/environments/*",
            "src/app/services/hammer-plugin-a6.patch.ts",
            "src/polyfills.ts",
            "src/test.ts",
            "src/hmr.ts",
            "src/**/*.spec.ts",
            "src/assets/route.js",
            "src/app/assets/route.js",
            "src/app/components/theme/ux-theme.helper.ts",
        ],
    },
    {
        files: ["**/*.component.html"],
        plugins: {
            "@angular-eslint/template": angularEslintTemplate,
        },
        languageOptions: {
            parser: templateParser,
        },
        rules: {
            "@angular-eslint/template/no-negated-async": "error",
        },
    },
    {
        files: ["**/*.js"],
        ...js.configs.recommended,
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
        },
    },
    ...tsEslint.configs.recommendedTypeChecked.map(config => ({
        ...config,
        files: ["**/*.ts"],
    })),
    ...tsEslint.configs.recommended.map(config => ({
        ...config,
        files: ["**/*.ts"],
    })),
    {
        files: ["**/*.ts"],
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            "@stylistic/ts": stylisticTs,
            "@angular-eslint": angularEslintEslintPlugin,
            "modules-newlines": ModulesNewLinePlugin,
            import: _import,
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            parser: typescriptEslintParser,

            parserOptions: {
                project: "tsconfig.json",
                createDefaultProgram: true,
            },
        },
        rules: {
            ..._import.configs.errors.rules,
            ..._import.configs.warnings.rules,
            ..._import.configs.recommended.rules,
            ...angularEslintEslintPlugin.configs.recommended.rules,
            "import/no-unresolved": "off",
            "import/named": "warn",
            "import/namespace": "warn",
            "import/no-named-as-default": "off",
            "import/export": "warn",
            "import/order": [
                "error",
                {
                    groups: ["builtin", "external", "parent", "sibling", "index"],
                    "newlines-between": "always",
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                },
            ],
            "arrow-body-style": "error",
            "quote-props": "off",
            "brace-style": ["error", "1tbs"],
            "constructor-super": "error",
            curly: "error",
            "eol-last": "error",
            eqeqeq: ["error", "smart"],
            "id-blacklist": "off",
            "id-match": "off",
            "modules-newlines/import-declaration-newline": "error",
            "import/no-deprecated": "warn",
            "max-len": [
                "error",
                {
                    code: 3500,
                },
            ],
            "no-bitwise": "error",
            "no-caller": "error",
            "no-console": [
                "error",
                {
                    allow: [
                        "warn",
                        "dir",
                        "timeLog",
                        "assert",
                        "clear",
                        "count",
                        "countReset",
                        "group",
                        "groupEnd",
                        "table",
                        "dirxml",
                        "error",
                        "groupCollapsed",
                        "Console",
                        "profile",
                        "profileEnd",
                        "timeStamp",
                        "context",
                    ],
                },
            ],
            "no-debugger": "error",
            "no-empty": "off",
            "no-eval": "error",
            "no-fallthrough": "error",
            "no-multiple-empty-lines": "error",
            "no-new-wrappers": "error",
            "no-restricted-imports": ["error", "rxjs/index"],
            "no-throw-literal": "error",
            "no-trailing-spaces": "off",
            "no-undef-init": "error",
            "no-underscore-dangle": "off",
            "no-unused-labels": "error",
            "no-var": "error",
            "prefer-const": "error",
            radix: "error",
            "spaced-comment": [
                "error",
                "always",
                {
                    markers: ["/"],
                },
            ],
            "space-before-function-paren": [
                "error",
                {
                    anonymous: "never",
                    named: "never",
                    asyncArrow: "always",
                },
            ],
            "keyword-spacing": [
                "error",
                {
                    before: true,
                    after: true,
                },
            ],
            "space-infix-ops": "error",
            "space-before-blocks": "error",
            semi: ["error", "always"],
            "comma-spacing": ["error", { before: false, after: true }],
            "function-call-argument-newline": ["error", "consistent"],
            "object-curly-newline": [
                "error",
                {
                    ImportDeclaration: { multiline: true, minProperties: 2 },
                    ExportDeclaration: { multiline: true, minProperties: 2 },
                },
            ],
            "no-useless-escape": "warn",
            "prefer-rest-params": "warn",
            "no-shadow": "off",
            "@angular-eslint/component-class-suffix": "error",
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "oe",
                    style: "kebab-case",
                },
            ],
            "@angular-eslint/directive-class-suffix": "error",
            "@angular-eslint/no-host-metadata-property": "off",
            "@angular-eslint/prefer-standalone": "off",
            "@angular-eslint/no-input-rename": "error",
            "@angular-eslint/no-inputs-metadata-property": "error",
            "@angular-eslint/no-output-on-prefix": "off",
            "@angular-eslint/no-output-rename": "error",
            "@angular-eslint/no-outputs-metadata-property": "error",
            "@angular-eslint/use-lifecycle-interface": "error",
            "@angular-eslint/no-empty-lifecycle-method": "error",
            "@angular-eslint/use-pipe-transform-interface": "error",
            "@stylistic/ts/quotes": ["error", "single"],
            "@stylistic/ts/type-annotation-spacing": "error",
            "@stylistic/ts/indent": "error",
            "@stylistic/ts/comma-dangle": ["error", "always-multiline"],
            "@stylistic/ts/member-delimiter-style": [
                "error",
                {
                    multiline: {
                        delimiter: "semi",
                        requireLast: true,
                    },
                    singleline: {
                        delimiter: "semi",
                        requireLast: false,
                    },
                },
            ],
            "@typescript-eslint/typedef": [
                "error",
                {
                    arrayDestructuring: false,
                    arrowParameter: false,
                    memberVariableDeclaration: false,
                    objectDestructuring: false,
                    parameter: true,
                    propertyDeclaration: false,
                    variableDeclaration: false,
                    variableDeclarationIgnoreFunction: false,
                },
            ],
            "@typescript-eslint/explicit-function-return-type": [
                "error",
                {
                    allowConciseArrowFunctionExpressionsStartingWithVoid: false,
                    allowDirectConstAssertionInArrowFunctions: true,
                },
            ],
            "@typescript-eslint/no-shadow": ["error"],
            "@typescript-eslint/consistent-type-definitions": "error",
            "@typescript-eslint/naming-convention": "warn",
            "@typescript-eslint/no-unsafe-call": "warn",
            "@typescript-eslint/dot-notation": "off",
            "@typescript-eslint/explicit-member-accessibility": [
                "off",
                {
                    accessibility: "explicit",
                },
            ],
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/member-ordering": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-empty-interface": "error",
            "@typescript-eslint/no-misused-new": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            // "@typescript-eslint/recommended-requiring-type-checking": "error",
            "@typescript-eslint/prefer-function-type": "error",
            "@typescript-eslint/no-unsafe-argument": "error",
            "@typescript-eslint/no-this-alias": "warn",
            "@typescript-eslint/unbound-method": [
                "error",
                {
                    ignoreStatic: true,
                },
            ],
            "@typescript-eslint/no-unsafe-assignment": "error",
            "@typescript-eslint/no-unsafe-member-access": "error",
            "@typescript-eslint/no-unsafe-return": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-misused-promises": "error",
            "@typescript-eslint/no-unused-vars": ["error"],
            "@typescript-eslint/restrict-plus-operands": "error",
            "@typescript-eslint/restrict-template-expressions": "error",
            "@typescript-eslint/unified-signatures": "error",
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                },
            ],
        },
    },
];

