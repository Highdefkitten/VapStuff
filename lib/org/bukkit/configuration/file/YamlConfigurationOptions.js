export default class YamlConfigurationOptions {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.YamlConfigurationOptions');
    }
    static $isInstance(obj) {
        return obj instanceof YamlConfigurationOptions.$javaClass;
    }
}
