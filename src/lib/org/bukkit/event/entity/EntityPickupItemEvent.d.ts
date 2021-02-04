import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityPickupItemEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getItem(): Item;
    getRemaining(): number;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class EntityPickupItemEvent {
    static get $javaClass(): any;
    constructor(entity: LivingEntity, item: Item, remaining: number);
    static getHandlerList(): HandlerList;
}
