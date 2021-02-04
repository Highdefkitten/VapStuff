import File from '../../../../java/io/File.js';
import Listener from '../../../../org/bukkit/event/Listener.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import PluginDescriptionFile from '../../../../org/bukkit/plugin/PluginDescriptionFile.js';
import PluginLoader from '../../../../org/bukkit/plugin/PluginLoader.js';
import Server from '../../../../org/bukkit/Server.js';
export default interface JavaPluginLoader extends PluginLoader {
    createRegisteredListeners(listener: Listener, plugin: Plugin): any;
    disablePlugin(plugin: Plugin): void;
    enablePlugin(plugin: Plugin): void;
    getPluginDescription(file: File): PluginDescriptionFile;
    getPluginFileFilters(): Array<any>;
    loadPlugin(file: File): Plugin;
}
export default class JavaPluginLoader {
    static get $javaClass(): any;
    constructor(instance: Server);
    static get pluginParentTimer(): any;
}
