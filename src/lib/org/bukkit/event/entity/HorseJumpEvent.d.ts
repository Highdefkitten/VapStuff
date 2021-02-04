import AbstractHorse from '../../../../org/bukkit/entity/AbstractHorse.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface HorseJumpEvent extends EntityEvent, Cancellable {
    getEntity(): AbstractHorse;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getPower(): number;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setPower(power: number): void;
}
export default class HorseJumpEvent {
    static get $javaClass(): any;
    constructor(horse: AbstractHorse, power: number);
    static getHandlerList(): HandlerList;
}
