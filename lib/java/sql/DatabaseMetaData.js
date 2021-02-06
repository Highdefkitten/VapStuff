export default class DatabaseMetaData {
    static get $javaClass() {
        return Java.type('java.sql.DatabaseMetaData');
    }
    static $isInstance(obj) {
        return obj instanceof DatabaseMetaData.$javaClass;
    }
    static get attributeNoNulls() {
        return DatabaseMetaData.$javaClass.attributeNoNulls;
    }
    static get attributeNullable() {
        return DatabaseMetaData.$javaClass.attributeNullable;
    }
    static get attributeNullableUnknown() {
        return DatabaseMetaData.$javaClass.attributeNullableUnknown;
    }
    static get bestRowNotPseudo() {
        return DatabaseMetaData.$javaClass.bestRowNotPseudo;
    }
    static get bestRowPseudo() {
        return DatabaseMetaData.$javaClass.bestRowPseudo;
    }
    static get bestRowSession() {
        return DatabaseMetaData.$javaClass.bestRowSession;
    }
    static get bestRowTemporary() {
        return DatabaseMetaData.$javaClass.bestRowTemporary;
    }
    static get bestRowTransaction() {
        return DatabaseMetaData.$javaClass.bestRowTransaction;
    }
    static get bestRowUnknown() {
        return DatabaseMetaData.$javaClass.bestRowUnknown;
    }
    static get columnNoNulls() {
        return DatabaseMetaData.$javaClass.columnNoNulls;
    }
    static get columnNullable() {
        return DatabaseMetaData.$javaClass.columnNullable;
    }
    static get columnNullableUnknown() {
        return DatabaseMetaData.$javaClass.columnNullableUnknown;
    }
    static get functionColumnIn() {
        return DatabaseMetaData.$javaClass.functionColumnIn;
    }
    static get functionColumnInOut() {
        return DatabaseMetaData.$javaClass.functionColumnInOut;
    }
    static get functionColumnOut() {
        return DatabaseMetaData.$javaClass.functionColumnOut;
    }
    static get functionColumnResult() {
        return DatabaseMetaData.$javaClass.functionColumnResult;
    }
    static get functionColumnUnknown() {
        return DatabaseMetaData.$javaClass.functionColumnUnknown;
    }
    static get functionNoNulls() {
        return DatabaseMetaData.$javaClass.functionNoNulls;
    }
    static get functionNoTable() {
        return DatabaseMetaData.$javaClass.functionNoTable;
    }
    static get functionNullable() {
        return DatabaseMetaData.$javaClass.functionNullable;
    }
    static get functionNullableUnknown() {
        return DatabaseMetaData.$javaClass.functionNullableUnknown;
    }
    static get functionResultUnknown() {
        return DatabaseMetaData.$javaClass.functionResultUnknown;
    }
    static get functionReturn() {
        return DatabaseMetaData.$javaClass.functionReturn;
    }
    static get functionReturnsTable() {
        return DatabaseMetaData.$javaClass.functionReturnsTable;
    }
    static get importedKeyCascade() {
        return DatabaseMetaData.$javaClass.importedKeyCascade;
    }
    static get importedKeyInitiallyDeferred() {
        return DatabaseMetaData.$javaClass.importedKeyInitiallyDeferred;
    }
    static get importedKeyInitiallyImmediate() {
        return DatabaseMetaData.$javaClass.importedKeyInitiallyImmediate;
    }
    static get importedKeyNoAction() {
        return DatabaseMetaData.$javaClass.importedKeyNoAction;
    }
    static get importedKeyNotDeferrable() {
        return DatabaseMetaData.$javaClass.importedKeyNotDeferrable;
    }
    static get importedKeyRestrict() {
        return DatabaseMetaData.$javaClass.importedKeyRestrict;
    }
    static get importedKeySetDefault() {
        return DatabaseMetaData.$javaClass.importedKeySetDefault;
    }
    static get importedKeySetNull() {
        return DatabaseMetaData.$javaClass.importedKeySetNull;
    }
    static get procedureColumnIn() {
        return DatabaseMetaData.$javaClass.procedureColumnIn;
    }
    static get procedureColumnInOut() {
        return DatabaseMetaData.$javaClass.procedureColumnInOut;
    }
    static get procedureColumnOut() {
        return DatabaseMetaData.$javaClass.procedureColumnOut;
    }
    static get procedureColumnResult() {
        return DatabaseMetaData.$javaClass.procedureColumnResult;
    }
    static get procedureColumnReturn() {
        return DatabaseMetaData.$javaClass.procedureColumnReturn;
    }
    static get procedureColumnUnknown() {
        return DatabaseMetaData.$javaClass.procedureColumnUnknown;
    }
    static get procedureNoNulls() {
        return DatabaseMetaData.$javaClass.procedureNoNulls;
    }
    static get procedureNoResult() {
        return DatabaseMetaData.$javaClass.procedureNoResult;
    }
    static get procedureNullable() {
        return DatabaseMetaData.$javaClass.procedureNullable;
    }
    static get procedureNullableUnknown() {
        return DatabaseMetaData.$javaClass.procedureNullableUnknown;
    }
    static get procedureResultUnknown() {
        return DatabaseMetaData.$javaClass.procedureResultUnknown;
    }
    static get procedureReturnsResult() {
        return DatabaseMetaData.$javaClass.procedureReturnsResult;
    }
    static get sqlStateSQL() {
        return DatabaseMetaData.$javaClass.sqlStateSQL;
    }
    static get sqlStateSQL99() {
        return DatabaseMetaData.$javaClass.sqlStateSQL99;
    }
    static get sqlStateXOpen() {
        return DatabaseMetaData.$javaClass.sqlStateXOpen;
    }
    static get tableIndexClustered() {
        return DatabaseMetaData.$javaClass.tableIndexClustered;
    }
    static get tableIndexHashed() {
        return DatabaseMetaData.$javaClass.tableIndexHashed;
    }
    static get tableIndexOther() {
        return DatabaseMetaData.$javaClass.tableIndexOther;
    }
    static get tableIndexStatistic() {
        return DatabaseMetaData.$javaClass.tableIndexStatistic;
    }
    static get typeNoNulls() {
        return DatabaseMetaData.$javaClass.typeNoNulls;
    }
    static get typeNullable() {
        return DatabaseMetaData.$javaClass.typeNullable;
    }
    static get typeNullableUnknown() {
        return DatabaseMetaData.$javaClass.typeNullableUnknown;
    }
    static get typePredBasic() {
        return DatabaseMetaData.$javaClass.typePredBasic;
    }
    static get typePredChar() {
        return DatabaseMetaData.$javaClass.typePredChar;
    }
    static get typePredNone() {
        return DatabaseMetaData.$javaClass.typePredNone;
    }
    static get typeSearchable() {
        return DatabaseMetaData.$javaClass.typeSearchable;
    }
    static get versionColumnNotPseudo() {
        return DatabaseMetaData.$javaClass.versionColumnNotPseudo;
    }
    static get versionColumnPseudo() {
        return DatabaseMetaData.$javaClass.versionColumnPseudo;
    }
    static get versionColumnUnknown() {
        return DatabaseMetaData.$javaClass.versionColumnUnknown;
    }
}
