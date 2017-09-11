module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:flowtype/recommended"],
    "rules": {
        "react/prop-types": [0],
        "no-unused-vars": [
            "warn",
            {
                "vars" : "all",
                "varsIgnorePattern": ".+Preview|.+Draw",
                "args": "all",
            }
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "backtick"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
    },
    "globals": {
        "$": true
    },
    "plugins": [
        "react",
        "flowtype"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "classes": true,
            "jsx": true
        }
    }
};
