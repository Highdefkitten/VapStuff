"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comparator$Mode {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Comparator$Mode');
    }
    static $isInstance(obj) {
        return obj instanceof Comparator$Mode.$javaClass;
    }
    static get COMPARE() {
        return this.$javaClass.COMPARE;
    }
    static get SUBTRACT() {
        return this.$javaClass.SUBTRACT;
    }
}
exports.default = Comparator$Mode;