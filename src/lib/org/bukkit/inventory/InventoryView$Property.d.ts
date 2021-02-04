import InventoryType from '../../../org/bukkit/event/inventory/InventoryType.js';
export default interface InventoryView$Property {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    getId(): number;
    getType(): InventoryType;
    name(): string;
    ordinal(): number;
}
export default class InventoryView$Property {
    static get $javaClass(): any;
    static get BOOK_PAGE(): InventoryView$Property;
    static get BREW_TIME(): InventoryView$Property;
    static get BURN_TIME(): InventoryView$Property;
    static get COOK_TIME(): InventoryView$Property;
    static get ENCHANT_BUTTON1(): InventoryView$Property;
    static get ENCHANT_BUTTON2(): InventoryView$Property;
    static get ENCHANT_BUTTON3(): InventoryView$Property;
    static get ENCHANT_ID1(): InventoryView$Property;
    static get ENCHANT_ID2(): InventoryView$Property;
    static get ENCHANT_ID3(): InventoryView$Property;
    static get ENCHANT_LEVEL1(): InventoryView$Property;
    static get ENCHANT_LEVEL2(): InventoryView$Property;
    static get ENCHANT_LEVEL3(): InventoryView$Property;
    static get ENCHANT_XP_SEED(): InventoryView$Property;
    static get FUEL_TIME(): InventoryView$Property;
    static get LEVELS(): InventoryView$Property;
    static get PRIMARY_EFFECT(): InventoryView$Property;
    static get REPAIR_COST(): InventoryView$Property;
    static get SECONDARY_EFFECT(): InventoryView$Property;
    static get TICKS_FOR_CURRENT_FUEL(): InventoryView$Property;
    static get TICKS_FOR_CURRENT_SMELTING(): InventoryView$Property;
}
