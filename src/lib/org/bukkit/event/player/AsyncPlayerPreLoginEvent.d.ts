import AsyncPlayerPreLoginEvent$Result from './AsyncPlayerPreLoginEvent$Result.js';
import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import PlayerPreLoginEvent$Result from './PlayerPreLoginEvent$Result.js';
export default interface AsyncPlayerPreLoginEvent extends Event {
    allow(): void;
    disallow(result: AsyncPlayerPreLoginEvent$Result, message: string): void;
    disallow(result: PlayerPreLoginEvent$Result, message: string): void;
    getAddress(): any;
    getEventName(): string;
    getHandlers(): HandlerList;
    getKickMessage(): string;
    getLoginResult(): AsyncPlayerPreLoginEvent$Result;
    getName(): string;
    getResult(): PlayerPreLoginEvent$Result;
    getUniqueId(): string;
    isAsynchronous(): boolean;
    setKickMessage(message: string): void;
    setLoginResult(result: AsyncPlayerPreLoginEvent$Result): void;
    setResult(result: PlayerPreLoginEvent$Result): void;
}
export default class AsyncPlayerPreLoginEvent {
    static get $javaClass(): any;
    constructor(_name: string, ipAddress: any);
    constructor(_name: string, ipAddress: any, uniqueId: string);
    static getHandlerList(): HandlerList;
}