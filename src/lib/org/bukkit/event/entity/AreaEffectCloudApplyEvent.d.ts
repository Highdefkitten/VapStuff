import AreaEffectCloud from '../../../../org/bukkit/entity/AreaEffectCloud.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface AreaEffectCloudApplyEvent extends EntityEvent, Cancellable {
    getAffectedEntities(): Array<LivingEntity>;
    getEntity(): Entity;
    getEntity(): AreaEffectCloud;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class AreaEffectCloudApplyEvent {
    static get $javaClass(): any;
    constructor(entity: AreaEffectCloud, affectedEntities: Array<any>);
    static getHandlerList(): HandlerList;
}
