export default class InventoryHolder {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.InventoryHolder');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryHolder.$javaClass;
    }
}
