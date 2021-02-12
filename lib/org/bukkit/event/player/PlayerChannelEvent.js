"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerChannelEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerChannelEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerChannelEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerChannelEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerChannelEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerChannelEvent;