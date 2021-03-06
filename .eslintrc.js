module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended"],
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
        "object-curly-spacing": [
          "warn",
          "always"
        ],
    },
    "globals": {
        "$": true
    },
    "plugins": [
        "react"
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
