export default class HandlerList {
    static get $javaClass() {
        return Java.type('org.bukkit.event.HandlerList');
    }
    constructor(...args) {
        return new HandlerList.$javaClass(...args);
    }
    static bakeAll(...args) {
        return HandlerList.$javaClass.bakeAll(...args);
    }
    static getHandlerLists(...args) {
        return HandlerList.$javaClass.getHandlerLists(...args);
    }
    static getRegisteredListeners(...args) {
        return HandlerList.$javaClass.getRegisteredListeners(...args);
    }
    static unregisterAll(...args) {
        return HandlerList.$javaClass.unregisterAll(...args);
    }
}
