import FileStoreAttributeView from './attribute/FileStoreAttributeView.js';
export default interface FileStore {
    getAttribute(arg0: string): any;
    getFileStoreAttributeView(arg0: any): FileStoreAttributeView;
    getTotalSpace(): number;
    getUnallocatedSpace(): number;
    getUsableSpace(): number;
    isReadOnly(): boolean;
    name(): string;
    supportsFileAttributeView(arg0: any): boolean;
    supportsFileAttributeView(arg0: string): boolean;
    type(): string;
}
export default class FileStore {
    static get $javaClass(): any;
}