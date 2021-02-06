export default class SpawnerSpawnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.SpawnerSpawnEvent');
    }
    static $isInstance(obj) {
        return obj instanceof SpawnerSpawnEvent.$javaClass;
    }
    constructor(...args) {
        return new SpawnerSpawnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SpawnerSpawnEvent.$javaClass.getHandlerList(...args);
    }
}
