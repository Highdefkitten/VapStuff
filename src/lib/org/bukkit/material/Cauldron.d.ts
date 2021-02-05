import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface Cauldron extends MaterialData {
    clone(): MaterialData;
    clone(): Cauldron;
    clone(): any;
    getData(): number;
    getItemType(): Material;
    isEmpty(): boolean;
    isFull(): boolean;
    setData(data: number): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Cauldron {
    static get $javaClass(): any;
    constructor();
    constructor(data: number);
    constructor(type: Material, data: number);
}