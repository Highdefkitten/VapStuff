export default class LeatherArmorMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.LeatherArmorMeta');
    }
    static $isInstance(obj) {
        return obj instanceof LeatherArmorMeta.$javaClass;
    }
}
