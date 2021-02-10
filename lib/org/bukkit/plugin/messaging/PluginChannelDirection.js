"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginChannelDirection {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.PluginChannelDirection');
    }
    static $isInstance(obj) {
        return obj instanceof PluginChannelDirection.$javaClass;
    }
    static get INCOMING() {
        return this.$javaClass.INCOMING;
    }
    static get OUTGOING() {
        return this.$javaClass.OUTGOING;
    }
}
exports.default = PluginChannelDirection;