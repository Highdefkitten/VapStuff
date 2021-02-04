import LootTable from './LootTable.js';
export default interface Lootable {
    getLootTable(): LootTable;
    getSeed(): number;
    setLootTable(arg0: LootTable): void;
    setSeed(arg0: number): void;
}
export default class Lootable {
    static get $javaClass(): any;
}
