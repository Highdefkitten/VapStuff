"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerRiptideEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerRiptideEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerRiptideEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerRiptideEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerRiptideEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerRiptideEvent;