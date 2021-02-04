import AbstractVillager from '../../../../org/bukkit/entity/AbstractVillager.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import MerchantRecipe from '../../../../org/bukkit/inventory/MerchantRecipe.js';
export default interface VillagerAcquireTradeEvent extends EntityEvent, Cancellable {
    getEntity(): AbstractVillager;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getRecipe(): MerchantRecipe;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setRecipe(recipe: MerchantRecipe): void;
}
export default class VillagerAcquireTradeEvent {
    static get $javaClass(): any;
    constructor(what: AbstractVillager, recipe: MerchantRecipe);
    static getHandlerList(): HandlerList;
}
