export default class PlayerLoginEvent$Result {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerLoginEvent$Result');
    }
    static get ALLOWED() {
        return this.$javaClass.ALLOWED;
    }
    static get KICK_BANNED() {
        return this.$javaClass.KICK_BANNED;
    }
    static get KICK_FULL() {
        return this.$javaClass.KICK_FULL;
    }
    static get KICK_OTHER() {
        return this.$javaClass.KICK_OTHER;
    }
    static get KICK_WHITELIST() {
        return this.$javaClass.KICK_WHITELIST;
    }
}
