"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerTakeLecternBookEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerTakeLecternBookEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerTakeLecternBookEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerTakeLecternBookEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerTakeLecternBookEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerTakeLecternBookEvent;