export default class SoundCategory {
    static get $javaClass() {
        return Java.type('org.bukkit.SoundCategory');
    }
    static $isInstance(obj) {
        return obj instanceof SoundCategory.$javaClass;
    }
    static get AMBIENT() {
        return this.$javaClass.AMBIENT;
    }
    static get BLOCKS() {
        return this.$javaClass.BLOCKS;
    }
    static get HOSTILE() {
        return this.$javaClass.HOSTILE;
    }
    static get MASTER() {
        return this.$javaClass.MASTER;
    }
    static get MUSIC() {
        return this.$javaClass.MUSIC;
    }
    static get NEUTRAL() {
        return this.$javaClass.NEUTRAL;
    }
    static get PLAYERS() {
        return this.$javaClass.PLAYERS;
    }
    static get RECORDS() {
        return this.$javaClass.RECORDS;
    }
    static get VOICE() {
        return this.$javaClass.VOICE;
    }
    static get WEATHER() {
        return this.$javaClass.WEATHER;
    }
}
