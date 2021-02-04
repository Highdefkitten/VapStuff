import InventoryContents from '../../../fr/minuskube/inv/content/InventoryContents.js';
import InventoryProvider from '../../../fr/minuskube/inv/content/InventoryProvider.js';
import Player from '../../../org/bukkit/entity/Player.js';
export default interface SmartInventoryProvider extends InventoryProvider {
    init(player: Player, contents: InventoryContents): void;
    update(player: Player, contents: InventoryContents): void;
}
export default class SmartInventoryProvider {
    static get $javaClass(): any;
    constructor(scriptableObject: any);
}
