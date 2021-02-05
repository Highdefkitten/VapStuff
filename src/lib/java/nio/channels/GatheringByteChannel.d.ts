import ByteBuffer from '../../../java/nio/ByteBuffer.js';
import WritableByteChannel from './WritableByteChannel.js';
export default interface GatheringByteChannel extends WritableByteChannel {
    close(): void;
    isOpen(): boolean;
    write(arg0: Array<ByteBuffer>): number;
    write(arg0: ByteBuffer): number;
    write(arg0: Array<ByteBuffer>, arg1: number, arg2: number): number;
}
export default class GatheringByteChannel {
    static get $javaClass(): any;
}