import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface EntityPortalEnterEvent extends EntityEvent {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getLocation(): Location;
    isAsynchronous(): boolean;
}
export default class EntityPortalEnterEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, location: Location);
    static getHandlerList(): HandlerList;
}
