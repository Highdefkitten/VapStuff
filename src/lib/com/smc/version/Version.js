export default class Version {
    static get $javaClass() {
        return Java.type('com.smc.version.Version');
    }
    constructor(...args) {
        return new Version.$javaClass(...args);
    }
    static access$getCOMPARATOR$cp(...args) {
        return Version.$javaClass.access$getCOMPARATOR$cp(...args);
    }
    static getCOMPARATOR(...args) {
        return Version.$javaClass.getCOMPARATOR(...args);
    }
    static of(...args) {
        return Version.$javaClass.of(...args);
    }
    static parse(...args) {
        return Version.$javaClass.parse(...args);
    }
}