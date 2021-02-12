"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LazyMetadataValue$CacheStrategy {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.LazyMetadataValue$CacheStrategy');
    }
    static $isInstance(obj) {
        return obj instanceof LazyMetadataValue$CacheStrategy.$javaClass;
    }
    static get CACHE_AFTER_FIRST_EVAL() {
        return this.$javaClass.CACHE_AFTER_FIRST_EVAL;
    }
    static get CACHE_ETERNALLY() {
        return this.$javaClass.CACHE_ETERNALLY;
    }
    static get NEVER_CACHE() {
        return this.$javaClass.NEVER_CACHE;
    }
}
exports.default = LazyMetadataValue$CacheStrategy;