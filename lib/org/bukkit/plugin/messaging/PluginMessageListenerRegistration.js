"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginMessageListenerRegistration {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.PluginMessageListenerRegistration');
    }
    static $isInstance(obj) {
        return obj instanceof PluginMessageListenerRegistration.$javaClass;
    }
    constructor(...args) {
        return new PluginMessageListenerRegistration.$javaClass(...args);
    }
}
exports.default = PluginMessageListenerRegistration;