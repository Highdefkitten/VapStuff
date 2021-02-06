export default class FireworkEffect$Type {
    static get $javaClass() {
        return Java.type('org.bukkit.FireworkEffect$Type');
    }
    static $isInstance(obj) {
        return obj instanceof FireworkEffect$Type.$javaClass;
    }
    static get BALL() {
        return this.$javaClass.BALL;
    }
    static get BALL_LARGE() {
        return this.$javaClass.BALL_LARGE;
    }
    static get BURST() {
        return this.$javaClass.BURST;
    }
    static get CREEPER() {
        return this.$javaClass.CREEPER;
    }
    static get STAR() {
        return this.$javaClass.STAR;
    }
}
