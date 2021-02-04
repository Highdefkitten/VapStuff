import Bat from '../../../../org/bukkit/entity/Bat.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BatToggleSleepEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isAwake(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class BatToggleSleepEvent {
    static get $javaClass(): any;
    constructor(what: Bat, awake: boolean);
    static getHandlerList(): HandlerList;
}
