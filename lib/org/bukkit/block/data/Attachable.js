export default class Attachable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Attachable');
    }
    static $isInstance(obj) {
        return obj instanceof Attachable.$javaClass;
    }
}
