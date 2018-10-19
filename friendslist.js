"use strict";
exports.__esModule = true;
var friends = /** @class */ (function () {
    function friends(n, a, e, b) {
        this._name = n;
        this.age = a;
        this.email = e;
        this.bestfriend = b;
    }
    friends.prototype.about = function () {
        return "name: " + this._name + ", age: " + this.age + ", email: " + this.email + ", bestfriend " + this.bestfriend;
    };
    return friends;
}());
exports.friends = friends;
var phil = new friends("phil", 27, "phil@gmail.com", false);
var angie = new friends("angie", 37, "ngie@gmail.com", true);
var emilie = new friends("emilie", 37, "emilie@gmail.com", true);
var robert = new friends("robert", 32, "robert@gmail.com", false);
var lori = new friends("lori", 20, "lori@gmail.com", true);
var f2 = [];
f2.push(phil);
f2.push(angie);
f2.push(emilie);
f2.push(robert);
f2.push(lori);
