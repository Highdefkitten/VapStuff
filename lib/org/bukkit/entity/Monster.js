export default class Monster {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Monster');
    }
    static $isInstance(obj) {
        return obj instanceof Monster.$javaClass;
    }
}
