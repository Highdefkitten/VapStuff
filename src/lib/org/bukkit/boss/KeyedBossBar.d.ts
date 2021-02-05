import BarColor from './BarColor.js';
import BarFlag from './BarFlag.js';
import BarStyle from './BarStyle.js';
import BossBar from './BossBar.js';
import Keyed from '../../../org/bukkit/Keyed.js';
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js';
import Player from '../../../org/bukkit/entity/Player.js';
export default interface KeyedBossBar extends BossBar, Keyed {
    addFlag(arg0: BarFlag): void;
    addPlayer(arg0: Player): void;
    getColor(): BarColor;
    getKey(): NamespacedKey;
    getPlayers(): Array<Player>;
    getProgress(): number;
    getStyle(): BarStyle;
    getTitle(): string;
    hasFlag(arg0: BarFlag): boolean;
    hide(): void;
    isVisible(): boolean;
    removeAll(): void;
    removeFlag(arg0: BarFlag): void;
    removePlayer(arg0: Player): void;
    setColor(arg0: BarColor): void;
    setProgress(arg0: number): void;
    setStyle(arg0: BarStyle): void;
    setTitle(arg0: string): void;
    setVisible(arg0: boolean): void;
    show(): void;
}
export default class KeyedBossBar {
    static get $javaClass(): any;
}