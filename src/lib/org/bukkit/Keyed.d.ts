import NamespacedKey from './NamespacedKey.js';
export default interface Keyed {
    getKey(): NamespacedKey;
}
export default class Keyed {
    static get $javaClass(): any;
}
