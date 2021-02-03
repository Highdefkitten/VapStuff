export default class DragType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.DragType');
    }
    static get EVEN() {
        return this.$javaClass.EVEN;
    }
    static get SINGLE() {
        return this.$javaClass.SINGLE;
    }
}
