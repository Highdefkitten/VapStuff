export default class InputStream {
    static get $javaClass() {
        return Java.type('java.io.InputStream');
    }
    constructor(...args) {
        return new InputStream.$javaClass(...args);
    }
}
