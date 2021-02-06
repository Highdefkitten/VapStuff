export default class JavaPlugin {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.java.JavaPlugin');
    }
    static $isInstance(obj) {
        return obj instanceof JavaPlugin.$javaClass;
    }
    constructor(...args) {
        return new JavaPlugin.$javaClass(...args);
    }
    static getPlugin(...args) {
        return JavaPlugin.$javaClass.getPlugin(...args);
    }
    static getProvidingPlugin(...args) {
        return JavaPlugin.$javaClass.getProvidingPlugin(...args);
    }
}
