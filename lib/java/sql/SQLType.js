export default class SQLType {
    static get $javaClass() {
        return Java.type('java.sql.SQLType');
    }
    static $isInstance(obj) {
        return obj instanceof SQLType.$javaClass;
    }
}
