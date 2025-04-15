"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var userName = "Saumya";
var API_KEY = "abc";
var number;
number = 34;
var isValid;
isValid = true;
var userID = "abc1";
userID = 123;
var user;
user = {
    name: "Vidu",
    age: 34,
    id: "123",
    isAdmin: true,
};
// let hobbies: Array<string>;
var hobbies;
hobbies = ["Sports", "Cooking", "Reading"];
function add(a, b) {
    var result = a + b;
    console.log(result);
    return result;
}
function calculate(a, b, calFn) {
    calFn(a, b);
}
calculate(2, 3, add);
var creds;
creds = {
    password: "abc",
    email: "abc@gmail.com",
};
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) { }
login(new AuthCredentials());
var admin = {
    permission: ["login"],
    userName: "Saumya",
};
var pupil;
pupil = {
    permission: ["admin"],
    userName: "Amila",
};
var role;
role = "admin";
role = "user";
function performAction(action, role) {
    if (role === "admin" && typeof action === "string") {
    }
}
//Generic types
var roles;
roles = ["admin", "user"];
var textStorage = {
    storage: ["cheese"],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (user) { },
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var newUser = merge({ name: "Saumya" }, { age: 25 });
newUser.name;
