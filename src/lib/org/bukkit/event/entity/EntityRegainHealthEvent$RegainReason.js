export default class EntityRegainHealthEvent$RegainReason {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason');
    }
    static get CUSTOM() {
        return this.$javaClass.CUSTOM;
    }
    static get EATING() {
        return this.$javaClass.EATING;
    }
    static get ENDER_CRYSTAL() {
        return this.$javaClass.ENDER_CRYSTAL;
    }
    static get MAGIC() {
        return this.$javaClass.MAGIC;
    }
    static get MAGIC_REGEN() {
        return this.$javaClass.MAGIC_REGEN;
    }
    static get REGEN() {
        return this.$javaClass.REGEN;
    }
    static get SATIATED() {
        return this.$javaClass.SATIATED;
    }
    static get WITHER() {
        return this.$javaClass.WITHER;
    }
    static get WITHER_SPAWN() {
        return this.$javaClass.WITHER_SPAWN;
    }
}
