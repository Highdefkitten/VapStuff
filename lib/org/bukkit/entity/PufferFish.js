export default class PufferFish {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.PufferFish');
    }
    static $isInstance(obj) {
        return obj instanceof PufferFish.$javaClass;
    }
}
