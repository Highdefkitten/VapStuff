export default class WorldCreator {
    static get $javaClass() {
        return Java.type('org.bukkit.WorldCreator');
    }
    static $isInstance(obj) {
        return obj instanceof WorldCreator.$javaClass;
    }
    constructor(...args) {
        return new WorldCreator.$javaClass(...args);
    }
    static getGeneratorForName(...args) {
        return WorldCreator.$javaClass.getGeneratorForName(...args);
    }
    static _name(...args) {
        return WorldCreator.$javaClass.name(...args);
    }
}
