export default class EnderCrystal {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EnderCrystal');
    }
    static $isInstance(obj) {
        return obj instanceof EnderCrystal.$javaClass;
    }
}
