"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attachable {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Attachable');
    }
    static $isInstance(obj) {
        return obj instanceof Attachable.$javaClass;
    }
}
exports.default = Attachable;