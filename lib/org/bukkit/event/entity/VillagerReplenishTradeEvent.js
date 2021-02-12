"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VillagerReplenishTradeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.VillagerReplenishTradeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VillagerReplenishTradeEvent.$javaClass;
    }
    constructor(...args) {
        return new VillagerReplenishTradeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VillagerReplenishTradeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = VillagerReplenishTradeEvent;