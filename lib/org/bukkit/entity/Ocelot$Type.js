export default class Ocelot$Type {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Ocelot$Type');
    }
    static $isInstance(obj) {
        return obj instanceof Ocelot$Type.$javaClass;
    }
    static get BLACK_CAT() {
        return this.$javaClass.BLACK_CAT;
    }
    static get RED_CAT() {
        return this.$javaClass.RED_CAT;
    }
    static get SIAMESE_CAT() {
        return this.$javaClass.SIAMESE_CAT;
    }
    static get WILD_OCELOT() {
        return this.$javaClass.WILD_OCELOT;
    }
}
