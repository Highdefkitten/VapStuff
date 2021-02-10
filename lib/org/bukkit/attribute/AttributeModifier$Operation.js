"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttributeModifier$Operation {
    static get $javaClass() {
        return Java.type('org.bukkit.attribute.AttributeModifier$Operation');
    }
    static $isInstance(obj) {
        return obj instanceof AttributeModifier$Operation.$javaClass;
    }
    static get ADD_NUMBER() {
        return this.$javaClass.ADD_NUMBER;
    }
    static get ADD_SCALAR() {
        return this.$javaClass.ADD_SCALAR;
    }
    static get MULTIPLY_SCALAR_1() {
        return this.$javaClass.MULTIPLY_SCALAR_1;
    }
}
exports.default = AttributeModifier$Operation;