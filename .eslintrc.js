module.exports = {
    "extends": ["eslint:recommended", "airbnb"],
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "globals": {
        "jest": false,
        "it": false,
        "expect": false,
        "describe": false,
        "beforeEach": false,
        "beforeAll": false,
        "afterEach": false,
        "resolve": false,
        "reject": false,
        "_": false,
        "moment": false,
        "FileReader": false,
        "document": false,
        "window": false,
        "DOMParser": false
    },
    "rules": {
        "react/jsx-max-props-per-line": [
            "error",
            { "maximum": 1, "when": "always" }
        ],
        "max-len": [
            "error",
            { "code": 120 }
        ],
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "no-unused-expressions": [
            "error"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "object-shorthand": [
            "error"
        ],
        "no-duplicate-imports": [
            "error"
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "arrow-parens": [
            "error",
            "always"
        ],
        "no-param-reassign": [
            "error",
            { "props": false }
        ],
        "no-console": [
            "warn"
        ],
        "comma-dangle": [
            "off"
        ],
        "sort-keys": [
            "off"
        ],
        "sort-vars": [
            "off"
        ],
        "react/prop-types": [
            "off"
        ],
        "dot-notation": [
            "off"
        ],
        "consistent-return": [
            "off"
        ],
        "array-callback-return": [
            "off"
        ],
        "no-this-before-super": [
            "off"
        ],
        "react/forbid-prop-types": [
            "off"
        ],
        "jsx-a11y/no-autofocus": [
            "off"
        ],
        "no-restricted-syntax": [
            "off"
        ],
        "jsx-a11y/label-has-associated-control": [
            "off"
        ],
        "jsx-a11y/label-has-for": [
            "off"
        ],
        // "react/jsx-filename-extension": [
        //     "off"
        // ],
        "import/no-named-as-default": [
            "off"
        ],
        "multiline-ternary": [
            2,
            "always-multiline"
        ],
        "jsx-a11y/click-events-have-key-events": [
            "off"
        ],
        "jsx-a11y/no-static-element-interactions": [
            "off"
        ],
        "jsx-a11y/no-noninteractive-element-interactions": [
            "off"
        ]
    }
};