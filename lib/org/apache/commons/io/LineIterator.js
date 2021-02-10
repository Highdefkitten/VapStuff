"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LineIterator {
    static get $javaClass() {
        return Java.type('org.apache.commons.io.LineIterator');
    }
    static $isInstance(obj) {
        return obj instanceof LineIterator.$javaClass;
    }
    constructor(...args) {
        return new LineIterator.$javaClass(...args);
    }
    static closeQuietly(...args) {
        return LineIterator.$javaClass.closeQuietly(...args);
    }
}
exports.default = LineIterator;