export default class FluidCollisionMode {
    static get $javaClass() {
        return Java.type('org.bukkit.FluidCollisionMode');
    }
    static get ALWAYS() {
        return this.$javaClass.ALWAYS;
    }
    static get NEVER() {
        return this.$javaClass.NEVER;
    }
    static get SOURCE_ONLY() {
        return this.$javaClass.SOURCE_ONLY;
    }
}
