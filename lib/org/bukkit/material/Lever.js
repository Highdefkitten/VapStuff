"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lever {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Lever');
    }
    static $isInstance(obj) {
        return obj instanceof Lever.$javaClass;
    }
    constructor(...args) {
        return new Lever.$javaClass(...args);
    }
}
exports.default = Lever;