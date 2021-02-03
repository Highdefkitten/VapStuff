export default class Team$OptionStatus {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.Team$OptionStatus');
    }
    static get ALWAYS() {
        return this.$javaClass.ALWAYS;
    }
    static get FOR_OTHER_TEAMS() {
        return this.$javaClass.FOR_OTHER_TEAMS;
    }
    static get FOR_OWN_TEAM() {
        return this.$javaClass.FOR_OWN_TEAM;
    }
    static get NEVER() {
        return this.$javaClass.NEVER;
    }
}
