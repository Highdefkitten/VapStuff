"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServicePriority {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.ServicePriority');
    }
    static $isInstance(obj) {
        return obj instanceof ServicePriority.$javaClass;
    }
    static get High() {
        return this.$javaClass.High;
    }
    static get Highest() {
        return this.$javaClass.Highest;
    }
    static get Low() {
        return this.$javaClass.Low;
    }
    static get Lowest() {
        return this.$javaClass.Lowest;
    }
    static get Normal() {
        return this.$javaClass.Normal;
    }
}
exports.default = ServicePriority;