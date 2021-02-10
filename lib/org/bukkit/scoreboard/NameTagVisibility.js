"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NameTagVisibility {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.NameTagVisibility');
    }
    static $isInstance(obj) {
        return obj instanceof NameTagVisibility.$javaClass;
    }
    static get ALWAYS() {
        return this.$javaClass.ALWAYS;
    }
    static get HIDE_FOR_OTHER_TEAMS() {
        return this.$javaClass.HIDE_FOR_OTHER_TEAMS;
    }
    static get HIDE_FOR_OWN_TEAM() {
        return this.$javaClass.HIDE_FOR_OWN_TEAM;
    }
    static get NEVER() {
        return this.$javaClass.NEVER;
    }
}
exports.default = NameTagVisibility;