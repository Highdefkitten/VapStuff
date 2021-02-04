import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface ItemDespawnEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): Item;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getLocation(): Location;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class ItemDespawnEvent {
    static get $javaClass(): any;
    constructor(despawnee: Item, loc: Location);
    static getHandlerList(): HandlerList;
}
