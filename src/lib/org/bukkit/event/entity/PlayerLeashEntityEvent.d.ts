import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface PlayerLeashEntityEvent extends Event, Cancellable {
    getEntity(): Entity;
    getEventName(): string;
    getHandlers(): HandlerList;
    getLeashHolder(): Entity;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerLeashEntityEvent {
    static get $javaClass(): any;
    constructor(what: Entity, leashHolder: Entity, leasher: Player);
    static getHandlerList(): HandlerList;
}
