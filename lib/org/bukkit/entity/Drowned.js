export default class Drowned {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Drowned');
    }
    static $isInstance(obj) {
        return obj instanceof Drowned.$javaClass;
    }
}
