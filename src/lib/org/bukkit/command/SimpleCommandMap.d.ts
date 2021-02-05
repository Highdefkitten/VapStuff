import Command from './Command.js';
import CommandMap from './CommandMap.js';
import CommandSender from './CommandSender.js';
import Location from '../../../org/bukkit/Location.js';
import Server from '../../../org/bukkit/Server.js';
export default interface SimpleCommandMap extends CommandMap {
    clearCommands(): void;
    dispatch(sender: CommandSender, commandLine: string): boolean;
    getCommand(_name: string): Command;
    getCommands(): Array<Command>;
    register(fallbackPrefix: string, command: Command): boolean;
    register(label: string, fallbackPrefix: string, command: Command): boolean;
    registerAll(fallbackPrefix: string, commands: Array<any>): void;
    registerServerAliases(): void;
    setFallbackCommands(): void;
    tabComplete(sender: CommandSender, cmdLine: string): Array<string>;
    tabComplete(sender: CommandSender, cmdLine: string, location: Location): Array<string>;
}
export default class SimpleCommandMap {
    static get $javaClass(): any;
    constructor(server: Server);
}