export default class Chest {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Chest');
    }
    static $isInstance(obj) {
        return obj instanceof Chest.$javaClass;
    }
}
