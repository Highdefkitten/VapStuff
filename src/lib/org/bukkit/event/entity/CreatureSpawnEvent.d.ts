import CreatureSpawnEvent$SpawnReason from './CreatureSpawnEvent$SpawnReason.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntitySpawnEvent from './EntitySpawnEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface CreatureSpawnEvent extends EntitySpawnEvent {
    getEntity(): Entity;
    getEntity(): LivingEntity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getLocation(): Location;
    getSpawnReason(): CreatureSpawnEvent$SpawnReason;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class CreatureSpawnEvent {
    static get $javaClass(): any;
    constructor(spawnee: LivingEntity, spawnReason: CreatureSpawnEvent$SpawnReason);
    static getHandlerList(): HandlerList;
}
