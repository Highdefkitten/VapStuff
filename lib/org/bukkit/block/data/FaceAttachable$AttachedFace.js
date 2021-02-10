"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FaceAttachable$AttachedFace {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.FaceAttachable$AttachedFace');
    }
    static $isInstance(obj) {
        return obj instanceof FaceAttachable$AttachedFace.$javaClass;
    }
    static get CEILING() {
        return this.$javaClass.CEILING;
    }
    static get FLOOR() {
        return this.$javaClass.FLOOR;
    }
    static get WALL() {
        return this.$javaClass.WALL;
    }
}
exports.default = FaceAttachable$AttachedFace;