"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Skeleton$SkeletonType {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Skeleton$SkeletonType');
    }
    static $isInstance(obj) {
        return obj instanceof Skeleton$SkeletonType.$javaClass;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
    static get STRAY() {
        return this.$javaClass.STRAY;
    }
    static get WITHER() {
        return this.$javaClass.WITHER;
    }
}
exports.default = Skeleton$SkeletonType;