export default class CrossbowMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.CrossbowMeta');
    }
    static $isInstance(obj) {
        return obj instanceof CrossbowMeta.$javaClass;
    }
}
