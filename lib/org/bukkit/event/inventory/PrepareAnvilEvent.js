export default class PrepareAnvilEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.PrepareAnvilEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PrepareAnvilEvent.$javaClass;
    }
    constructor(...args) {
        return new PrepareAnvilEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PrepareAnvilEvent.$javaClass.getHandlerList(...args);
    }
}
