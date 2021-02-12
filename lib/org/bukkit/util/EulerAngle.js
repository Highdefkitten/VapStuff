"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EulerAngle {
    static get $javaClass() {
        return Java.type('org.bukkit.util.EulerAngle');
    }
    static $isInstance(obj) {
        return obj instanceof EulerAngle.$javaClass;
    }
    constructor(...args) {
        return new EulerAngle.$javaClass(...args);
    }
    static get ZERO() {
        return EulerAngle.$javaClass.ZERO;
    }
}
exports.default = EulerAngle;