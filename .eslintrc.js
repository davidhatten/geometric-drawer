module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
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
    }
};
