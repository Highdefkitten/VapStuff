import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import Redstone from './Redstone.js';
export default interface Command extends MaterialData, Redstone {
    clone(): any;
    clone(): MaterialData;
    clone(): Command;
    getData(): number;
    getItemType(): Material;
    isPowered(): boolean;
    setData(data: number): void;
    setPowered(bool: boolean): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Command {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(type: Material, data: number);
}