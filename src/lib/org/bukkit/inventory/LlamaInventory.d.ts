import AbstractHorseInventory from './AbstractHorseInventory.js';
import HumanEntity from '../../../org/bukkit/entity/HumanEntity.js';
import InventoryHolder from './InventoryHolder.js';
import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js';
import ItemStack from './ItemStack.js';
import Location from '../../../org/bukkit/Location.js';
import Material from '../../../org/bukkit/Material.js';
export default interface LlamaInventory extends AbstractHorseInventory {
    addItem(arg0: Array<ItemStack>): any;
    all(arg0: ItemStack): any;
    all(arg0: Material): any;
    clear(): void;
    clear(arg0: number): void;
    contains(arg0: Material): boolean;
    contains(arg0: ItemStack): boolean;
    contains(arg0: ItemStack, arg1: number): boolean;
    contains(arg0: Material, arg1: number): boolean;
    containsAtLeast(arg0: ItemStack, arg1: number): boolean;
    first(arg0: ItemStack): number;
    first(arg0: Material): number;
    firstEmpty(): number;
    forEach(arg0: any): void;
    getContents(): Array<ItemStack>;
    getDecor(): ItemStack;
    getHolder(): InventoryHolder;
    getItem(arg0: number): ItemStack;
    getLocation(): Location;
    getMaxStackSize(): number;
    getSaddle(): ItemStack;
    getSize(): number;
    getStorageContents(): Array<ItemStack>;
    getType(): InventoryType;
    getViewers(): Array<HumanEntity>;
    iterator(): any;
    iterator(): any;
    iterator(arg0: number): any;
    remove(arg0: ItemStack): void;
    remove(arg0: Material): void;
    removeItem(arg0: Array<ItemStack>): any;
    setContents(arg0: Array<ItemStack>): void;
    setDecor(arg0: ItemStack): void;
    setItem(arg0: number, arg1: ItemStack): void;
    setMaxStackSize(arg0: number): void;
    setSaddle(arg0: ItemStack): void;
    setStorageContents(arg0: Array<ItemStack>): void;
    spliterator(): any;
}
export default class LlamaInventory {
    static get $javaClass(): any;
}