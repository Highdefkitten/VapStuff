export default class Fence {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Fence');
    }
    static $isInstance(obj) {
        return obj instanceof Fence.$javaClass;
    }
}
