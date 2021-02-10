"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityPotionEffectEvent$Action {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPotionEffectEvent$Action');
    }
    static $isInstance(obj) {
        return obj instanceof EntityPotionEffectEvent$Action.$javaClass;
    }
    static get ADDED() {
        return this.$javaClass.ADDED;
    }
    static get CHANGED() {
        return this.$javaClass.CHANGED;
    }
    static get CLEARED() {
        return this.$javaClass.CLEARED;
    }
    static get REMOVED() {
        return this.$javaClass.REMOVED;
    }
}
exports.default = EntityPotionEffectEvent$Action;