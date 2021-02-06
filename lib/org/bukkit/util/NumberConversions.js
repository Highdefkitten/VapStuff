export default class NumberConversions {
    static get $javaClass() {
        return Java.type('org.bukkit.util.NumberConversions');
    }
    static $isInstance(obj) {
        return obj instanceof NumberConversions.$javaClass;
    }
    static ceil(...args) {
        return NumberConversions.$javaClass.ceil(...args);
    }
    static checkFinite(...args) {
        return NumberConversions.$javaClass.checkFinite(...args);
    }
    static floor(...args) {
        return NumberConversions.$javaClass.floor(...args);
    }
    static isFinite(...args) {
        return NumberConversions.$javaClass.isFinite(...args);
    }
    static round(...args) {
        return NumberConversions.$javaClass.round(...args);
    }
    static square(...args) {
        return NumberConversions.$javaClass.square(...args);
    }
    static toByte(...args) {
        return NumberConversions.$javaClass.toByte(...args);
    }
    static toDouble(...args) {
        return NumberConversions.$javaClass.toDouble(...args);
    }
    static toFloat(...args) {
        return NumberConversions.$javaClass.toFloat(...args);
    }
    static toInt(...args) {
        return NumberConversions.$javaClass.toInt(...args);
    }
    static toLong(...args) {
        return NumberConversions.$javaClass.toLong(...args);
    }
    static toShort(...args) {
        return NumberConversions.$javaClass.toShort(...args);
    }
}
