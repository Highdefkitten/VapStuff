export default class FilterOutputStream {
    static get $javaClass() {
        return Java.type('java.io.FilterOutputStream');
    }
    constructor(...args) {
        return new FilterOutputStream.$javaClass(...args);
    }
}
