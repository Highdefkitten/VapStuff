import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityPotionEffectEvent$Action from './EntityPotionEffectEvent$Action.js';
import EntityPotionEffectEvent$Cause from './EntityPotionEffectEvent$Cause.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import PotionEffect from '../../../../org/bukkit/potion/PotionEffect.js';
import PotionEffectType from '../../../../org/bukkit/potion/PotionEffectType.js';
export default interface EntityPotionEffectEvent extends EntityEvent, Cancellable {
    getAction(): EntityPotionEffectEvent$Action;
    getCause(): EntityPotionEffectEvent$Cause;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getModifiedType(): PotionEffectType;
    getNewEffect(): PotionEffect;
    getOldEffect(): PotionEffect;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    isOverride(): boolean;
    setCancelled(cancel: boolean): void;
    setOverride(override: boolean): void;
}
export default class EntityPotionEffectEvent {
    static get $javaClass(): any;
    constructor(livingEntity: LivingEntity, oldEffect: PotionEffect, newEffect: PotionEffect, cause: EntityPotionEffectEvent$Cause, action: EntityPotionEffectEvent$Action, override: boolean);
    static getHandlerList(): HandlerList;
}