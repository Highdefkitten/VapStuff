export default class EnchantmentWrapper {
    static get $javaClass() {
        return Java.type('org.bukkit.enchantments.EnchantmentWrapper');
    }
    static $isInstance(obj) {
        return obj instanceof EnchantmentWrapper.$javaClass;
    }
    constructor(...args) {
        return new EnchantmentWrapper.$javaClass(...args);
    }
    static get ARROW_DAMAGE() {
        return EnchantmentWrapper.$javaClass.ARROW_DAMAGE;
    }
    static get ARROW_FIRE() {
        return EnchantmentWrapper.$javaClass.ARROW_FIRE;
    }
    static get ARROW_INFINITE() {
        return EnchantmentWrapper.$javaClass.ARROW_INFINITE;
    }
    static get ARROW_KNOCKBACK() {
        return EnchantmentWrapper.$javaClass.ARROW_KNOCKBACK;
    }
    static get BINDING_CURSE() {
        return EnchantmentWrapper.$javaClass.BINDING_CURSE;
    }
    static get CHANNELING() {
        return EnchantmentWrapper.$javaClass.CHANNELING;
    }
    static get DAMAGE_ALL() {
        return EnchantmentWrapper.$javaClass.DAMAGE_ALL;
    }
    static get DAMAGE_ARTHROPODS() {
        return EnchantmentWrapper.$javaClass.DAMAGE_ARTHROPODS;
    }
    static get DAMAGE_UNDEAD() {
        return EnchantmentWrapper.$javaClass.DAMAGE_UNDEAD;
    }
    static get DEPTH_STRIDER() {
        return EnchantmentWrapper.$javaClass.DEPTH_STRIDER;
    }
    static get DIG_SPEED() {
        return EnchantmentWrapper.$javaClass.DIG_SPEED;
    }
    static get DURABILITY() {
        return EnchantmentWrapper.$javaClass.DURABILITY;
    }
    static get FIRE_ASPECT() {
        return EnchantmentWrapper.$javaClass.FIRE_ASPECT;
    }
    static get FROST_WALKER() {
        return EnchantmentWrapper.$javaClass.FROST_WALKER;
    }
    static get IMPALING() {
        return EnchantmentWrapper.$javaClass.IMPALING;
    }
    static get KNOCKBACK() {
        return EnchantmentWrapper.$javaClass.KNOCKBACK;
    }
    static get LOOT_BONUS_BLOCKS() {
        return EnchantmentWrapper.$javaClass.LOOT_BONUS_BLOCKS;
    }
    static get LOOT_BONUS_MOBS() {
        return EnchantmentWrapper.$javaClass.LOOT_BONUS_MOBS;
    }
    static get LOYALTY() {
        return EnchantmentWrapper.$javaClass.LOYALTY;
    }
    static get LUCK() {
        return EnchantmentWrapper.$javaClass.LUCK;
    }
    static get LURE() {
        return EnchantmentWrapper.$javaClass.LURE;
    }
    static get MENDING() {
        return EnchantmentWrapper.$javaClass.MENDING;
    }
    static get MULTISHOT() {
        return EnchantmentWrapper.$javaClass.MULTISHOT;
    }
    static get OXYGEN() {
        return EnchantmentWrapper.$javaClass.OXYGEN;
    }
    static get PIERCING() {
        return EnchantmentWrapper.$javaClass.PIERCING;
    }
    static get PROTECTION_ENVIRONMENTAL() {
        return EnchantmentWrapper.$javaClass.PROTECTION_ENVIRONMENTAL;
    }
    static get PROTECTION_EXPLOSIONS() {
        return EnchantmentWrapper.$javaClass.PROTECTION_EXPLOSIONS;
    }
    static get PROTECTION_FALL() {
        return EnchantmentWrapper.$javaClass.PROTECTION_FALL;
    }
    static get PROTECTION_FIRE() {
        return EnchantmentWrapper.$javaClass.PROTECTION_FIRE;
    }
    static get PROTECTION_PROJECTILE() {
        return EnchantmentWrapper.$javaClass.PROTECTION_PROJECTILE;
    }
    static get QUICK_CHARGE() {
        return EnchantmentWrapper.$javaClass.QUICK_CHARGE;
    }
    static get RIPTIDE() {
        return EnchantmentWrapper.$javaClass.RIPTIDE;
    }
    static get SILK_TOUCH() {
        return EnchantmentWrapper.$javaClass.SILK_TOUCH;
    }
    static get SOUL_SPEED() {
        return EnchantmentWrapper.$javaClass.SOUL_SPEED;
    }
    static get SWEEPING_EDGE() {
        return EnchantmentWrapper.$javaClass.SWEEPING_EDGE;
    }
    static get THORNS() {
        return EnchantmentWrapper.$javaClass.THORNS;
    }
    static get VANISHING_CURSE() {
        return EnchantmentWrapper.$javaClass.VANISHING_CURSE;
    }
    static get WATER_WORKER() {
        return EnchantmentWrapper.$javaClass.WATER_WORKER;
    }
    static getByKey(...args) {
        return EnchantmentWrapper.$javaClass.getByKey(...args);
    }
    static getByName(...args) {
        return EnchantmentWrapper.$javaClass.getByName(...args);
    }
    static isAcceptingRegistrations(...args) {
        return EnchantmentWrapper.$javaClass.isAcceptingRegistrations(...args);
    }
    static registerEnchantment(...args) {
        return EnchantmentWrapper.$javaClass.registerEnchantment(...args);
    }
    static stopAcceptingRegistrations(...args) {
        return EnchantmentWrapper.$javaClass.stopAcceptingRegistrations(...args);
    }
    static values(...args) {
        return EnchantmentWrapper.$javaClass.values(...args);
    }
}
