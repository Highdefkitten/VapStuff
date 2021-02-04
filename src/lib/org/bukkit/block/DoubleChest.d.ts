import DoubleChestInventory from '../../../org/bukkit/inventory/DoubleChestInventory.js';
import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import InventoryHolder from '../../../org/bukkit/inventory/InventoryHolder.js';
import Location from '../../../org/bukkit/Location.js';
import World from '../../../org/bukkit/World.js';
export default interface DoubleChest extends InventoryHolder {
    getInventory(): Inventory;
    getLeftSide(): InventoryHolder;
    getLocation(): Location;
    getRightSide(): InventoryHolder;
    getWorld(): World;
    getX(): number;
    getY(): number;
    getZ(): number;
}
export default class DoubleChest {
    static get $javaClass(): any;
    constructor(chest: DoubleChestInventory);
}
