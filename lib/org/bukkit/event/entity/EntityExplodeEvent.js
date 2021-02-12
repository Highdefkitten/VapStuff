"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityExplodeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityExplodeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityExplodeEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityExplodeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityExplodeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityExplodeEvent;