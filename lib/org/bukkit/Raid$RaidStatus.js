export default class Raid$RaidStatus {
    static get $javaClass() {
        return Java.type('org.bukkit.Raid$RaidStatus');
    }
    static get LOSS() {
        return this.$javaClass.LOSS;
    }
    static get ONGOING() {
        return this.$javaClass.ONGOING;
    }
    static get STOPPED() {
        return this.$javaClass.STOPPED;
    }
    static get VICTORY() {
        return this.$javaClass.VICTORY;
    }
}
