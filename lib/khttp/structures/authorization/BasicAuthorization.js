export default class BasicAuthorization {
    static get $javaClass() {
        return Java.type('khttp.structures.authorization.BasicAuthorization');
    }
    constructor(...args) {
        return new BasicAuthorization.$javaClass(...args);
    }
    static copy$default(...args) {
        return BasicAuthorization.$javaClass.copy$default(...args);
    }
}