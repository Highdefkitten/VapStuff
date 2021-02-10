"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rail$Shape {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Rail$Shape');
    }
    static $isInstance(obj) {
        return obj instanceof Rail$Shape.$javaClass;
    }
    static get ASCENDING_EAST() {
        return this.$javaClass.ASCENDING_EAST;
    }
    static get ASCENDING_NORTH() {
        return this.$javaClass.ASCENDING_NORTH;
    }
    static get ASCENDING_SOUTH() {
        return this.$javaClass.ASCENDING_SOUTH;
    }
    static get ASCENDING_WEST() {
        return this.$javaClass.ASCENDING_WEST;
    }
    static get EAST_WEST() {
        return this.$javaClass.EAST_WEST;
    }
    static get NORTH_EAST() {
        return this.$javaClass.NORTH_EAST;
    }
    static get NORTH_SOUTH() {
        return this.$javaClass.NORTH_SOUTH;
    }
    static get NORTH_WEST() {
        return this.$javaClass.NORTH_WEST;
    }
    static get SOUTH_EAST() {
        return this.$javaClass.SOUTH_EAST;
    }
    static get SOUTH_WEST() {
        return this.$javaClass.SOUTH_WEST;
    }
}
exports.default = Rail$Shape;
