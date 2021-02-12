"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameMode {
    static get $javaClass() {
        return Java.type('org.bukkit.GameMode');
    }
    static $isInstance(obj) {
        return obj instanceof GameMode.$javaClass;
    }
    static get ADVENTURE() {
        return this.$javaClass.ADVENTURE;
    }
    static get CREATIVE() {
        return this.$javaClass.CREATIVE;
    }
    static get SPECTATOR() {
        return this.$javaClass.SPECTATOR;
    }
    static get SURVIVAL() {
        return this.$javaClass.SURVIVAL;
    }
}
exports.default = GameMode;