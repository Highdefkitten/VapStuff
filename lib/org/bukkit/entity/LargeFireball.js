export default class LargeFireball {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LargeFireball');
    }
    static $isInstance(obj) {
        return obj instanceof LargeFireball.$javaClass;
    }
}
