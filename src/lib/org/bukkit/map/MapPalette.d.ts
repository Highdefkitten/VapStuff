export default class MapPalette {
    static get $javaClass(): any;
    static get BLUE(): number;
    static get BROWN(): number;
    static get DARK_BROWN(): number;
    static get DARK_GRAY(): number;
    static get DARK_GREEN(): number;
    static get GRAY_1(): number;
    static get GRAY_2(): number;
    static get LIGHT_BROWN(): number;
    static get LIGHT_GRAY(): number;
    static get LIGHT_GREEN(): number;
    static get PALE_BLUE(): number;
    static get RED(): number;
    static get TRANSPARENT(): number;
    static get WHITE(): number;
    static getColor(index: number): any;
    static imageToBytes(image: any): Array<number>;
    static matchColor(color: any): number;
    static matchColor(r: number, g: number, b: number): number;
    static resizeImage(image: any): any;
}
